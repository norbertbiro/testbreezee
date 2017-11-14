<template>
  <div class="navigation">
    <h2>Navigation</h2>

    Go to <router-link to="/">Dashboard</router-link> |
    <router-link to="/notes">Notes List</router-link>

  </div>
</template>

<script>
  export default {
    name: 'Navigation',
    data () {
      return {
        //
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
