<template>
  <div class="row">
    <div class="col-sm-5 offset-sm-1">

    </div>
    <div class="col-sm-4">
        <h2>TukTuk Shop</h2>
        <h4>Daftar Akun Baru Sekarang</h4><hr>
       <form >
        <div class="form-group">
          <i class="fas fa-user"></i><input type="text" class="form-control" placeholder="Full Name" required>
        </div>
        <div class="form-group">
          <i class="fas fa-envelope"></i><input type="email" class="form-control" placeholder="Email" required>
        </div>
        <div class="form-group">
          <i class="fas fa-lock"></i><input type="password" class="form-control" placeholder="Password" required>
        </div>
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
// @ is an alias to /src


export default {
  name: 'registerPage',
  data(){
    return{
      user:{
        name: '',
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>

</style>

