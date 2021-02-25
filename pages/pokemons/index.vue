<template>
  <div>
    <menu-element></menu-element>
    <div class="main-container">
      <pokemon-list
        :pokemons="pokemons"
        :limit="limit"
        :title="title"
      ></pokemon-list>
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/pokemon/PokemonList';

export default {
  name: 'Pokemons',
  components: {PokemonList},
  data() {
    return {
      pokemons: {},
      limit: 100,
      title: 'Pokémons',
    }
  },
  methods: {
    async fetchPokemons() {
      let pokemons = await this.$axios.$get('https://pokeapi.co/api/v2/pokemon?limit=' + this.limit + 'offset=0');
      this.pokemons = pokemons.results.sort((a, b) => (a.name > b.name) ? 1 : -1) ?? {};
    },
  },
  created() {
    this.fetchPokemons();
  },
}
</script>
