<template>
<div>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <router-link :to="{ name: 'home'}" class="logo">Hacktiv Overflow</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" :to="{name:'addQuestion'}">Question</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul>
    <login></login>
  </div>
</nav>        
<router-view/>
</div>
</template>
<script>
  import login from './login'
    export default {
      props: ['loginStatus'],
      components: {
        login
      }
    }
</script>
<style scoped>
.logo {
  color: #ed5600;
  font-size: 200%;
  font-weight: bold;
}
.navbar {
    border-radius: 0px;
}
.navbar-nav li {
  margin-left: 25px;
  font-size: 130%;
}
</style>