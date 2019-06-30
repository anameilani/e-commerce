<template>
    <div>
        <navbar />
        <h3>My Cart List</h3>
            <div class="row" style="width: 950px; height: 550px;">
                <cardCart v-for="cart in mycart" :key="cart._id" :id="cart._id" :name="cart.itemId.name" :image="cart.itemId.image" :quantity="cart.amount" :totalPrice="cart.totalPrice" :item_id="cart.itemId._id" />
            </div>
        <footerPage />
    </div>
</template>

<script>
import {mapState} from 'vuex'
import navbar from '@/components/navbar.vue'
import footerPage from '@/components/footer.vue'
import cardCart from '@/components/cardCart.vue'


export default {
    name: 'myCart',
    components:{
        navbar,
        footerPage,
        cardCart

    },
     computed:{
        ...mapState(['mycart'])
    },
    mounted(){
        this.$store.dispatch('getCart')
    }

}
</script>

<style scoped>
    h3 {
        text-align: center;
        margin-top: 20px;
        font-weight: bold
    }
</style>
