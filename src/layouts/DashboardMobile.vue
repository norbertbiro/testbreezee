<template>
    <div id="layout-dashboard">
      <h1>Dashboard / Mobile</h1>
      <p>Aici vine componenta de mobil</p>
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
