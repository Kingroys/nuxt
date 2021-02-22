<!-- @todo: simple testing -->
<template>
  <div class="main-container">
    <div class="row" v-if="activeUser">
      <div class="col">
        <message-form :username="activeUser" @add-message-event="postMessage"></message-form>
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
        <alert v-show="!messages.length" text="Aucun message"></alert>
        <message-item
          v-for="message in messages"
          :key="message.id"
          :message="message"
          @delete-message-event="deleteMessage"
        ></message-item>
      </div>
      <div class="col">
        <message-bot
          username="FunBot"
          :waitingForAnswer="waitingForAnswer"
          @add-message-event="postMessage"
        ></message-bot>
      </div>
    </div>
    <div class="col" v-if="!activeUser">
      <alert text="Choisissez une <strong>personne</strong> pour commencer une conversation."></alert>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
import Alert from "@/components/Alert";
import MessageBot from "@/components/messages/MessageBot";
import MessageForm from "@/components/messages/MessageForm";
import MessageItem from '@/components/messages/MessageItem'
import TitleCount from "@/components/title/TitleCount";
import UpdatedTime from "@/components/UpdatedTime";

export default {
  name: 'Conversation',
  components: {Alert, MessageBot, MessageForm, MessageItem, TitleCount, UpdatedTime},
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
    ...mapActions('conversation', [
      'addMessage',
      'deleteMessage',
      'deleteAllMessages',
    ]),
    postMessage(text, sideClass, waitingForAnswer) {
      this.addMessage({
        'text': text,
        'sideClass': sideClass
      });
      this.waitingForAnswer = waitingForAnswer;
    },
  },
  computed: {
    ...mapGetters('conversation', {
      activeUser: 'getActiveUser',
      messages: 'getMessages',
      updatedTime: 'getUpdatedTime',
      messageCount: 'getMessageCount'
    }),
  },
  beforeCreate: function () {
    this.$store.commit('conversation/SET_USER', this.$route.params.id);
  },
  mounted() {
    this.$store.commit('conversation/INIT');
  },
  watch: {
    messages() {
      this.$store.commit('conversation/UPDATE');
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
