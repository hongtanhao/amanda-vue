<template>
  <div class="ama-video">
    <div :style="{height: height, width: width}" class="mod-public-videoplay" id="modPublicVideoPlay">
      <video
        id="html5VideoPlayer"
        width="100%"
        height="100%"
        :src="src"
        loop="loop"
        ref="myVideo"
        controls
      >您的浏览器不支持 video 标签。</video>
      <!-- 播放器工具栏 -->
      <div v-if="isShowCustomerControls" class="html5-player-toolbar">
        <!-- 视频滑块容器 -->
        <div id="filmWrap">
          <!-- 视频滑块轨道 -->
          <div id="filmLoad">
            <!-- 视频滑块句柄 -->
            <div id="filmCircle"></div>
          </div>
        </div>

        <!-- 工具栏其他UI -->
        <div class="html5-player-toolbar-back">
          <!-- 停止 -->
          <div id="html5PlayerToolbarStop" class="stop" @click="pause"></div>
          <!-- 继续 -->
          <div id="html5PlayerToolbarContinue" class="continue" @click="play"></div>
          <!-- 时间 -->
          <div class="video-time-show">
            <span id="currentTime">00:00</span>/
            <span id="duration">00:00</span>
          </div>
          <!-- 声音标识 -->
          <div class="voice-icon" id="voiceIcon" @click="nosound"></div>
          <div class="voice-icon-no" id="voiceIconNo" @click="nosound"></div>

          <!-- 声音滑块容器 -->
          <div id="voiceWrap">
            <!-- 声音滑块轨道 -->
            <div id="voiceLoad">
              <!-- 声音滑块句柄 -->
              <div id="videoCircle"></div>
            </div>
          </div>

          <!-- 全屏标识 -->
          <div class="html5-video-allscreem" @click="allscreem"></div>

          <!-- 分享按钮 -->
          <div class="html5-video-share" @click="share"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatSecondsToTime } from '@/utils/'
export default {
  name: 'ama-video',
  props: {
    height: {
      type: String
    },
    width: {
      type: String
    },
    src: {
      type: String
    }
  },
  data () {
    return {
      getDom: {},
      isShowCustomerControls: false, // 是否启用自定义视频控件
      noSoundSign: { // 记录声音开发，以及更改之后的声音
        sign: false,
        voice: 0.5
      }
    }
  },
  mounted () {
    if (this.isShowCustomerControls) {
      this.addEventForCustomerControls()
    }
  },
  methods: {
    addEventForCustomerControls () {
      let getDom = this.getInitO()
      this.getDom = getDom
      // 记录声音开发，以及更改之后的声音
      let noSoundSign = this.noSoundSign
      let disX
      let disY
      let filmCircleSign
      const playBySeconds = (num) => {
        getDom.myVideo.currentTime = getDom.myVideo.duration / 500 * num
      }
      // 声音拖动控制
      this.addEvent(getDom.domCircle, 'onmousedown', (e) => {
        disX = e.clientX - getDom.domCircle.offsetLeft // 得到该元素的父节点的left
        disY = e.clientY - getDom.domCircle.offsetTop // 得到该元素的父节点的left
        document.onmousemove = (event) => {
          /* eslint-disable */
          var evnt = window.event || event
          var x = evnt.clientX - disX
          var y = evnt.clientY - disY
          var windowWidth = document.documentElement.clientWidth - getDom.domCircle.offsetWidth
          var windowHeight = document.documentElement.clientHeight - getDom.domCircle.offsetHeight
          x = x < 0 ? 0 : x // 当声音div到窗口最左边时
          x = x > windowWidth ? windowWidth : x // 当声音div到窗口最右边时
          y = y < 0 ? 0 : y // 当声音div到窗口最上边时
          y = y > windowHeight ? windowHeight : y // 当声音div到窗口最下边时
          if (x < 95) {
            getDom.domCircle.style.left = x + 'px'
            getDom.voiceLoad.style.width = x
            noSoundSign.voice = getDom.myVideo.volume = x / 100
          }
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmousup = null
          document.onclick = null
        }
        return false
      })
      // 声音点击调节
      this.addEvent(this.fid('voiceWrap'), 'onclick', (event) => {
        var evnt = event || window.event // 得到鼠标事件
        var voiceWrapLeft = this.getPoint(this.fid('voiceWrap')).l
        var x = evnt.clientX - voiceWrapLeft
        if (x < 100) {
          getDom.domCircle.style.left = x + 'px'
          getDom.voiceLoad.style.width = x
          noSoundSign.voice = getDom.myVideo.volume = x / 100
        }
      })
      // 播放进度条播放控制
      this.addEvent(getDom.filmCircle, 'onmousedown', event => {
        filmCircleSign = true // 拖动标记
        var evnt = window.event || event // 鼠标移动时
        disX = evnt.clientX - getDom.filmCircle.offsetLeft // 得到鼠标事件
        disY = evnt.clientY - getDom.filmCircle.offsetTop // 鼠标横坐标 - div1的left
        document.onmousemove = function (event) {
          if (!filmCircleSign) return
          var evnt = window.event || event
          var x = evnt.clientX - disX
          var y = evnt.clientY - disY
          var windowWidth = document.documentElement.clientWidth - getDom.filmCircle.offsetWidth
          var windowHeight = document.documentElement.clientHeight - getDom.filmCircle.offsetHeight
          x = x < 0 ? 0 : x // 当div1到窗口最左边时
          x = x > windowWidth ? windowWidth : x // 当div1到窗口最右边时
          y = y < 0 ? 0 : y // 当div1到窗口最上边时
          y = y > windowHeight ? windowHeight : y // 当div1到窗口最下边时
          if (x < 495) {
            getDom.filmCircle.style.left = x + 'px'
            getDom.filmLoad.style.width = x
            playBySeconds(x)
          }
        }
        document.onmouseup = function () {
          document.onmousemove = null
          document.onmouup = null
          filmCircleSign = false
        }
        return false
      })
      // 点击进度条
      let film = this.fid('filmWrap')
      this.addEvent(film, 'onclick', function (event) {
        var evnt = event || window.event
        var voiceWrapLeft = this.getPoint(film).l
        var x = evnt.clientX - voiceWrapLeft
        if (x < 500) {
          getDom.filmCircle.style.left = x + 'px'
          getDom.filmLoad.style.width = x
          playBySeconds(x)
        }
      })
      // 播放时间
      this.addEvent(getDom.myVideo, 'timeupdate', () => {
        var currentTime = getDom.myVideo.currentTime // 获取当前播放时间
        this.fid('currentTime').innerHTML = formatSecondsToTime(currentTime)
        this.fid('duration').innerHTML = formatSecondsToTime(getDom.myVideo.duration)
        this.getDom.filmCircle.style.left = currentTime / getDom.myVideo.duration * 500 + 'px'
        this.getDom.filmLoad.style.width = currentTime / getDom.myVideo.duration * 500
      })
    },
    share () {
      alert('分享')
    },
    allscreem () {
      // 判断是否ie并进行相应的全屏 requestFullScreen()
      var navigatorName = 'Microsoft Internet Explorer'
      if (navigator.appName === navigatorName) {
        // eslint-disable-next-line
        var WsShell = new ActiveXObject('WScript.Shell')
        WsShell.SendKeys('{F11}')
      } else {
        let { myVideo } = this.getDom
        if (myVideo.requestFullscreen) {
          myVideo.requestFullscreen()
        } else if (myVideo.mozRequestFullScreen) {
          myVideo.mozRequestFullScreen()
        } else if (myVideo.webkitRequestFullScreen) {
          myVideo.webkitRequestFullScreen()
        } else if (myVideo.msRequestFullscreen) {
          myVideo.msRequestFullscreen()
        }
      }
    },
    nosound () {
      if (this.noSoundSign.sign === false) {
        this.noSoundSign.sign = true
        this.getDom.myVideo.volume = 0
        this.getDom.domCircle.style.left = '0px'
        this.getDom.voiceLoad.style.width = 0
        this.fid('voiceIcon').style.display = 'none'
        this.fid('voiceIconNo').style.display = 'inline-block'
      } else {
        this.noSoundSign.sign = false
        this.getDom.myVideo.volume = this.noSoundSign.voice
        this.getDom.domCircle.style.left = this.noSoundSign.voice * 100 + 'px'
        this.getDom.voiceLoad.style.width = this.noSoundSign.voice * 100
        this.fid('voiceIcon').style.display = 'inline-block'
        this.fid('voiceIconNo').style.display = 'none'
      }
    },
    pause () {
      this.fid('html5PlayerToolbarContinue').style.display = 'inline-block'
      this.fid('html5PlayerToolbarStop').style.display = 'none'
      this.$refs['myVideo'].pause()
    },
    play () {
      this.fid('html5PlayerToolbarContinue').style.display = 'none'
      this.fid('html5PlayerToolbarStop').style.display = 'inline-block'
      this.$refs['myVideo'].play()
    },
    fid (id) {
      return document.getElementById(id)
    },
    getPoint (obj) {
      var t = obj.offsetTop
      var l = obj.offsetLeft
      while ((obj = obj.offsetParent)) {
        t += obj.offsetTop
        l += obj.offsetLeft
      }
      return { l: l, t: t }
    },
    addEvent (ele, eventName, func) {
      if (window.attachEvent) {
        ele.attachEvent(eventName, func)
      } else {
        eventName = eventName.replace(/^on/, '')
        ele.addEventListener(eventName, func, false)
      }
    },
    getInitO () {
      let getDom = (() => {
        return {
          myVideo: this.fid('html5VideoPlayer'), // video播放器
          voiceLoad: this.fid('voiceLoad'), // 声音滚动条
          domCircle: this.fid('videoCircle'), // 声音滑块
          filmLoad: this.fid('filmLoad'), // 影片滚动条
          filmCircle: this.fid('filmCircle') // 影片滑块
        }
      })()
      getDom.myVideo.volume = 0.5
      getDom.domCircle.style.left = '50px'
      getDom.voiceLoad.style.width = 50
      return getDom
    }
  }
}
</script>
<style scoped>

.ama-video {
  height: 100%;
  width: 100%;
}

.mod-public-videoplay {
  background-color: black;
  cursor: pointer;
}
.close {
  opacity: 0.5;
  filter: alpha(opacity=50);
  position: absolute;
  right: -37px;
  top: 0;
  width: 37px;
  height: 37px;
  background-color: #000;
  position: absolute;
  cursor: pointer;
}
.x {
  width: 17px;
  height: 17px;
  margin: 10px;
  background: url("img/close.png") no-repeat center center;
}
.close:hover .x {
  background: url("img/close-hover.png") no-repeat center center;
}

.close:active .x {
  background: url("img/close-active.png") no-repeat center center;
}

.html5-player-toolbar {
  -webkit-user-select: none;
  /* Chrome all / Safari all */
  -moz-user-select: none;
  /* Firefox all */
  -ms-user-select: none;
  /* IE 10+ */
  user-select: none;
  width: 100%;
  height: 36px;
  position: absolute;
  bottom: 0;
  opacity: 0.9;
  filter: alpha(opacity=90);
}

.html5-player-toolbar-back {
  width: calc(100% - 2);
  height: 34px;
  border: 1px solid transparent;
}

#voiceWrap {
  float: left;
  margin-left: 10px;
  width: 100px;
  height: 2px;
  cursor: pointer;
  background-color: #939393;
  margin-top: 18px;
  position: relative;
}

#videoCircle {
  cursor: pointer;
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 180px;
  background-color: white;
}

#voiceLoad {
  height: 2px;
  width: 0;
  background-color: #ff4987;
}

#filmWrap {
  width: 100%;
  height: 2px;
  background-color: #939393;
  position: relative;
  cursor: pointer;
}

#filmCircle {
  position: absolute;
  top: -5px;
  width: 10px;
  height: 10px;
  border-radius: 180px;
  background-color: white;
  cursor: pointer;
}

#filmLoad {
  height: 2px;
  width: 0;
  background-color: #ff4987;
}

/* 继续按钮 */
.continue {
  display: none;
  width: 20px;
  height: 20px;
  margin-top: 9px;
  margin-left: 10px;
  float: left;
  background: url("img/continue-normal.png");
}

.continue:hover {
  background: url("img/continue-hover.png");
}

.continue:active {
  background: url("img/continue-active.png");
}

/* 暂停按钮 */
.stop {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 9px;
  margin-left: 10px;
  background: url("img/stop-normal.png");
}

.stop:hover {
  background: url("img/stop-hover.png");
}

.stop:active {
  background: url("img/stop-active.png");
}

/* 播放时间容器 */
.video-time-show {
  float: left;
  color: white;
  margin: 10px;
}

/* 静音图标 */
.voice-icon {
  float: left;
  width: 20px;
  height: 20px;
  margin-top: 9px;
  background: url("img/sound-normal.png");
}

.voice-icon:hover {
  background: url("img/sound-hover.png");
}

.voice-icon:active {
  background: url("img/sound-active.png");
}

/* 解除静音 */
.voice-icon-no {
  float: left;
  width: 20px;
  display: none;
  height: 20px;
  margin-top: 9px;
  background: url("img/nosound-normal.png") 1px 0;
}

.voice-icon-no:hover {
  background: url("img/nosound-hover.png") 1px 0;
}

.voice-icon-no:active {
  background: url("img/nosound-active.png") 1px 0;
}

/* voice-allscreem 全屏图标 */
/* 解除静音 */
.html5-video-allscreem {
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 9px;
  margin-right: 10px;
  background: url("img/allscreem-normal.png");
}

.html5-video-allscreem:hover {
  background: url("img/allscreem-hover.png");
}

.html5-video-allscreem:active {
  background: url("img/allscreem-active.png");
}

/* 分享按钮 */
.html5-video-share {
  float: right;
  width: 20px;
  height: 20px;
  margin-top: 9px;
  margin-right: 10px;
  background: url("img/share-normal.png");
}

.html5-video-share:hover {
  background: url("img/share-hover.png");
}

.html5-video-share:active {
  background: url("img/share-active.png");
}
</style>
