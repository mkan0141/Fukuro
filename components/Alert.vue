<template>
  <div v-if="isAlertActive && !isSupportBrowser" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 relative" role="alert">
    <strong class="font-bold">ごめんなさい！</strong>
    <span class="block sm:inline">使用されているブラウザで使うことはできません。対応しているブラウザは<nuxt-link to="/usage#browser" class="text-blue-600">こちら</nuxt-link>を見て下さい。</span>
    <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
      <button @click="closeAlert">
        <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </button>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isSupportBrowser: true,
      isAlertActive: true,
    }
  },
  created () {
    const inBrowser = typeof window !== 'undefined'
    const UA = inBrowser && window.navigator.userAgent.toLowerCase()
    const isIE = UA && /msie|trident/.test(UA)
    const isSafari = UA && UA.indexOf("safari") !== -1 && UA.indexOf('chrome') === -1 && UA.indexOf('edge') === -1
    this.isSupportBrowser = !(isIE || isSafari)
  },
  methods: {
    closeAlert () {
      this.isAlertActive = false
    }
  }
}
</script>