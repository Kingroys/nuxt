<template>
  <h2>
    {{ text | capitalize }}
    <slot></slot>
  </h2>
</template>

<script>
export default {
  name: "TitleElement",
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
h2 {
  margin-bottom: 5px;
  font-size: 2em;
}
</style>
