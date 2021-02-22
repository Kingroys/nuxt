<!-- @todo: add local storage -->
<!-- @todo: simple testing -->
<template>
  <div class="row">
    <div class="col">
      <message-form :username="username" @add-message-event="addMessage"></message-form>
    </div>
    <div class="col-6">
      <div class="conversation-info">
        <title-count text="Messages" :count="messageCount"></title-count>
        <updated-time :value="updatedTime">
          <a href="#" @click.prevent="deleteAllMessages">
            <i class="bi bi-trash" v-show="messageCount"></i>
          </a>
        </updated-time>
      </div>
      <alert v-show="!messages.length" text="No message"><i class="bi bi-emoji-frown"></i></alert>
      <message-item
        v-for="message in messages"
        :key="message.id"
        :message="message"
        @delete-message-event="deleteMessage"
      ></message-item>
    </div>
    <div class="col">
      <bot-user
        username="DumBot"
        :waitingForAnswer="waitingForAnswer"
        @add-message-event="addMessage"
      ></bot-user>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Alert from "@/components/Alert";
import BotUser from "@/components/BotUser";
import MessageForm from "@/components/MessageForm";
import MessageItem from '@/components/MessageItem'
import TitleCount from "@/components/TitleCount";
import UpdatedTime from "@/components/UpdatedTime";

export default {
  name: 'Conversation',
  components: {Alert, BotUser, MessageForm, MessageItem, TitleCount, UpdatedTime},
  props: {
    username: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      waitingForAnswer: false,
    }
  },
  methods: {
    addMessage(text, sideClass, waitingForAnswer) {
      this.$store.commit('conversation/addMessage', {
        'text': text,
        'sideClass': sideClass
      });
      this.waitingForAnswer = waitingForAnswer;
    },
    deleteMessage(id) {
      this.$store.commit('conversation/deleteMessage', id);
    },
    deleteAllMessages() {
      if (this.messages.length) {
        this.$store.commit('conversation/deleteAllMessages');
      }
    },
  },
  computed: {
    ...mapGetters('conversation', {
      messages: 'getMessages',
      updatedTime: 'getUpdatedTime',
      messageCount: 'getMessageCount'
    }),
  },
  watch: {
    messages() {
      this.$store.commit('conversation/setUpdatedTime');
    }
  }
}
</script>

<style scoped>
.conversation-info {
  text-align: center;
  height: 65px;
  margin-bottom: 20px;
}
</style>
