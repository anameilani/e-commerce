<template>
    <nav class="navbar navbar-expand-lg fixed-top" style="height: 70px">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="">
            <a  style="font-size: 35px; color: #eaecfc">
                <i class="fas fa-dove"></i> TukuToko</a>
        </a>

         <div class="search-container">
            <form>
                <input type="text" placeholder="Aku mau belanja.." v-model="searchValue">
            </form>
        </div>
        
        <!-- Links -->
        <ul class="navbar-nav ml-auto">
            <li>
                <a class="nav-link">
                    <router-link to="/home"><i class="fas fa-home" style="font-size: 25px;"></i></router-link>
                </a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   My Product
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">
                         <router-link to="/myitem" style="color: brown; font-size: 16px;">List Product </router-link>
                    </a>
                    <a class="dropdown-item" href="#" >
                        <router-link to="/additem" style="color: brown; font-size: 16px;">Add Product</router-link>
                    </a>
                </div>
            </li>
            <li>
                <a class="nav-link"><router-link to="/mycart">My Cart </router-link></a>
            </li>
            <li>
                <a class="nav-link"><router-link to="/myhistory">My History </router-link></a>
            </li>
            <li>
                <a @click="logout" class="nav-link"><router-link to="/"><i class="fas fa-sign-out-alt"></i></router-link></a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'default-navbar',
    data() {
        return {
            searchValue:''
        }
    },
    methods:{
        logout(){
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
                localStorage.removeItem('userId')
                localStorage.removeItem('name')
                localStorage.removeItem('token')
                this.$store.commit('SETTOKEN', '')
                this.$router.push('/')
                }
            })
            
        }
    }
}
</script>

<style scoped>
    nav {
        background-color: #41b883
    }

    li a{
        font-weight: bold;
        font-size: 18px;
        color: white
    }
    
    input{
        margin-left: 20%;
        width: 500px;
    }
</style>

