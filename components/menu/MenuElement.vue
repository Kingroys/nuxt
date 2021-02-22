<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Test Nuxt</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Messages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <menu-link :menu="menu" v-for="menu in menus" :key="menu"></menu-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MenuLink from "~/components/menu/MenuLink";

export default {
  name: "MenuElement",
  components: {MenuLink},
  data() {
    return {
      menus: [
        'alexandre',
        'jordan',
        'maxime'
      ]
    }
  }
}
</script>

<style scoped>
.navbar {
  margin-bottom: 40px;
  padding: 20px 40px;
}
</style>
