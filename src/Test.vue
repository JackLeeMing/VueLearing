<template>
    <div>

    </div>
</template>

<script>
    import SimplexNoise from 'simplex-noise'
    export default {
        methods: {
            init() {
const {
	PI,
	cos,
	sin,
	tan,
	abs,
	sqrt,
	pow,
	min,
	max,
	ceil,
	floor,
    round,
    random,
	om,
	atan2
} = Math;
const HALF_PI = 0.5 * PI;
const QUART_PI = 0.25 * PI;
const TAU = 2 * PI;
const TO_RAD = PI / 180;
const G = 6.67 * pow(10, -11);
const EPSILON = 2.220446049250313e-16;
const rand = n => n * random();
const randIn = (_min, _max) => rand(_max - _min) + _min;
const randRange = n => n - rand(2 * n);
const fadeIn = (t, m) => t / m;
const fadeOut = (t, m) => (m - t) / m;
const fadeInOut = (t, m) => {
	let hm = 0.5 * m;
	return abs((t + hm) % m - hm) / hm;
};
const dist = (x1, y1, x2, y2) => sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
const angle = (x1, y1, x2, y2) => atan2(y2 - y1, x2 - x1);
const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2;
const vh = p => p * window.innerHeight * 0.01;
const vw = p => p * window.innerWidth * 0.01;
const vmin = p => min(vh(p), vw(p));
const vmax = p => max(vh(p), vw(p));
const clamp = (n, _min, _max) => min(max(n, _min), _max);
const norm = (n, _min, _max) => (n - _min) / (_max - _min);

Array.prototype.lerp = function(target, speed) {
	this.forEach((n, i) => (this[i] = lerp(n, target[i], speed)));
};

Float32Array.prototype.get = function(i = 0, n = 0) {
	const t = i + n;

	let r = [];

	for (; i < t; i++) {
		r.push(this[i]);
	}

	return r;
};

class ParticleArray {
	constructor(count = 0, props = []) {
		this.count = count;
		this.props = props;
		this.values = new Float32Array(count * props.length);
	}
	get length() {
		return this.values.length;
	}
	set(a = [], i = 0) {
		this.values.set(a, i);
	}
	setMap(o = {}, i = 0) {
		this.set(Object.values(o), i);
	}
	get(i = 0) {
		return this.values.get(i, this.props.length);
	}
	getMap(i = 0) {
		return this.get(i).reduce(
			(r, v, i) => ({
				...r,
				...{ [this.props[i]]: v }
			}),
			{}
		);
	}
}

                let document = window.document;
                const steps = 300;
                const rangeRad = 200;
                const baseHue = Math.round(rand(360));
                const rangeHue = 200;
                const backgroundColor = 'hsla(0,0%,0%,0.8)';

                let canvas;
                let ctx;
                let center;
                let tick;
                let simplex;

                function setup() {
                tick = 0;

                simplex = new SimplexNoise();
                createCanvas();
                resize();
                
                draw();
                }

                function createCanvas() {
                canvas = {
                    a: document.createElement('canvas'),
                    b: document.createElement('canvas') };

                canvas.b.style = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                `;
                document.body.appendChild(canvas.b);
                ctx = {
                    a: canvas.a.getContext('2d'),
                    b: canvas.b.getContext('2d') };

                center = [];
                }

                function resize() {
                const { innerWidth, innerHeight } = window;

                canvas.a.width = innerWidth;
                canvas.a.height = innerHeight;

                ctx.a.drawImage(canvas.b, 0, 0);

                canvas.b.width = innerWidth;
                canvas.b.height = innerHeight;

                ctx.b.drawImage(canvas.a, 0, 0);

                center[0] = 0.5 * canvas.a.width;
                center[1] = 0.5 * canvas.a.height;
                }

                function renderGlow() {
                ctx.b.save();
                ctx.b.filter = 'blur(8px) brightness(200%)';
                ctx.b.globalCompositeOperation = 'lighter';
                ctx.b.drawImage(canvas.a, 0, 0);
                ctx.b.restore();

                ctx.b.save();
                ctx.b.filter = 'blur(4px) brightness(200%)';
                ctx.b.globalCompositeOperation = 'lighter';
                ctx.b.drawImage(canvas.a, 0, 0);
                ctx.b.restore();
                }

                function renderToScreen() {
                ctx.b.save();
                ctx.b.globalCompositeOperation = 'lighter';
                ctx.b.drawImage(canvas.a, 0, 0);
                ctx.b.restore();
                }

                function drawBackground() {
                ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);

                ctx.b.fillStyle = backgroundColor;
                ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height);
                }

                function drawSomething() {
                let x, y, n, w, r, h, c, i = 0;
                
                for (; i <= steps; i++) {
                    x = (i / steps) * canvas.a.width;
                    y = center[1];
                    n = simplex.noise2D(x * 0.005, tick * 0.0015);
                    w = n * (canvas.a.width / steps);
                    r = n * rangeRad;
                    c = `hsla(${0.2 * tick + baseHue + n * rangeHue},50%,50%,${n > 0 ? 0.5 : 0.01})`;

                    ctx.a.beginPath();
                    
                    if (n > 0) {
                    ctx.a.strokeStyle = c;
                    ctx.a.arc(x, y, r, 0, TAU);
                    ctx.a.stroke();
                    } else {
                    ctx.a.fillStyle = c;
                    ctx.a.arc(x, y, -r * 0.5, 0, TAU);
                    ctx.a.fill();
                    }
                    
                    ctx.a.closePath();
                }
                }

                function draw() {
                tick++;

                drawBackground();
                drawSomething();
                renderGlow();
                renderToScreen();

                window.requestAnimationFrame(draw);
                }
                window.addEventListener('load', setup);
                window.addEventListener("resize", resize);   
            }
        },

        mounted () {
            this.init();
        },
    }
</script>

<style lang="scss" scoped>
html, body {
	background: black;
}
</style>