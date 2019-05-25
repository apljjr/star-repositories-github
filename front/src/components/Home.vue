<template>
  <div class="home">
    <div class="row">
      <div class="col-12 text-center">
        <div>
          <b-form inline class="formCenter">
            <label class="mr-sm-2" for="username">https://github.com/</label>
            <b-input id="username" placeholder="username" v-model="usename"></b-input>
          </b-form>
        </div>
        <div>
          <b-button class="marginTopButton" variant="outline-secondary" 
          @click="goRepositories()">get repositories<font-awesome-icon class="marginIconSeta" icon="caret-right"/></b-button> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
library.add(faCaretRight)

export default {
  name: 'Home',
  data () {
    return {
      usename: null
    }
  },
  methods: {
    goRepositories () {
      this.$router.push({ name: 'RepositoriesStars', params: { username: this.usename}})
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
  .marginIconSeta {
    margin-left: 9px
  }
</style>
