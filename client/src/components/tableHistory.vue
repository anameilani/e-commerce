<template>
    <div id="table-myitem">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">No</th>
                <th scope="col">Name</th>
                <th scope="col">Product Image </th>
                <th scope="col">Quantity</th>
                <th scope="col">Total Price</th>

                </tr>
            </thead>
            <tbody id="table-body">
                <tr v-for="(item, index) in items" :key="item._id">
                <th scope="row">{{index+1}}</th>
                <td>{{item.itemId.name}}</td>
                <td><img :src="item.itemId.image" alt="Image Product" style="width: 80px; height:70px;"></td>
                <td>{{item.amount}}</td>
                <td>{{item.totalPrice}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from '@/api/axios.js'



export default {
    name:'tableMyItem',
    props: ['items'],
    data() {
        return {
            
        }
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