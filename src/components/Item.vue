<template>
    <div class="container">
        <button type="button" class="btn btn-secondary btn-block mb-2" @click="back">
            Назад
        </button>

        <p class="h3 mb-4">
            {{ item.name }}
        </p>

        <p v-if="item.hasOwnProperty('value')"><strong>Значение:</strong> {{ item.value }}</p>

        <div v-for="field in fields" :key="field.id">
            <p v-if="field.value"><strong>{{ field.label }}:</strong> {{ field.value }}</p>
        </div>

        <p v-if="item.created_at">
            <strong>Созданно:</strong> {{ item.created_at }}
        </p>

        <p v-if="item.updated_at">
            <strong>Изменено:</strong> {{ item.updated_at }}
        </p>

        <button type="button" class="btn btn-primary btn-block mb-2" @click="edit = !edit">
            Редактировать
        </button>
    </div>

    <StoreForm v-if="edit" action="update" :id="id"></StoreForm>
</template>

<script>
import { loadStore } from "../store/store";
import AuthMixin from "../mixins/AuthMixin"
import DataMixin from "../mixins/DataMixin";
import SettingsMixin from "../mixins/SettingsMixin";
import StoreForm from "./StoreForm.vue";

export default {
    props: ['id'],
    mixins: [AuthMixin, DataMixin, SettingsMixin],
    components: { StoreForm },
    data() {
        return {
            fields: [],
            edit: false,
        }
    },
    computed: {
        item() {

            if (!this.store[this.instance]) {
                return false;
            }

            return {
                ...this.store[this.instance][this.id],
                type: this.instance,
            }
        },
        instance() {
            return this.$route.meta.instance
        }
    },
    methods: {
        back() {
            this.$router.push('/' + this.instance);
        }
    },
    setup() {
        return loadStore();
    },
    mounted() {
        this.checkAuth();
        this.setSettings();

        this.getItems(this.instance).then((items) => {
            this.store[this.instance] = items
            this.setValues();
        });
    },

}
</script>