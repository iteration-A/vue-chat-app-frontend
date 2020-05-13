<template>
  <div class="home">
    <app-name-picker v-if="username === ''"></app-name-picker>
    <app-chat v-else></app-chat>
  </div>
</template>

<script>
import Chat from '../components/Chat'
import NamePicker from '../components/NamePicker'

import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['username'])
  },
  components: {
    'app-chat': Chat,
    'app-name-picker': NamePicker
  }
}
</script>

<style scoped></style>
