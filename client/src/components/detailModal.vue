<template>
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModal" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{name}}</h4>
                <button @click="close" type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="row modal-body" >
                <div class="col-sm-6">
                    <img :src="item.image" alt="Image Product">
                </div>
                <div class="col-sm-5 offset-1" style="text-align: left;margin-top: 50px;">
                    <div class="col-12">
                        <h6>Harga: {{getPrice}}</h6>
                        <h6>Stock: {{item.stock}}</h6>
                        <form>
                            Quantity:
                            <input type="number" name="quantity" min="1" :max="item.stock" v-model="quantity"><br>
                            <small class="text-muted">Maximum order is available stocks.</small>
                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button @click="addToCart" type="button" class="btn btn-primary">Add To Cart</button>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/api/axios.js'
import getFormatRupiah from '@/helpers/getFormatRupiah.js'

export default {
    name:'modalDetail',
    props:['item'],
    data(){
        return {
            name:'',
            getPrice:'',
            quantity:0
            
        }
    },
     created() {
        this.name= this.item.name.toUpperCase()
        this.getPrice= getFormatRupiah(this.item.price)

        
    },
    methods:{
        addToCart(){
            axios({
                method: 'post',
                url: '/users/register',
                data:{
                    itemId: this.item._id,
                    amount: this.quantity,
                },
                header:{
                    'token': localStorage.token
                }
            })
            .then(({data})=>{
                Swal.fire(
                    'Success Add to Your Cart!',
                    '',
                    'success'
                )
            })
            .catch(err=>{
            console.log('error register')
            console.log(err)
            })
        },

       close(){
           this.name='',
           this.price='',
           this.quantity=0
       } 
    }
}
</script>

<style scoped>

    .modal-content{
        width: 820px;
        margin-left: -30%
    }

    img{
        width: 500px;
        height: 450px;
    }

</style>
