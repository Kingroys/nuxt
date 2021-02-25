<template>
  <div>
    <menu-element></menu-element>
    <div class="main-container">
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
            <tr>
              <th scope="col">Features</th>
            </tr>
            </thead>
            <tbody>
            <tr class="table-success">
              <td>Messages</td>
            </tr>
            <tr class="table-success">
              <td>Pokémons</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MenuElement from '@/components/menu/MenuElement';

export default {
  name: 'Index',
  components: {MenuElement},
}
</script>
