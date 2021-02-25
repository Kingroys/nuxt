<template>
  <div class="alert" role="alert" v-html="text" :class="className"></div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: 'alert-primary',
    },
  },
}
</script>

