<template>
  <div>
    <div id="container-details">
      <div id="details">
        <div class="content">
          <span @click.prevent="close" id="close" title="Fermer">[ x ]</span>
          <div id="background">
            <image-element
              :src="pokemon.image"
              :alt="pokemon.name"
              :height="imageHeight"
              :width="imageWidth"
            ></image-element>
          </div>
          <div class="info">
            <h2>{{ pokemon.name | capitalize }}</h2>
            <h3>{{ pokemon.type | capitalize }}</h3>
            <div class="skills">
              <ul>
                <li v-for="stat in pokemon.stats" :key="stat.stat.name">
                  <b>{{ stat.stat.name | capitalize }}</b>: {{ stat.base_stat }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageElement from '@/components/image/ImageElement';

export default {
  name: 'PokemonDetail',
  components: {ImageElement},
  props: {
    pokemon: {
      type: [Object],
      required: true,
      default: {},
    },
  },
  data() {
    return {
      imageHeight: '96px',
      imageWidth: '96px',
    }
  },
  methods: {
    close() {
      this.$emit('close-pokemon-event');
    },
  },
}
</script>

<style>
#container-details {
  position: fixed;
  top: 0;
  right: 0;
}

#details {
  position: relative;
  max-width: 300px;
  margin: 0 auto;
}

#details h2 {
  font-size: 2em;
  font-weight: bold;
  color: #3c5aa6;
  text-align: center;
}

#details h3 {
  font-size: 1.0em;
  color: #2a75bb;
  text-align: center;
  font-style: italic;
}

#details .content {
  position: relative;
  margin: 40px 20px 20px 20px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0 3px 8px;
  border-radius: 5px;
}

#details #background {
  padding: 20px;
  min-height: 100px;
  border-radius: 5px 5px 0 0;
  background: url(https://d.facdn.net/art/blazingifrit/1475361156/1475361156.blazingifrit_zoruaeevee_background.jpg) no-repeat;
  background-size: cover;
}

#details img {
  display: block;
  margin: 0 auto;
  text-align: center;
}

#details .info {
  padding: 20px;
  color: #2a75bb;
}

#details .skills {
  margin-top: 20px;
}

#details .info b {
  font-weight: bold;
  color: #3c5aa6;
}

#close {
  position: absolute;
  top: -25px;
  right: 0;
  cursor: pointer;
}

#close:hover {
  opacity: 0.5;
}
</style>
