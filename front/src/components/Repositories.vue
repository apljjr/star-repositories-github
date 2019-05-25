<template>
  <div class="repositories">
    <h1>{{ msg }}</h1>
    {{username}}
  </div>
</template>

<script>
export default {
  name: 'Repositories',
  data () {
    return {
      username: this.$route.params.username,
      msg: 'Repositories'
    }
  },
  created () {
    
  }
}
</script>

<style scoped>

</style>
