<template>
    <div>
        <canvas id="canvas"></canvas>
    </div>
</template>

<script>
    import THREE from 'three'
    export default {
        
    }
function App() {
  const conf = {
    el: 'canvas',
    fov: 75,
    cameraZ: 400,
    background: 0x00001a,
    numPoints: 50000,
  };

  let renderer, scene, camera, cameraCtrl, startTime;
  let width, height;
  let points;

  const mouse = new THREE.Vector2(0.2, 0.2);
  const { randFloat: rnd, randFloatSpread: rndFS } = THREE.Math;

  init();

  function init() {
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(conf.el) });
    camera = new THREE.PerspectiveCamera(conf.fov);
    camera.far = 10000;
    camera.position.z = conf.cameraZ;
    cameraCtrl = new THREE.OrbitControls(camera, renderer.domElement);
    cameraCtrl.enableKeys = false;
    cameraCtrl.enableDamping = true;
    cameraCtrl.dampingFactor = 0.1;
    cameraCtrl.rotateSpeed = 0.1;

    updateSize();
    window.addEventListener('resize', updateSize, false);
    renderer.domElement.addEventListener('mousemove', e => {
      mouse.x = (e.clientX / width) * 2 - 1;
      mouse.y = -(e.clientY / height) * 2 + 1;
    });

    startTime = Date.now();
    initScene();
    animate();
  }

  function initScene() {
    scene = new THREE.Scene();
    if (conf.background) scene.background = new THREE.Color(conf.background);

    const cscale = chroma.scale([0x00b9e0, 0xff880a, 0x5f1b90, 0x7ec08d]);
    const positions = new Float32Array(conf.numPoints * 3);
    const colors = new Float32Array(conf.numPoints * 3);
    const sizes = new Float32Array(conf.numPoints);
    const rotations = new Float32Array(conf.numPoints);
    const sCoef = new Float32Array(conf.numPoints);
    const position = new THREE.Vector3();
    let color;
    for (let i = 0; i < conf.numPoints; i++) {
      position.set(rndFS(1000), rndFS(1000), rndFS(2000));
      position.toArray(positions, i * 3);
      color = new THREE.Color(cscale(rnd(0, 1)).hex());
      color.toArray(colors, i * 3);
      sizes[i] = rnd(5, 100);
      sCoef[i] = rnd(0.0005, 0.005);
      rotations[i] = rnd(0, Math.PI);
    }
    const geometry = new THREE.BufferGeometry();
    geometry.addAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.addAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.addAttribute('size', new THREE.BufferAttribute(sizes, 1));
    geometry.addAttribute('rotation', new THREE.BufferAttribute(rotations, 1));
    geometry.addAttribute('sCoef', new THREE.BufferAttribute(sCoef, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: mouse },
        uTexture: { value: new THREE.TextureLoader().load('https://klevron.github.io/codepen/misc/star.png') },
      },
      vertexShader: `
      uniform float uTime;
      uniform vec2 uMouse;
      attribute vec3 color;
      attribute float size;
      attribute float rotation;
      attribute float sCoef;
      varying vec4 vColor;
      varying float vRotation;
      void main() {
        vColor = vec4(color, 1.);
        vRotation = rotation;

        vec3 p = vec3(position);
        p.z = -1000. + mod(position.z + uTime*(sCoef*50.*uMouse.y), 2000.);
        p.x = -500. + mod(position.x - uTime*(sCoef*50.*uMouse.x), 1000.);

        vec4 mvPosition = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mvPosition;

        float psize = size * (200. / -mvPosition.z);
        gl_PointSize = psize * (1. + .5*sin(uTime*sCoef + position.x));
      }
    `,
      fragmentShader: `
      uniform sampler2D uTexture;
      varying vec4 vColor;
      varying float vRotation;
      void main() {
        vec2 v = gl_PointCoord - .5;
        float ca = cos(vRotation), sa = sin(vRotation);
        mat2 rmat = mat2(ca, -sa, sa, ca);
        gl_FragColor = vColor * texture2D(uTexture, v*rmat + .5);
      }
    `,
      blending: THREE.AdditiveBlending,
      depthTest: false,
      transparent: true,
    });

    points = new THREE.Points(geometry, material);
    scene.add(points);

    renderer.domElement.addEventListener('mouseup', e => {
      randomColors();
    });
  }

  function randomColors() {
    startTime = Date.now();
    const cscale = chroma.scale([chroma.random(), chroma.random(), chroma.random(), chroma.random()]);
    const colors = points.geometry.attributes.color.array;
    let j, color;
    for (let i = 0; i < conf.numPoints; i++) {
      j = i * 3;
      color = cscale(rnd(0, 1));
      colors[j] = color.get('rgb.r') / 0xff;
      colors[j + 1] = color.get('rgb.g') / 0xff;
      colors[j + 2] = color.get('rgb.b') / 0xff;
    }
    points.geometry.attributes.color.needsUpdate = true;
  }

  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() - startTime;
    points.material.uniforms.uTime.value = time;
    points.rotation.z += -mouse.x * 0.03;

    if (cameraCtrl) cameraCtrl.update();
    renderer.render(scene, camera);
  }

  function updateSize() {
    width = window.innerWidth;
    height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}
</script>

<style lang="scss" scoped>
html, body {
  margin: 0;
}
canvas {
  position: fixed;
  width: 100%;
  height: 100%;
}
</style>