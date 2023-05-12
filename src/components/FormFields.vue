<template>
    <div class="form-group" v-for="field in fields">
        <label :for="field.name">
            {{field.label}}
        </label>
        <textarea v-if="field.type === 'textarea'" v-model="field.value" class="form-control mb-2" :id="field.name" :placeholder="field.placeholder"></textarea>
        <input v-if="field.type === 'text'" v-model="field.value" type="text" class="form-control mb-2" :id="field.name" :placeholder="field.placeholder">
        <input v-if="field.type === 'date'" v-model="field.value" type="datetime-local" class="form-control mb-2" :id="field.name" :placeholder="field.placeholder">
    </div>
</template>

<script>
export default {
    props: ['fields' ,'item'],
}
</script>