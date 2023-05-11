import axios from "axios";

const AuthMixin = {
    methods: {
        checkAuth() {
            this.store.isAuth = false;
            const token = localStorage['token'];

            if(token){
                this.store.isAuth = true;
            }

            if(!this.store.isAuth){
                this.$router.push('/');
            }
        },
        login() {
            const formData = new FormData();

            formData.append('method', 'login');
            formData.append('login', this.name);
            formData.append('pass', this.pass);

            axios.post('http://127.0.0.1/rest-api/auth/', formData ).then((res) => {
                if(res.data.success){
                    localStorage['token'] = res.data.content;
                    this.store.isAuth = true;
                    this.$router.push('/messages');
                    this.notification('Привет ' + this.name + '!', 'success');
                }
            }).catch(error => {
                this.notification('Ошибка авторизации!', 'danger');
                console.log(error);
            });
        },
        logOut(){
            localStorage.removeItem('token');
            this.$router.push('/');
        }
    }
}

export default AuthMixin;