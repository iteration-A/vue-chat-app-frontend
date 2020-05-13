<template>
  <v-app>
    <div>
      <router-view name="Header"></router-view>
      <router-view name="Home"></router-view>
    </div>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.state.socket.on('message', message => {
      this.$store.state.messages.push(message)
      console.log(message)
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
