<template>
    <div id="table-myitem">
        <table class="table">
            <thead class="thead-light">
                <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Featured Image</th>
                <th scope="col">Price</th>
                <th scope="col">Stock</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody id="table-body">
                <tr v-for="(item, index) in myitems" :key="item.id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.name}}</td>
                <td><img :src="item.image" alt="Image Product" style="width: 80px; height:70px;"></td>
                <td>{{item.price}}</td>
                <td>{{item.stock}}</td>
                <td>
                    <button type="button" class="btn">
                        <a>
                            <i class="fas fa-edit" style="font-size: 18px"></i>
                        </a>
                    </button>
                    <button type="button" class="btn">
                        <a @click="removeItem(item._id)">
                            <i class="fas fa-trash-alt" style="font-size: 18px"></i>
                        </a>
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from '@/api/axios.js'
import {mapState} from 'vuex'


export default {
    name:'tableMyItem',
    data() {
        return {
            price:''
        }
    },
    methods:{
        removeItem(id){
             Swal.fire({
                title: 'Are you sure to sign out?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes!'
                })
            .then((result) => {
                if (result.value) {
                    axios({
                        method: "delete",
                        url: `/items/${id}`,
                        headers:{
                        'token': localStorage.token
                        }
                    })
                    .then(({data}) =>{
                        Swal.fire(
                            'Your product have been deleted!',
                            'Deleted!',
                            'success'
                        )
                        this.$store.dispatch('getMyItems')
                    })
                    .catch(err =>{
                        console.log('error delete product')
                        console.log(err)
                    })
                }
            })
        }
    },
     computed:{
        ...mapState(['myitems'])
    },
    mounted(){
        this.$store.dispatch('getMyItems')
    }
}
</script>

<style scoped>
    #table-myitem{
        width: 100%;
        height: 600px;
        overflow: scroll;
    }


</style>