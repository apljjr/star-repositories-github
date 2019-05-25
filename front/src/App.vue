<template>
  <div id="app">
    <div class="row">
      <div class="col-12">
      <h1>{{ view }}</h1>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      view: 'githubstars',
      usename: null
    }
  },
}
</script>

<style>
  #app {
    margin: 20px
  }
</style>
