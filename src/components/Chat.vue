<template>
  <div>
    <v-list id="list" class="mx-10 list px-8">
      <p class="text-center">Say hello 🤠</p>
      <v-list-item
        class="text-left my-4 message"
        color="success"
        :class="{
          message__user: username === message.username,
          'text-right': username === message.username
        }"
        v-for="message in messages"
        :key="message.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ message.username }} says: </v-list-item-title>
          <v-list-item-subtitle
            ><p class="text-wrap" style="word-break: break-all;">
              {{ message.content }}
            </p></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <app-input-message
      class="mx-10 my-4"
      @send-message="addMessage"
    ></app-input-message>
  </div>
</template>

<script>
import InputMessage from './InputMessage'
import uuid from 'uuid/dist/v4'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['socket', 'messages', 'username'])
  },
  components: {
    'app-input-message': InputMessage
  },
  methods: {
    addMessage(message) {
      this.socket.emit('new-message', {
        id: uuid(),
        content: message,
        username: this.username
      })
    }
  },
  updated() {
    const container = this.$el.querySelector('#list')
    container.scrollTo(0, container.scrollHeight)
  }
}
</script>

<style scoped>
.message {
  display: inline-block;
  border-radius: 25px;
  margin-right: 50%;
  width: 50%;
  background: #009688;
}
.message__user {
  display: inline-block;
  margin-left: 50%;
  margin-right: 0;
  background: #3f51b5;
}
.list {
  height: 70vh;
  overflow-y: scroll;
}
</style>
