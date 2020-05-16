<template>
  <div class="my_container">
    <div class="list" :class="{ active: visible }">
      <v-list width="150">
        <span>Users on chat:</span>
        <v-list-item v-if="usersOnChat.length === 1">Only you🤡</v-list-item>
        <v-list-item v-else v-for="user in usersOnChat" :key="user">
          <v-list-item-content style="color: #F44336">{{
            user
          }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
    <v-btn
      @click="visible = !visible"
      class="btn__top"
      :class="{ 'btn__top-active': visible }"
      icon
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['usersOnChat'])
  },
  data: () => ({
    visible: true
  })
}
</script>

<style scoped>
.my_container {
  position: fixed;
  display: flex;
  top: 5%;
  left: 0%;
  z-index: 10;
}
.btn__top {
  position: absolute;
  top: 0;
  right: -30px;
  transform: rotate(180deg);
  transition: transform 1s;
}
.btn__top-active {
  transform: rotate(0);
}
.list {
  margin-left: -150px;
  transition: all 1s;
}
.active {
  margin-left: 0;
}
</style>
