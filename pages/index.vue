<template>
  <div id="page-container">
    <conversation username="Maxime"></conversation>
    <NuxtLink to="/about">About</NuxtLink>
  </div>
</template>

<script>
import Conversation from './../components/Conversation'

export default {
  name: 'App',
  components: {Conversation}
}
</script>

<style scoped>
html, body {
  background: #ffffff;
}

#page-container {
  margin: 40px;
}
</style>

