<template>
  <div>
    <title-element :text="text">
      <span class="badge badge-pill badge-danger" v-show="count">{{ count }}</span>
    </title-element>
  </div>
</template>

<script>
import TitleElement from "@/components/TitleElement";

export default {
  name: "TitleCount",
  components: {TitleElement},
  props: {
    text: {
      type: String,
      default: '',
    },
    count: {
      type: Number,
      default: 0,
    },
  },
}
</script>

<style scoped>
.badge {
  font-size: 0.5em;
  vertical-align: text-top;
}
</style>