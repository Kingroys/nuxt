<template>
  <transition name="bounce" appear>
    <div class="alert" role="alert" v-html="text" :class="className"></div>
  </transition>
</template>

<script>
export default {
  name: "Alert",
  props: {
    text: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: 'alert-primary',
    },
  },
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.3s;
}

.bounce-leave-active {
  animation: bounce-in 0s;
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
