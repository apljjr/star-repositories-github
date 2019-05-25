<template>
  <div class="home">
    <div class="row">
      <div class="col-12">
      <h1>{{ view }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <div>
          <b-form inline class="formCenter">
            <label class="mr-sm-2" for="username">https://github.com/</label>
            <b-input id="username" placeholder="username" v-model="usename"></b-input>
          </b-form>
        </div>
        <div>
          <b-button class="marginTopButton" @click="goRepositories()">get repositories</b-button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      view: 'githubstars',
      usename: null
    }
  },
  methods: {
    goRepositories () {
      this.$router.push({ name: 'Repositories', params: { username: this.usename}})
    }
  }
}
</script>

<style>
  .formCenter {
    width: 400px; 
    margin: 0 auto;
    margin-top: 200px
  }

  .marginTopButton {
    margin-top: 20px
  }
</style>
