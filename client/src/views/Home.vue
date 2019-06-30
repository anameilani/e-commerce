<template>
    <div>
        <navbar />
        <div class="row">
            <itemHome />
        </div>
        <footerPage />
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'
import itemHome from '@/components/itemHome.vue'

export default {
    name:'home',
    components:{
        navbar,
        footerPage,
        itemHome
    }
}
</script>

<style>

</style>
