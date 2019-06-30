<template>
    <nav class="navbar navbar-expand-lg fixed-top" style="height: 70px">
        <!-- Brand/logo -->
        <a class="navbar-brand" href="">
            <a  style="font-size: 35px; color: #eaecfc; font-family: 'Courgette', cursive;">
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
                    <router-link to="/"><i class="fas fa-home" style="font-size: 25px;"></i></router-link>
                </a>
            </li>
            <li>
                <a class="nav-link"><router-link to="/login">Login </router-link></a>
            </li>
            <li>
                <a class="nav-link"><router-link to="/register">Register </router-link></a>
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
        margin-left: 30%;
        width: 600px;
    }
</style>

