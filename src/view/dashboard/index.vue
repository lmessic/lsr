// 环形图
<template>
  <div>
    <el-card class="card-panel card-cpu">
      <div class="card-memory_title">CPU使用率</div>
      <svg class="svg-outline">
        <!--渐变色-->
        <linearGradient
          id="svg-cpu-gradient"
          gradientUnits="userSpaceOnUse"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop offset="0%" style="stop-color: #ffefff"></stop>
          <stop offset="100%" style="stop-color: #ffefff"></stop>
        </linearGradient>
        <circle
          cx="50%"
          cy="50%"
          r="160"
          fill="none"
          stroke="#e6e7ec"
          stroke-dasharray="5,5"
        ></circle>
        <circle
          cx="50%"
          cy="50%"
          r="120"
          fill="none"
          stroke="#e6e7ec"
          stroke-dasharray="5,5"
        ></circle>
        <circle
          cx="50%"
          cy="50%"
          r="80"
          fill="none"
          stroke="#e6e7ec"
          stroke-dasharray="5,5"
        ></circle>
        <circle
          class="circle"
          cx="50%"
          cy="50%"
          r="80"
          fill="none"
          stroke="url(#svg-cpu-gradient)"
        ></circle>
        <text
          x="50%"
          y="50%"
          fill="#ffefff"
          text-anchor="middle"
          dominant-baseline="middle"
        >
          <tspan class="text">0</tspan>
          <tspan class="percent">%</tspan>
        </text>
      </svg>
    </el-card>
  </div>
</template>
<script>
export default {
  props: {
    circleData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  mounted() {
    // 加载内存使用率动画
    this.setMemoryAnimation();
  },
  methods: {
    setMemoryAnimation() {
      let progressLen = 502;
      const textDom = document.querySelector(".card-cpu .text");
      const circleDom = document.querySelector(".card-cpu .circle");
      let usage = (100 - this.circleData.free).toFixed(2);

      let setPercent = (num) => {
        if (num > usage) return;
        circleDom.style["stroke-dashoffset"] =
          progressLen - (progressLen / 100) * num;
        textDom.innerHTML = num;
        if (num == usage) {
          clearInterval(memoryTimer);
        }
      };

      let i = 0;
      let memoryTimer = setInterval(() => {
        i += Math.ceil(Math.random());
        if (i >= usage) i = usage;
        setPercent(i);
      }, 100);
    },
  },
};
</script>
<style lang="scss" scoped>
.card-panel {
  min-height: 200px;
  border-radius: 5px;
}
.card-cpu {
  width: 300px;
  height: 300px;
  margin-left: 15%;
  position: relative;
  background-image: linear-gradient(to right, #fe6139, #f73981);
  color: #ffefff;
  .card-memory_title {
    position: absolute;
    top: 10%;
    left: 10%;
    font-weight: 600;
    font-size: 12px;
  }
  ::v-deep .el-card__body {
    height: 100%;
    text-align: center;
    padding: 0;
  }
  .svg-outline {
    width: 100%;
    height: 100%;
  }
  .svg-span {
    border: 1px solid;
    width: 100px;
    height: 100px;
  }
  .circle {
    margin: 0;
    fill: none;
    stroke-width: 3;
    stroke-dasharray: 502; // 2*Π*r⚪周长
    stroke-dashoffset: 502;
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
    transition: all 1s;
  }

  .text {
    font-size: 35px;
    font-family: Century Gothic;
  }
  .percent {
    font-size: 35px;
  }
}
</style>