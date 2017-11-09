<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <br><br><br><br><br><br>
    <desktop-component v-if="!mobileDevice"></desktop-component>
    <br><br><br><br>
    <mobile-component v-if="mobileDevice"></mobile-component>

    <pre>

    </pre>
  </div>
</template>

<script>
  import DesktopComponent from './DesktopComponent.vue'
  import MobileComponent from './MobileComponent.vue'
  import Detect from '../detect/index.js'

  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        mobileDevice: false
      }
    },
    components: { DesktopComponent, MobileComponent },
    methods: {
      detectDevice () {
        this.mobileDevice = Detect.isMobile()
      },
      detectDeviceOnResize () {
        if (this.timeoutHandle) {
          window.clearTimeout(this.timeoutHandle)
        }
        this.timeoutHandle = window.setTimeout(this.detectDevice, 250)
      }
    },
    mounted () {
      // initial load detection
      this.detectDevice()
      // Register an event listener when the Vue component is ready
      window.addEventListener('resize', this.detectDeviceOnResize)
    },
    beforeDestroy () {
      // Unregister the event listener before destroying this Vue instance
      window.removeEventListener('resize', this.detectDeviceOnResize)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
