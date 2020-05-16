<template>
  <div>
    <v-list id="list" class="mx-10 list px-10">
      <p class="text-center">Say hello 🤠</p>

      <v-slide-x-reverse-transition group>
        <v-list-item
          :class="
            `${
              message.alert
                ? ''
                : `${
                    username === message.username
                      ? classForOwnMessage
                      : classForMessage
                  }`
            }`
          "
          v-for="message in messages"
          :key="message.id"
        >
          <v-list-item-content>
            <v-list-item-title
              :class="
                `${
                  message.alert
                    ? ''
                    : `${
                        username === message.username
                          ? 'message__user-text'
                          : 'message-text'
                      }`
                }`
              "
              >{{ `${!message.alert ? `${message.username} says: ` : ''}` }}
            </v-list-item-title>
            <v-list-item-subtitle
              ><p
                :class="
                  `${message.alert ? 'new__user-alert' : 'text-wrap headline'}`
                "
              >
                {{ message.content }}
              </p></v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>
      </v-slide-x-reverse-transition>
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
    ...mapGetters(['socket', 'messages', 'username', 'usersOnChat']),
    classForOwnMessage() {
      return 'text-right my-4 message message__user'
    },
    classForMessage() {
      return 'text-left my-4 message'
    }
  },
  components: {
    'app-input-message': InputMessage
  },
  methods: {
    addMessage(message) {
      if (message === '') return
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

<style>
.message {
  display: inline-block;
  border-radius: 25px;
  margin-right: 60%;
  width: 40%;
  word-break: break-all;
  color: #fff;
  background-color: #7f5a83;
  background-image: linear-gradient(315deg, #7f5a83 0%, #0d324d 74%);
}
.message__user {
  display: inline-block;
  margin-left: 60%;
  margin-right: 0;
  background-color: #ff4e00;
  background-image: linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%);
}
.list {
  height: 70vh;
  overflow-y: scroll;
}
.message-text {
  color: #eee;
}
.message__user-text {
  color: #212121;
}
.new__user-alert {
  color: #bdbdbd;
  text-align: center;
}
</style>
