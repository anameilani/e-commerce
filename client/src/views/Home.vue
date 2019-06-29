<template>
  <div class="home">
    <defaultNav />
      <div class="row">
        <h1>Body</h1>
      </div>
    <footerPage />
    
  </div>
</template>

<script>
// @ is an alias to /src
import defaultNav from '@/components/header.vue'
import footerPage from '@/components/footer.vue'

export default {
  name: 'home',
  components: {
    defaultNav,
    footerPage
  }
}
</script>
