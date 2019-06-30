<template>
    <div>
        <navbar />
        <div class="row">
            <formItem />
        </div>
        <footerPage />
    </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'
import formItem from '@/components/formItem.vue'

export default {
    name:'addItem',
    components:{
        navbar,
        footerPage,
        formItem,
    }
}
</script>

<style scoped>

</style>
