<template>
  <div class="card" >
    <div class="row card-body">
      
      <div class="col-4">
        <img :src="image" alt="Product Image" style="width: 90px; height: 80px; margin-top: -10px;">
      </div>
      <div class="col-4" style="text-align: left">
        <h6 style="font-weight: bold">{{nameItem}}</h6>
        <h6>Quantity: {{quantity}}</h6>
        <h6>Total: {{price}}</h6>
      </div>
      <div class="col-3">
        <a>
            <button @click.prevent="checkout" class="btn btn-small btn-success">Checkout</button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '@/api/axios.js'
import getFormatRupiah from '@/helpers/getFormatRupiah.js'

export default {
    name:'cardCart',
    props:['id','name', 'image', 'quantity', 'totalPrice', 'item_id'],
    data() {
      return {
        nameItem:'',
        price:''
      }
    },
    created(){
        this.nameItem= this.name.toUpperCase()
        this.price= getFormatRupiah(this.totalPrice)
    },
    methods:{
      checkout(){
        console.log(this.item_id)
          axios({
            method: 'patch',
            url: `/items/updatestock/${this.item_id}`,
            data:{
              amount: this.quantity
            },
            headers:{
              'token': localStorage.token
            }
          })
          .then(({data}) =>{
            axios({
              method: 'patch',
              url: `/transaction/${this.id}`,
              data:{
                  field: 'status',
                  value: 'paid',
              },
              header:{
                  'token': localStorage.token
              }
            })
            .then(({data}) =>{
              Swal.fire(
                  'Success Checkout!',
                  '',
                  'success'
              )
              this.$store.dispatch('getCart')
            })
            .catch(err =>{
              console.log('error update status to paid')
              console.log(err)
              })
          })
          .catch(err =>{
            console.log('error update stock')
            console.log(err)
          })
      }
    }
    
}
</script>

<style scoped>
  .card{
    width: 1000px;
    height: 100px;
    background-color: lightgray;
    margin-left: 20%
  }

  button{
    margin-top: 10px;
  }

</style>
