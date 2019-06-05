<template>
  <div>
    <router-link to="/foo">Go to Foo</router-link>
    <br/>
    <router-link to="/index/5698">Go to App</router-link>
    <br/>
  </div>
</template>
<script>
export default {
  props: ['id'],
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route
      return {
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>

