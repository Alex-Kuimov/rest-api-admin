<template>
    <div class="container">
        <button type="button" class="btn btn-secondary btn-block mb-2" @click="back">
          Назад
        </button>

        <p class="h3 mb-4">{{ item.name }}</p>

        <p v-if="item.hasOwnProperty('value')"><strong>Значение:</strong> {{ item.value }}</p>

        <div v-for="field in fields">
            <p v-if="field.value"><strong>{{ field.label }}:</strong> {{ field.value }}</p>
        </div>

        <p v-if="item.created_at">
          <strong>Созданно:</strong> {{ item.created_at }}
        </p>

        <p v-if="item.updated_at">
          <strong>Изменено:</strong> {{ item.updated_at }}
        </p>

        <button type="button" class="btn btn-primary btn-block mb-2" @click="edit=!edit">
          Редактировать
        </button>
    </div>

    <StoreForm v-if="edit" action="update" :id="id"></StoreForm>
</template>

<script>
import { loadStore } from "../store/store";
import AuthMixin from "../mixins/AuthMixin"
import DataMixin from "../mixins/DataMixin";
import FormFields from "./FormFields.vue";
import StoreForm from "./StoreForm.vue";

export default {
    props:['id'],
    mixins:[AuthMixin, DataMixin],
    components: { FormFields, StoreForm },
    data(){
        return {
            fields: [],
            edit: false,
        }
    },
    computed: {
        item() {
            const instance = this.$route.meta.instance;

            return {
                ...this.store[instance][this.id],
                type: instance,
            }
        },
    },
    methods: {
      back(){
          this.$router.push('/' + this.$route.meta.instance);
      }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        this.setValues();
    },
}
</script>