<template>
  <transition name="bounce" appear>
    <div class="message-item">
      <div class="message-content" :class="message.sideClass">
        <p v-html="message.text"></p>
        <span class="remove" title="Supprimer" @click="onDeleteMessage(message.id)">
          <i class="bi bi-x-circle"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MessageItem',
  props: {
    message: Object,
    default: {},
  },
  methods: {
    onDeleteMessage(id) {
      this.$emit('delete-message-event', id);
    }
  },
}
</script>

<style scoped>
.message-item {
  float: left;
  width: 100%;
}

.message-content {
  position: relative;
  color: #ffffff;
  border-radius: 20px;
  padding: 8px 15px;
  margin-bottom: 5px;
  display: inline-block;
}

.message-content .remove {
  position: absolute;
  top: 10px;
  right: 10px;
  line-height: 16px;
  cursor: pointer;
  opacity: 0;
}

.message-content:hover {
  transition: all 0.5s ease;
  padding-right: 40px;
}

.message-content:hover .remove {
  transition: all 0.5s ease;
  opacity: 1;
}

.message-content.left {
  float: left;
  background: #68d16a;
}

.message-content.right {
  float: right;
  background: rgb(0, 120, 254);
}

p {
  margin: 0;
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
