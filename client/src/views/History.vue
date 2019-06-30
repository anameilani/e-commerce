<template>
    <div>
        <navbar />
            <div class="row">
                <tableHistory :items="myhistory" />
            </div>
        <footerPage />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'
import tableHistory from '@/components/tableHistory.vue'

export default {
    name: 'myHistory',
    components:{
        navbar,
        footerPage,
        tableHistory
        
    },
     computed:{
        ...mapState(['myhistory'])
    },
    mounted(){
        this.$store.dispatch('getHistory')
    }

}
</script>

<style>

</style>
