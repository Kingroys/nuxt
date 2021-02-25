<template>
  <transition name="bounce" appear>
    <div v-if="pokemon.image" class="pokemon-item" :class="pokemon.name" @click="selectPokemon">
      <image-element
        :src="pokemon.image"
        :height="imageHeight"
        :width="imageWidth"
      ></image-element>
      <b>{{ pokemon.name | capitalize }}</b>
    </div>
  </transition>
</template>

<script>
import ImageElement from '@/components/image/ImageElement';

export default {
  name: 'PokemonItem',
  components: {ImageElement},
  props: {
    pokemonName: {
      type: String,
      required: true,
      default: '',
    },
    fetchPokemon: {
      type: Function,
    },
  },
  data() {
    return {
      pokemon: {},
      imageHeight: '96px',
      imageWidth: '96px',
    }
  },
  methods: {
    async getPokemon() {
      this.pokemon = await this.fetchPokemon(this.pokemonName);
    },
    selectPokemon() {
      this.$emit('select-pokemon-event', this.pokemon.name);
    },
  },
  created() {
    this.getPokemon();
  },
}
</script>

<style>
.pokemon-item {
  display: inline-block;
  margin: 10px;
  padding: 20px;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.16) 0 1px 4px;
  width: 190px;
}

.pokemon-item:nth-child(odd) {
  color: #3c5aa6;
}

.pokemon-item:nth-child(even) {
  color: #2a75bb;
}

.pokemon-item:hover {
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
}

.pokemon-item.active {
  box-shadow: #2a75bb 0 1px 4px;
}

.pokemon-item.active:hover {
  box-shadow: #2a75bb 0 3px 8px;
}

.pokemon-item img {
  display: block;
  margin: 0 auto 10px auto;
}

.pokemon-item b {
  font-weight: bold;
  display: block;
  text-align: center;
}

.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in .3s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform-origin: center;
  }
  100% {
    transform: scale(1);
    transform-origin: center;
  }
}
</style>
