<template>
  <div>
    <div class="flex justify-center mt-16">
      <div v-if="this.stream===undefined" class="bg-white screen">
      </div>
      <div v-else>
        <video class="screen" @loadeddata="onLoaded" :srcObject.prop="stream"></video>
      </div>
    </div>
    <div class="flex justify-center mt-16">
      <button v-if="this.stream === undefined" @click="recordStart"><img src="~/assets/svg/rec.svg" class="h-16 w-13"></button>
      <button v-else @click="recordStop"><img src="~/assets/svg/stop.svg" class="h-16 w-13"></button>
    </div>
    <div class="flex justify-center mt-16">
        <video class="screen" :src="this.download_url" type="video/webm" controls></video>
    </div>
    <div class="flex justify-center mt-8">
      <a :href="this.download_url" download="rec.webm">保存</a>
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
    }
  },
  created () {
  },
  methods: {
    async recordStart () {
      this.stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false,
      }).catch(()=>{ console.log(this.stream) })
      if (!this.stream) {
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
    },
    recordStop () {
      this.recorder.stop()
      const blob = new Blob(this.recordedBlobs, { type: "video/webm" });
      const url = window.URL.createObjectURL(blob);
      this.download_url = url
      console.log(url)
    },
    onLoaded (event) {
      console.log(event)
      event.target.play()
    }
  }
}
</script>

<style scoped>
.screen {
  width: calc(100vw * 0.5);
  height: calc(100vw * 0.3);
}
</style>