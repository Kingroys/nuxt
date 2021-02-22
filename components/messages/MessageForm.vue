<template>
  <div>
    <title-image
      :username="username"
      :src="'/' + `${username}` + '.png'"
    ></title-image>
    <input type="text" class="form-control" placeholder="Message" v-model="message" v-bind:class="{ 'is-invalid': error }" @keyup.enter.prevent="onAddMessage">
  </div>
</template>

<script>
import TitleImage from "@/components/title/TitleImage";

export default {
  name: "MessageForm",
  components: {TitleImage},
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      message: '',
      className: 'left',
      error: false,
    }
  },
  methods: {
    onAddMessage() {
      if (this.message === '') {
        this.error = true;
      } else {
        this.$emit('add-message-event', this.message, this.className, true);
        this.message = '';
        this.error = false;
      }
    },
  },
}
</script>
