<template>
  <div class="row">
    <defaultNav />

    <div class="col-sm-5 offset-sm-1">

    </div>
    <div class="col-sm-4" id="formregister">
        <h2>TukTuk Shop</h2>
        <h4>Daftar Akun Baru Sekarang</h4><hr>
        <h6>{{successRegister}}</h6>
       <form @submit.prevent="register">
         <div class="input-group">
           <div class="input-group-prepend">
             <span class="input-group-text"><i class="fas fa-user"></i> </span>
           </div>
          <input type="text" class="form-control" placeholder="Full Name" required v-model="user.name">
        </div><br>
        <div class="input-group">
           <div class="input-group-prepend">
             <span class="input-group-text"><i class="fas fa-envelope"></i> </span>
           </div>
          <input type="email" class="form-control" placeholder="Email" required v-model="user.email">
        </div><br>
        <div class="input-group">
           <div class="input-group-prepend">
             <span class="input-group-text"><i class="fas fa-lock"></i> </span>
           </div>
          <input type="password" class="form-control" placeholder="Password" required v-model="user.password">
        </div><br>
        <div class="form-group form-check">
          <label class="form-check-label">
                <input type="checkbox" class="filled-in" checked="checked" required="">
                <span>by registering you agree to <a href="">the terms and conditions</a></span>
          </label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form> 
    </div>
 
</div>
</template>

<script>
import defaultNav from '@/components/header.vue'
import axios from '@/api/axios.js'



export default {
  name: 'Register',
  components:{
    defaultNav
  },
  data(){
    return{
      user:{
        name: '',
        email: '',
        password: ''
      },
      successRegister:''
    }
  },
  methods:{
    register(){
      axios({
          method: 'post',
          url: '/users/register',
          data:{
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
          }
        })
        .then(({data})=>{
            this.successRegister= `Akun ${data.name} berhasil didaftarkan. Silahkan Login!`
        })
        .catch(err=>{
          console.log('error register')
          console.log(err)
        })
    }
  }
}
</script>
  
<style scoped>
  h6{
    color: blue;
    margin-bottom: 10px;
  }

  #formregister{
    margin-left: 40px;
    margin-top: 70px
  }
</style>

