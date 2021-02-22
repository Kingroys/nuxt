<template>
  <div>
    <menu-element></menu-element>
    <conversation username="Maxime"></conversation>
  </div>
</template>

<script>
import Conversation from '~/components/Conversation'
import MenuElement from "~/components/menu/MenuElement";

export default {
  name: 'App',
  components: {MenuElement, Conversation},
}
</script>

<style scoped>
html, body {
  background: #ffffff;
}
</style>

