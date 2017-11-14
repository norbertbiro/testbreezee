<template>
  <div class="hello">
    <h1>Notes List (Adaptive)</h1>
    <p>{{ msg }}</p>
    <button v-if="isMobile">mobile button</button>
    <div class="note">
      <h1>n1.</h1>
      <p>Aliquam porta leo quam, quis commodo purus hendrerit ac. Maecenas interdum ut purus a hendrerit. Phasellus dictum elit elit, id cursus nunc ultricies sit amet. Etiam urna purus, varius sit amet mattis nec, pretium eget nunc.</p>
    </div>
    <div class="note">
      <h1>n2.</h1>
      <p>Donec eget cursus lorem. Donec vitae lacus venenatis, condimentum ipsum in, gravida metus. Donec semper congue nisl, non sollicitudin lectus dignissim id.</p>
    </div>
  </div>
</template>

<script>
  import Detect from '@/detect/index.js'
  export default {
    name: 'NotesList',
    mounted () {
      if (Detect.isMobile()) {
        this.msg = 'Welcome to your MOBILE Vue.js Counterpart'
      }
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isMobile: Detect.isMobile()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .note {
    border: 1px solid silver;
    background-color: #f0fffa;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
