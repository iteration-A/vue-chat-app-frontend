<template>
  <div class="d-flex align-center">
    <v-text-field
      placehoder="Write a message"
      v-model="message"
      @keyup.enter="sendMessage"
    ></v-text-field>
    <v-btn icon class="ml-4" color="primary" @click="sendMessage">
      <v-icon>mdi-send</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    message: ''
  }),
  methods: {
    sendMessage() {
      this.$emit('send-message', this.message)
      this.message = ''
    }
  }
}
</script>
