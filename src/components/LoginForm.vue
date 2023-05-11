<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 mt-5">
        <h2 class="text-center mb-4">Авторизация</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="username">Логин</label>
            <input v-model="name" type="text" class="form-control mb-2" id="username" placeholder="Введите логин" required>
          </div>
          <div class="form-group">
            <label for="password">Пароль</label>
            <input v-model="pass" type="password" class="form-control mb-2" id="password" placeholder="Введите пароль" required>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Войти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AuthMixin from "../mixins/AuthMixin"
import NotificationMixin from "../mixins/NotificationMixin";
import { loadStore } from "../store/store";

export default {
    mixins:[AuthMixin, NotificationMixin],
    data(){
        return {
            name:'',
            pass: '',
        }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        if(this.store.isAuth){
            this.$router.push('/messages');
        }
    }

}
</script>