<template>
    <div class="row">
        <cardItem v-for="item in items" :key="item.id" :product="item" :isLogin="status" ></cardItem>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import cardItem from '@/components/cardItem.vue'

export default {
    name: 'itemLanding',
    components:{
        cardItem
    },
    data(){
        return{
            status:'login',
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
