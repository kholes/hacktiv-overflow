 <template>
  <div id="app">
    <navbar></navbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    navbar
  },
  methods: {
    ...mapActions(['cekToken'])
  },
  mounted: function () {
    let token = JSON.parse(localStorage.getItem('accessToken'))
    if(token) {
      this.cekToken(token)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
