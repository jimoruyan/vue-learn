<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld />
  </div>
</template>

<script>

import HelloWorld from '../components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
