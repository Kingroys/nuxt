<template>
  <div>
    <title-image
      :username="username"
      src="/bot.png"
    ></title-image>
    <alert
      :text="'Je suis ' + username + '.<br>Écrivez moi, je connais <strong>' + responseCount + '</strong> blagues.'"
      class-name="alert-secondary">
    </alert>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Alert from "@/components/Alert";
import TitleImage from "@/components/title/TitleImage";

export default {
  name: "MessageBot",
  components: {Alert, TitleImage},
  props: {
    username: {
      type: String,
      default: '',
    },
    waitingForAnswer: {
      type: Boolean,
      default: false,
    },
  },
  http: {
    root: 'http://localhost:3001'
  },
  watch: {
    waitingForAnswer(value) {
      if (value) {
        let self = this;
        setTimeout(function () {
          self.response()
        }, 1000)
      }
    }
  },
  data() {
    return {
      className: 'right',
      responseCount: 20,
    }
  },
  methods: {
    response() {
      this.$resource('bot-messages/' + this.randomNumber(this.responseCount))
        .get()
        .then(
          response => {
            this.$emit('add-message-event', response.data.message, this.className, false);
          },
          response => {
            console.log('error', response);
          },
        );
    },
    randomNumber(max) {
      let number = Math.floor(Math.random() * Math.floor(max));
      return number > 0 && number <= max ? number : 1;
    },
  },
}
</script>
