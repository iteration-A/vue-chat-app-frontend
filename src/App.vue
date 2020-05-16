<template>
  <v-app>
    <div>
      <router-view name="Header"></router-view>
      <router-view name="Home"></router-view>
    </div>
  </v-app>
</template>

<script>
import uuid from 'uuid/dist/v4'

export default {
  created() {
    document.title = 'wannacry'

    this.$store.state.socket.on('message', message => {
      this.$store.state.messages.push(message)
    })
    this.$store.state.socket.on('user', user => {
      this.$store.state.messages.push({
        id: uuid(),
        content: `${user} has entered the chat`,
        alert: true
      })
    })
    this.$store.state.socket.on('user-disconnect', user => {
      this.$store.state.messages.push({
        id: uuid(),
        content: `${user} has left the chat`,
        alert: true
      })
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
