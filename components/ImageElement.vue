<template>
  <img :src="require(`~/assets${src}`)" class="rounded-circle" :alt="alt" :width="width" :height="height">
</template>

<script>
export default {
  name: "ImageElement",
  props: {
    src: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: Number,
      default: 60,
    },
    height: {
      type: Number,
      default: 60,
    },
  },
}
</script>
