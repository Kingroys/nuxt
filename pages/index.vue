<template>
  <div>
    <menu-element></menu-element>
    <div class="main-container">
      <div class="row">
        <div class="col">
          <alert text="Select a <strong>user</strong> to start a conversation."></alert>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuElement from "~/components/menu/MenuElement";
import Alert from "~/components/Alert";

export default {
  name: 'App',
  components: {Alert, MenuElement},
}
</script>
