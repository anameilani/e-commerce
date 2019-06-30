<template>
    <div class="card" style="width: 17rem;">
        <img class="card-img-top" :src="product.image" alt="Image Product">
        <div class="card-body">
            <h5 class="card-title">{{name}}</h5>
            <p class="card-text">{{price}}</p>
            <p class="card-text">Stock: {{stock}}</p>
            <div v-if="isLogin == 'login'" class="d-flex justify-content-around">
                <a href="#" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#detailModal">Detail</a>
            </div>
            <detailModal :item="product" />
        </div>
    </div>
</template>

<script>
import getFormatRupiah from '@/helpers/getFormatRupiah.js'
import detailModal from '@/components/detailModal.vue'

export default {
    name: 'cardItem',
    props: ['product', 'isLogin'],
    components:{
        detailModal
    },
    data(){
        return {
            name:'',
            price:'',
            stock:''
            
        }
    },
    created() {
        this.currentItem= this.product
        this.name= this.product.name.toUpperCase()
        this.price= getFormatRupiah(this.product.price)
        this.stock= this.checkStock()
        
    },
    methods:{
        checkStock(){
            if(this.product.stock != 0){
                return 'Available'
            }else{
                return 'Out of Stock'
            }
        }
    }
}
</script>

<style scoped>

    .card{
        margin-left: 12px;
        margin-top: 10px;
        border-radius: 15px;
    }

    .card-body{
        line-height: 1;
    }
    img{
        margin-left: 25%;
        width: 150px;
        height: 150px;
    }

</style>
