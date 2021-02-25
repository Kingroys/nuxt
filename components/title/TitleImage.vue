<template>
  <div class="title-image">
    <image-element
      :src="src"
      :alt="username"
      :height="imageHeight"
      :width="imageWidth"
      :className="className"
    ></image-element>
    <title-element :text="username"></title-element>
  </div>
</template>

<script>
import ImageElement from '@/components/image/ImageElement';
import TitleElement from '@/components/title/TitleElement';

export default {
  name: 'TitleImage',
  components: {ImageElement, TitleElement},
  props: {
    username: {
      type: String,
      default: '',
    },
    src: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      imageHeight: '65px',
      imageWidth: '65px',
      className: 'rounded-circle',
    }
  },
}
</script>

<style scoped>
.title-image {
  margin-bottom: 20px;
  height: 65px;
}

img {
  float: left;
  margin-right: 15px;
}

h2 {
  display: inline-block;
  padding-top: 10px;
}
</style>
