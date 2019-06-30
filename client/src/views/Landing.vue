<template>
  <div class="home">
    <defaultNav />

      <div class="row">
        <itemLanding />
      </div>
      
    <footerPage />
  </div>
</template>

<script>
// @ is an alias to /src
import defaultNav from '@/components/header.vue'
import footerPage from '@/components/footer.vue'
import itemLanding from '@/components/itemLanding.vue'

export default {
  name: 'Landing',
  components: {
    defaultNav,
    footerPage,
    itemLanding
  }
}
</script>
