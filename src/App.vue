<template>
  <div id="app">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
import myMixin from './mixins/mixin'
export default {
  name: 'app',
  mixins:[myMixin],
  components: {
  },
  data(){
    return {
      title:'Toggle',
      show:true,
      value2:true,
      val:'',
      a: '11',
      b: '22',
    }
  },
  filters: {
    upFirst: function(value) {
      if(!value) return ''
      value = value.toString();
      return value.charAt(0).toUpperCase()+value.slice(1);
    },
    upLast: function(value) {
      if(!value) return ''
      value = value.toString();
      return value.slice(0,value.length-1)+value.charAt(value.length-1).toUpperCase();
    }
  },
  methods: {
    handleChange(val){
      this.val = val;
      return "lijiakui"
    },
    initTree(){
      const canv = window.document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canv.width = window.innerWidth;
canv.height = window.innerHeight;
const colors = [{
  hue: 0,
  sat: 100,
  light: 84
}, {
  hue: 299,
  sat: 91,
  light: 83
}, {
  hue: 355,
  sat: 76,
  light: 80
}, {
  hue: 269,
  sat: 76,
  light: 85
}];

const drawTrees = (startX, startY, len, angle) => {
  const randLen = () => Math.random() * ((len - 10) + 10);

  ctx.beginPath();
  ctx.save();
  
  ctx.translate(startX, startY * 0.99);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.lineWidth = Math.ceil(len * 0.025);
  ctx.strokeStyle  = `hsl(15, 36%, ${50 - len * 0.15}%)`;
  ctx.stroke();
  
  if(len < 10) {
    drawLeaves(startX, startY, 1.4);
    ctx.restore();
    return;
  }

  drawTrees(0, -len, randLen() * 0.8, -25);
  drawTrees(0, -len, randLen() * 0.925, -15);
  drawTrees(0, -len, randLen() * 0.925, 10);
  drawTrees(0, -len, randLen() * 0.8, 25);
  
  ctx.restore();
}

const drawLeaves = (posX, posY, size) => {
  const leafColor = Math.floor(Math.random() * colors.length);
  ctx.beginPath();
  ctx.save();
  ctx.arc(posX, posY, size, 0, 2 * Math.PI);
  ctx.fillStyle = `hsla(${colors[leafColor].hue}, ${colors[leafColor].sat}%, ${colors[leafColor].light}%, 100%)`;
  ctx.shadowColor = `hsla(${colors[leafColor].hue}, ${colors[leafColor].sat}%, ${colors[leafColor].light - 20}%, 100%)`;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1;
  ctx.shadowBlur = 1;
  ctx.fill();
  ctx.restore();
}

const resizeChecks = event => {
  canv.width = window.innerWidth;
  canv.height = window.innerHeight;
  const treeCount = Math.floor(canv.width / 150);
  // Time
  for(let i = 0; i < treeCount; i++) {
    // Memory
    drawTrees(Math.random() * (canv.width - 100) + 100, canv.height * 1.3, Math.floor(canv.height * 0.3), 0);
  }
}

resizeChecks();
window.addEventListener('resize', resizeChecks);
    }
  },
  mounted () {
    this.initTree();
  },
}
</script>
<style>
body {
  width: 100%;
  background: linear-gradient(#80f9f9 30%, #d3fcfd 80%);
}

canvas {
  display: block;
  max-width: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#demo, .demo, .content .demo {
    border: 1px solid #eee;
    border-radius: 2px;
    padding: 25px 35px;
    margin-top: 1em;
    margin-bottom: 40px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow-x: auto;
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
