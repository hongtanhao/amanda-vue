<template>
  <div id="box" v-if="isShow">
    <div id="main">
      <div id="bar">
        <span @click="closeWin">x</span>
        <span @click="shrinkWin">-</span>
        <span @click="magnifyWin">+</span>
      </div>
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'drag-item',
  data () {
    return {
      boxCss: {},
      isShow: true
    }
  },
  mounted () {
    var oBox = document.getElementById('box')
    var oBar = document.getElementById('bar')
    this.startDrag.bind(this, oBar, oBox)()
    this.getBoxCss()
  },
  methods: {
    closeWin () {
      this.isShow = false
    },
    shrinkWin () {
      var oBox = document.getElementById('box')
      oBox.style.top = this.boxCss.top
      oBox.style.left = this.boxCss.left
      oBox.style.width = this.boxCss.width
      oBox.style.height = this.boxCss.height
    },
    magnifyWin () {
      var oBox = document.getElementById('box')
      oBox.style.top = 0
      oBox.style.left = 0
      oBox.style.width = window.innerWidth + 'px'
      oBox.style.height = window.innerHeight + 'px'
    },
    getCss (o, key) {
      return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key]
    },
    getBoxCss () {
      var oBox = document.getElementById('box')
      this.boxCss.left = this.getCss(oBox, 'left')
      this.boxCss.top = this.getCss(oBox, 'top')
      this.boxCss.width = this.getCss(oBox, 'width')
      this.boxCss.height = this.getCss(oBox, 'height')
    },
    startDrag (bar, target) {
      var params = {
        left: 0,
        top: 0,
        currentX: 0,
        currentY: 0,
        flag: false,
        pull: false,
        direction: ''
      }
      let getCss = (o, key) => {
        return o.currentStyle ? o.currentStyle[key] : document.defaultView.getComputedStyle(o, false)[key]
      }
      if (getCss(target, 'left') !== 'auto') {
        params.left = this.getCss(target, 'left')
      }
      if (getCss(target, 'top') !== 'auto') {
        params.top = this.getCss(target, 'top')
      }
      bar.onmousedown = function (event) {
        params.flag = true
        if (!event) {
          event = window.event
          bar.onselectstart = function () {
            return false
          }
        }
        var e = event
        params.currentX = e.clientX
        params.currentY = e.clientY
      }
      target.onmousedown = function (event) {
        params.pull = true
        params.disWPull = this.offsetWidth
        params.disHPull = this.offsetHeight
        params.disLPull = this.offsetLeft
        params.disXPull = event.clientX
        params.disTPull = this.offsetTop
        params.disYPull = event.clientY
        // 判断鼠标在在哪个方位按下
        if (params.disXPull > params.disLPull + params.disWPull - 10) {
          params.direction = 'right'
        }
        if (params.disXPull < params.disLPull + 10) {
          params.direction = 'left'
        }
        if (params.disYPull > params.disTPull + params.disHPull - 10) {
          params.direction = 'bottom'
        }
        if (params.disYPull < params.disTPull + 10) {
          params.direction = 'top'
        }
      }
      document.onmousemove = event => {
        if (params.flag) {
          var e = event
          var nowX = e.clientX
          var nowY = e.clientY
          var disX = nowX - params.currentX
          var disY = nowY - params.currentY
          target.style.left = parseInt(params.left) + disX + 'px'
          target.style.top = parseInt(params.top) + disY + 'px'
          return false
        }
        if (params.pull) {
          switch (params.direction) {
            case 'left':
              target.style.width = params.disWPull - (event.clientX - params.disXPull) + 'px'
              target.style.left = params.disLPull + (event.clientX - params.disXPull) + 'px'
              break
            case 'right':
              target.style.width = params.disWPull + (event.clientX - params.disXPull) + 'px'
              break
            case 'top':
              target.style.height = params.disHPull - (event.clientY - params.disYPull) + 'px'
              target.style.top = params.disHPull + (event.clientY - params.disYPull) + 'px'
              break
            case 'bottom':
              target.style.height = params.disHPull + (event.clientY - params.disYPull) + 'px'
          }
        }
      }
      document.onmouseup = () => {
        params.pull = false
        params.flag = false
        // document.onmousemove = null
        // document.onmousedown = null
        if (getCss(target, 'left') !== 'auto') {
          params.left = getCss(target, 'left')
        }
        if (getCss(target, 'top') !== 'auto') {
          params.top = getCss(target, 'top')
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped>
#box {
  position: absolute;
  left: 700px;
  top: 300px;
  padding: 5px;
  background: #f0f3f9;
  font-size: 12px;
  box-shadow: 2px 2px 4px #666666;
  z-index: 10000;
  width: 40%;
  height: 20%;
  cursor: crosshair
}
#main {
  border: 1px solid #a0b3d6;
  background: white;
  height: 100%;
  position: relative;
}
#bar {
  line-height: 24px;
  background: #beceeb;
  border-bottom: 1px solid #a0b3d6;
  padding-left: 5px;
  cursor: move;
}
#bar > span {
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 100%;
  text-align: center;
  line-height: 16px;
  font-weight: bold;
  color: purple;
  cursor: default;
}
#bar > span:nth-child(1) {
  background-color: red;
}
#bar > span:nth-child(2) {
  background-color: yellow;
  margin: 0 4px;
}
#bar > span:nth-child(3) {
  background-color: green;
}
#content {
  position: absolute;
  top: 24px;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
