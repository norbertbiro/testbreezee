<template>
    <div id="layout-dashboard">
      <h1>Notes List / Desktop</h1>

      <div class="notes-wrapper">
        <notes-list></notes-list>
      </div>

      <navigation/>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        value1: 10
      }
    },
    components: {
      'notes-list': () => import('@/components/NotesList.vue'),
      'navigation': () => import('@/components/Navigation')
    }
  }
</script>

<style scoped>
  .notes-wrapper {
    max-width: 420px;
    margin: 10pt auto;
  }
</style>
