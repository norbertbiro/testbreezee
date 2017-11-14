<template>
    <div id="layout-dashboard">
      <h1>Dashboard / Desktop</h1>

      <navigation/>
    </div>
</template>

<script>
  export default {
    components: {
      'navigation': () => import('@/components/Navigation')
    }
  }
</script>
