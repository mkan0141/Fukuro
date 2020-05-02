<template>
  <div>
    <video class="screen" @loadeddata="onLoaded" :srcObject.prop="stream"></video>
    <button @click="clickButton">ここを押す</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      stream: undefined
    }
  },
  created () {
  },
  methods: {
    async clickButton () {
      this.stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: false
      })
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
  width: 600px;
  height: 300px;
}
</style>