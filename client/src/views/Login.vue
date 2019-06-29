<template>
  <div class="row">
    <div class="col-sm-6">

    </div>
    <div class="col-sm-4">
      <h3>Login</h3>
       <form >
         <div class="input-group">
           <div class="input-group-prepend">
             <span class="input-group-text"><i class="fas fa-envelope"></i> </span>
           </div>
          <input type="email" class="form-control" placeholder="Email" required>
        </div><br>
        <div class="input-group">
           <div class="input-group-prepend">
             <span class="input-group-text"><i class="fas fa-lock"></i> </span>
           </div>
          <input type="password" class="form-control" placeholder="Password" required>
        </div><br>
        <button type="submit" class="btn btn-primary">Login</button>
      </form> 
    </div>
 
</div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'loginpage',
  data(){
    return{
      user:{
        email:'',
        password:''
      }
    }
  }
}
</script>

<style scoped>

</style>

