<template>
    <div class="row">
        <cardItem v-for="item in items" :key="item.id" :product="item" :isLogin="status" ></cardItem>
    </div>
</template>

<script>
import cardItem from '@/components/cardItem.vue'

import {mapState} from 'vuex'

export default {
    name: 'itemLanding',
    components:{
        cardItem
    },
    data(){
        return{
            status:'',
            
        }
    },
    computed:{
        ...mapState(['items'])
    },
    created(){
        this.$store.dispatch('getItems')
    }
}
</script>

<style scoped>
    .row{
        margin-left: 20px;
        margin-top: 20px;
    }
</style>
