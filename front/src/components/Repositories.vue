<template>
  <div class="repositories">
    <div class="marginTopLoad" v-if="load">
      <b-row>
        <b-col md="2" offset-md="5">
          <b-progress :value="100" variant="info" striped :animated="animate" class="mt-2"></b-progress>
        </b-col>
      </b-row>
    </div>
    <div class="text-center marginTopmsg" v-if="load">
      <p>{{msgLoad}}</p>
    </div>
    <div v-if="!load">
      {{listStars}}
    </div>
  </div>
  
</template>

<script>
import Axios from 'axios'

export default {
  name: 'Repositories',
  data () {
    return {
      username: this.$route.params.username,
      animate: true,
      load: true,
      msgLoad: 'Getting the repositories lst from Github...',
      listStars: null,
    }
  },
  methods: {
    findStars () {
      Axios.get('https://api.github.com/users/' + this.username + '/starred')
      .then(response => {
        this.listStars = response.data
        this.load = false
      })
      .catch(error => {
      })
    }
  },
  mounted() {
    this.findStars()
  }
}
</script>

<style scoped>
  .marginTopmsg {
    margin-top: 20px
  }

  .marginTopLoad {
    margin-top: 20%
  }
</style>
