<template>
    <div class="row" style="width:100%; height: 600px">
        <h3>Add New Product</h3>
        <div class="col-10 offset-1">
        <form style=" margin-top: -100px;">
            <div class="form-group row">
                <label class="col-sm-6 col-md-2 col-form-label">Name: </label>
                <div class="col-sm-8 col-md-10">
                    <input v-model="item.name" type="text" class="form-control"  placeholder="Name Product" required>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-4 col-md-2 col-form-label">Featured Image: </label>
                <div class="col-sm-8 col-md-10" style="text-align: left">
                     <input type="file" id="myFile" name="filename" @change="setImage" ref="pict">
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-4 col-md-2 col-form-label">Price: </label>
                <div class="col-sm-8 col-md-10">
                    <input v-model="item.price" type="number" class="form-control" placeholder="Price" min="1" required>
                </div>
            </div>
            <div class="form-group row">
                <label  class="col-sm-4 col-md-2 col-form-label">Stock: </label>
                <div class="col-sm-8 col-md-10">
                    <input v-model="item.stock" type="number" class="form-control" placeholder="Stock" min="1" required>
                </div>
            </div>
            <div class="form-group row">
            <div class="col-sm-12 ">
                <br><button @click.prevent="addProduct" type="submit" class="btn btn-primary">Add Product</button>
            </div>
            </div>
        </form>
        </div>
    </div>
    
</template>

<script>
import axios from '@/api/axios.js'

export default {
    name:'formItem',
    data(){
        return {
            item:{
                name:'',
                image:'',
                price:'',
                stock:''
            }
        }
    },
    methods:{
        setImage(pict){
            this.item.image= pict.target.files[0]
        },

        addProduct(){
            let formData = new FormData()
            formData.append('name', this.item.name)
            formData.append('image', this.item.image)
            formData.append('price', this.item.price)
            formData.append('stock', this.item.stock)
            formData.append('owner', localStorage.userId)

            axios({
                method: "POST",
                url: `/items`,
                data: formData,
                headers:{
                'token': localStorage.token
                }
            })
            .then(({data})=>{

                Swal.fire(
                'Your new product have been added!',
                'Success!',
                'success'
                )
                this.item.name=''
                this.item.image=''
                this.item.price=''
                this.item.stock=''
                this.$router.push('/myitem/list')
            })
            .catch(function(err){
                Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'All field must be filled!',
                })
                console.log('masuk error')
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
    .row{
        background-color: #edc5c5
    }
    h3 {
        margin-left: 50%;
        margin-top: 70px;
        text-decoration: underline;
        color:#C30F42;
        font-weight: bold;
    }

    label{
        font-weight: bold;
        text-align: left;
        font-size: 18px;
    }
</style>
