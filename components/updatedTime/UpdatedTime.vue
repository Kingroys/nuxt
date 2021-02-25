<template>
  <p>
    Mise à jour : {{ value }}
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'UpdatedTime',
  props: {
    value: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped>
p {
  font-style: italic;
  font-size: 0.9em;
}
</style>
