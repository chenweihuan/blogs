<template>
  <div id="app">
    <div class="container flex-item" v-if="!deadLine">
      {{percent}}%
      <div class="loading-container flex-item">
        <div class="loading"></div>
        <div class="loaded" :style="{width:percent+'%'}"></div>
      </div>
    </div>
    <div v-else>
      <img v-for="(item,index) in preImgArr" :key="index" :src="item">
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "app",
  data() {
    return {
      preImgArr: [
        require("./assets/img1.png"),
        require("./assets/img2.png"),
        require("./assets/img3.png"),
        require("./assets/img4.png")
      ],
      percent: 0, //图片预加载到百分之几
      deadLine: false
    };
  },
  mounted() {
    this.imgPreview();
  },
  methods: {
    imgPreview() {
      this.preventSoFast();
      let count = 0,
        len = this.preImgArr.length;
      this.preImgArr.forEach(val => {
        let img = new Image();
        img.src = val;
        img.onload = () => {
          count++;
          this.percent = (count / len) * 100;
          console.log(this.percent);
          if (count == len) this.onImgload();
        };
      });
    },
    // 图片加载完毕的回调函数
    onImgload() {
      if (this.deadLine) {
        console.log("图片加载完毕");
      } else {
        console.log("图片在1s内加载完毕，延迟到1s，防止闪屏");
        setTimeout(this.onImgload, 200);
      }
    },
    // 设置最小预加载时间为1s，防止加载太快，闪屏
    preventSoFast() {
      this.deadLine = false;
      setTimeout(() => {
        this.deadLine = true;
      }, 1000);
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
img {
  width: 200px;
  height: 200px;
}
.flex-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container {
  height: 600px;
}
.loading-container {
  position: relative;
  height: 2px;
  width: 80%;
  margin-top: 10px;
}
.loading,
.loaded {
  position: absolute;
  height: 2px;
  left: 0;
}
.loading {
  width: 100%;
  background-color: gray;
}
.loaded {
  background-color: red;
}
</style>
