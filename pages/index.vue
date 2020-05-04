<template>
  <div>
    <div class="w-screen h-screen">
      <div class="flex justify-center mt-8">
        <div v-if="!this.stream" class="bg-white screen">
        </div>
        <div v-else>
          <video class="screen border border-gray-800" @loadeddata="onLoaded" :srcObject.prop="stream"></video>
        </div>
      </div>
      <div class="flex flex-col items-center mt-10">
        <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-800 rounded inline-flex items-center" @click="selectScreen">録画する画面を選択</button>
        <button v-if="!this.recorder" class="mt-5" @click="recordStart"><img src="~/assets/svg/rec.svg" class="h-16 w-13"></button>
        <button v-else @click="recordStop" class="mt-5"><img src="~/assets/svg/stop.svg" class="h-16 w-13"></button>
      </div>
    </div>
    <div v-if="download_url" class="w-screen h-screen flex flex-col justify-center items-center" id="result">
      <div class="flex justify-center">
          <video class="screen" :src="this.download_url" type="video/webm" controls></video>
      </div>
      <div class="flex flex-col items-center justify-center mt-10">
        <a :href="this.download_url" download="rec.webm">
          <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 border border-gray-800 rounded inline-flex items-center">
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
            <span>ダウンロード</span>
          </button>
        </a>
        <button class="bg-white hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-5 border border-gray-800 rounded inline-flex items-center" @click="toTopPage">
          <img class="h-20p w-20p pr-1" src="~/assets/svg/camera.svg">
          <span>もう一度録画</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stream: undefined,
      recorder: undefined,
      recordedBlobs: [],
      download_url: undefined,
      audio: false,
    }
  },
  created () {
  },
  methods: {
    initializedState () {
      this.stream = undefined
      this.recorder = undefined
      this.recordedBlobs = []
    },
    async selectScreen () {
      console.log(this.audio)
      this.stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: this.audio,
      }).catch(()=>{ console.log(this.stream) })
      if (!this.stream) {
        return 
      }
    },
    async recordStart () {
      if (!this.stream) {
        this.$swal('録画画面を選択して下さい');
        return
      }
      this.recorder = new MediaRecorder(this.stream, {
        mimeType : 'video/webm'
      })
      this.recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          this.recordedBlobs.push(event.data);
        }
      }
      this.recorder.start(1000)
      console.log(this.recorder)
    },
    recordStop () {
      console.log(this.recorder)
      if (this.recorder.state === "recording") {
        this.recorder.stop()
      }
      const blob = new Blob(this.recordedBlobs, { type: "video/webm" });
      const url = window.URL.createObjectURL(blob);
      this.download_url = url
      this.$router.push('#result')
      this.initializedState()
    },
    onLoaded (event) {
      event.target.play()
    },
    toTopPage () {
      this.initializedState()
      this.$router.push('/')
      setTimeout(() => {
        this.download_url = ""
      }, 400)
    }
  }
}
</script>

<style scoped>
.screen {
  width: calc(100vw * 0.5);
  height: calc(100vw * 0.3);
}

.h-20p {
  height: 25px;
  width: 25px;
}

.toggle-dot {
  top: -.25rem;
  left: -.0rem;
  transition: all 0.3s ease-in-out;
}

input:checked ~ .toggle-dot {
  transform: translateX(100%);
  background-color: #48bb78;
}
</style>