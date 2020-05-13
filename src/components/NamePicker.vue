<template>
  <div class="name__picker">
    <p class="mb-6">Select your username</p>
    <v-text-field
      @keyup.enter="updateUsername"
      v-model="usernameSelected"
      label="Username"
      placeholder="Username"
      solo
    ></v-text-field>
    <v-btn @click="updateUsername" right absolute bottom>Ok</v-btn>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    usernameSelected: ''
  }),
  methods: {
    ...mapMutations(['username']),
    updateUsername() {
      if (this.usernameSelected !== '') this.username(this.usernameSelected)
    }
  }
}
</script>

<style scoped>
.name__picker {
  background: rgb(82, 78, 78);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px 75px;
  border-radius: 10px;
}
</style>
