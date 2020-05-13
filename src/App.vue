<template>
  <div>
    <router-view name="Header"></router-view>
    <router-view name="Home"></router-view>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --vs-primary: 91, 60, 196;
  --vs-success: 23, 201, 100;
  --vs-danger: 242, 19, 93;
  --vs-warn: 254, 130, 0;
  --vs-dark: 36, 33, 69;
}
</style>
