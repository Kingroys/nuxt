<template>
  <b-img-lazy :src="src" :class="className" :id="id" :alt="alt" :width="width" :height="height" />
</template>

<script>
import {BImgLazy} from 'bootstrap-vue'

export default {
  name: 'ImageElement',
  components: {BImgLazy},
  props: {
    src: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    alt: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '',
    },
  },
}
</script>
