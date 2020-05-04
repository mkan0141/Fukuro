<template>
<div class="w-full border-b-2 border-gray-800">
  <Alert />
  <header class="flex justify-between md:max-w-6xl md:m-auto">
    <nuxt-link class="ml-3" to="/">
      <img src="~/assets/svg/fukuro.svg" class="logo">
    </nuxt-link>
    <nuxt-link class="flex items-center text-gray-800 font-bold text-xl mr-3" to="/usage">
      使い方
    </nuxt-link>
  </header>
</div>
</template>

<script>
import Alert from '~/components/Alert'

export default {
  components: {
    Alert,
  }
}
</script>

<style scoped>
.logo {
  width: 200px;
  height: 70px;
}
</style>