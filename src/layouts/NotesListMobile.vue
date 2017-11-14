<template>
    <div id="layout-dashboard">
        <h1>Notes List / Mobile</h1>

        <notes-list></notes-list>

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
