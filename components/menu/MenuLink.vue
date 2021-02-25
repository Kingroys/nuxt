<template>
  <NuxtLink class="nav-link" :to="item.link">{{ item.text }}</NuxtLink>
</template>

<script>
export default {
  name: 'MenuLink',
  props: {
    item: {
      type: Object,
      default: {},
    },
  },
}
</script>
