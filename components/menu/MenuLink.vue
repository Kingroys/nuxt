<template>
  <NuxtLink class="nav-link" :class="{ active: activeMenu === menu }" :to="link">{{ menu | capitalize }}</NuxtLink>
</template>

<script>
export default {
  name: "MenuLink",
  props: {
    menu: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      activeMenu: this.$route.params.id
    }
  },
  computed: {
    link() {
      return '/messages/' + this.menu;
    }
  }
}
</script>
