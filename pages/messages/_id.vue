<template>
  <div>
    <menu-element></menu-element>
    <div class="main-container">
      <message-list></message-list>
    </div>
  </div>
</template>

<script>
import MessageList from '@/components/messages/MessageList';
import MenuElement from '@/components/menu/MenuElement';

export default {
  name: 'Messages',
  components: {MenuElement, MessageList},
}
</script>

<style scoped>
html, body {
  background: #ffffff;
}
</style>

