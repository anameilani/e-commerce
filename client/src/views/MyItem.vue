<template>
    <div>
        <navbar />
            <div class="row">
                <tableMyItem :items="myitems" />
            </div>
        <footerPage />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'
import tableMyItem from '@/components/tableMyItem.vue'

export default {
    name: 'myItem',
    components:{
        navbar,
        footerPage,
        tableMyItem
    },
     computed:{
        ...mapState(['myitems'])
    },
    mounted(){
        this.$store.dispatch('getMyItems')
    }

}
</script>

<style>

</style>
