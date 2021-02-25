<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="/">Nuxt</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            Messages
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <menu-link
              v-for="message in messages"
              :key="message.link"
              :item="message"
            ></menu-link>
          </div>
        </li>
        <li class="nav-item">
          <menu-link :item="pokemons"></menu-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MenuLink from '~/components/menu/MenuLink';

export default {
  name: 'MenuElement',
  components: {MenuLink},
  data() {
    return {
      messages: [
        {
          'link': '/messages/alexandre',
          'text': 'Alexandre',
        },
        {
          'link': '/messages/jordan',
          'text': 'Jordan',
        },
        {
          'link': '/messages/maxime',
          'text': 'Maxime',
        },
      ],
      pokemons: {
        'link': '/pokemons',
        'text': 'Pokémons',
      },
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
