<template>
  <div>
    <defaultNav />
    <div class="row" style="background-color: lightcoral; height: 600px;">
        <div class="col-sm-6">
            <img src="https://image.flaticon.com/icons/svg/743/743007.svg" alt="Icon">
            <h1>Belanja Apapun di TukuToko</h1>
            <h4>Semua Pasti Ada!</h4>
        </div>
        <div class="col-sm-4" id="formlogin">
          <h3>Login</h3>
          <form @submit.prevent="login">
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
            <button type="submit" class="btn btn-primary">Login</button>
          </form> 
        </div>    
    </div>
    <footerPage />
  </div>
</template>

<script>
import axios from '@/api/axios.js'
import defaultNav from '@/components/header.vue'
import footerPage from '@/components/footer.vue'


export default {
  name: 'Login',
  components:{
    defaultNav,
    footerPage
  },
  data(){
    return{
      user:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    login(){
        axios({
          method: 'post',
          url: '/users/login',
          data:{
            name: this.user.name,
            email: this.user.email,
            password: this.user.password
          }
        })
        .then(({data})=>{
            this.$store.commit('SETTOKEN', data.token)
            localStorage.setItem('token', data.token)
            localStorage.setItem('name', data.name)
            localStorage.setItem('userId', data.userId)
            this.$router.push('/home')
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
  #formlogin{
    margin-left: 40px;
    margin-top: 120px
  }

  img{
    width: 250px;
    height: 400px;
  }

  h1{
    margin-top: -40px;
    font-family: 'Courgette', cursive;
    font-weight: bold
  }

  h4{
    font-family: 'PT Sans Caption', sans-serif;
  }
</style>

