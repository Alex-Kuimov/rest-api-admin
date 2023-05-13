import axios from "axios";
import { data } from "../data/data";

const DataMixin = {
    methods: {
        getItems(type) {
            const formData = new FormData();
            formData.append('method', 'get');

            axios.post(
                this.store.api+'/'+type,
                formData,
                {
                    headers:{
                        'Auth': this.store.token
                    }
                }
            ).then((res) => {
                if(res.data.success){
                    this.store[type] = res.data.content;
                }
            }).catch(error => {
                this.notification('Возникла ошибка! ', 'danger');
                console.log(error);
            });
        },
        storeItem(item, action){
            const formData = new FormData();

            if(action ==='update'){
                formData.append('id', this.id);
            }

            if(item.type === 'options'){
                formData.append('value', item.value);
            }

            formData.append('method', action);
            formData.append('name', item.name);

            this.fields.forEach(function(field) {
                formData.append('meta['+field['name']+']', field['value']);
            });

            axios.post(
                this.store.api+'/'+item.type,
                formData,
                {
                    headers:{
                        'Auth': this.store.token
                    }
                }
            ).then((res) => {
                if(res.data.success){
                    this.$router.push('/'+item.type);
                    this.notification('Данные обновлены!', 'success');
                }
            }).catch(error => {
                this.notification('Возникла ошибка! ', 'danger');
                console.log(error);
            });
        },
        deleteItem(item){
            const formData = new FormData();

            formData.append('id', item.id);
            formData.append('method', 'delete');

            axios.post(
                this.store.api+'/'+item.type,
                formData,
                {
                    headers:{
                        'Auth': this.store.token
                    }
                }
            ).then((res) => {
                if(res.data.success){
                    this.$router.push('/'+item.type);
                    this.notification('Данные удалены!', 'success');
                }
            }).catch(error => {
                this.notification('Возникла ошибка! ', 'danger');
                console.log(error);
            });
        },
        setValues(){
            const fields = data[this.$route.meta.instance].fields;

            for (let key in fields) {
                const field = fields[key];
                const value = this.item.meta[field.name] ? this.item.meta[field.name]: '';
                this.fields.push({...field, value: value })
            }
        }
    }
}

export default DataMixin;