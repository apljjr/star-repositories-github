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
      <div class="text-right linkHome">
        <a href="/">Home</a>
      </div>
      <div class="positionIcon">
        <font-awesome-icon icon="search"/>
        <b-form-input class="searchInput" v-model="search" placeholder="search by name"></b-form-input>
      </div>
      <table class="table table-striped marginTopTable borderTable">
        <thead>
          <tr>
            <th scope="col">Repository</th>
            <th scope="col">Description</th>
            <th scope="col">Language</th>
            <th scope="col">Tags</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="repository in filterRepositories" :key="repository.id">
            <td><a :href="repository.html_url">{{repository.name}}</a></td>
            <td>{{repository.description}}</td>
            <td>{{repository.language}}</td>
            <td></td>
            <td><a href="#">edit</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
library.add(faSearch)

import Axios from 'axios'

export default {
  name: 'Repositories',
  data () {
    return {
      username: this.$route.params.username,
      animate: true,
      load: true,
      msgLoad: 'Getting the repositories lst from Github...',
      listRepositoriesStars: [],
      search: ''
    }
  },
  methods: {
    findStars () {
      Axios.get('https://api.github.com/users/' + this.username + '/starred')
      .then(response => {
        this.listRepositoriesStars = response.data
        this.load = false
      })
      .catch(error => {
      })
    }
  },
  mounted () {
    this.findStars()
  },
  computed: {
    filterRepositories () {
      return this.listRepositoriesStars.filter(repository => {
        return repository.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
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

  .marginTopTable {
    margin-top: 30px
  }
  .linkHome {
    position: relative;
    top: -40px;
  }

  .borderTable {
    border: 1px solid #dee2e6;
  }
  .searchInput {
    width: 20%;
  }
  .positionIcon > svg{
    position: relative;
    top: 32px;
    left: 12px;
  }
  .positionIcon > input{
    padding-left: 40px;
  }
</style>
