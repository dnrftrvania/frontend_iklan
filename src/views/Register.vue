<template>
<div class="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
        <div class="wrapper wrapper--w780">
            <div class="card card-3">
                <div class="card-heading"></div>
                <div class="card-body">
                    <h2 class="title">Register FORM</h2>
                    <form method="POST">
                        <div class="input-group">
                            <input class="input--style-3" type="name" placeholder="Name" name="name">
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="email" placeholder="Email" name="email">
                        </div>
                        <div class="input-group">
                            <input class="input--style-3" type="password" placeholder="Password" name="password">
                        </div>
                        <div class="p-t-10">
                            <button class="btn btn--pill btn--green" type="submit" value="MASUK">Daftar</button>
                            <button class="btn btn--pill btn--green" type="submit" value="DAFTAR">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        name: '',
        email: '',
        password: ''
      }
    },
    methods: {
        Register: function(){
            let name = this.name
            let email = this.email 
            let password = this.password
            this.$store.dispatch('login', { name, email, password })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    }
}
</script>