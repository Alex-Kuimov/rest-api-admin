<template>
    <div class="form-group" v-for="field in fields" :key="field.id">
        <label v-if="field.label" :for="field.name">
            {{ field.label }}
        </label>
        <input v-if="field.type === 'text'" v-model="field.value" type="text" class="form-control mb-2" :id="field.name"
            :placeholder="field.placeholder">
        <input v-if="field.type === 'date'" v-model="field.value" type="datetime-local" class="form-control mb-2"
            :id="field.name" :placeholder="field.placeholder">
        <textarea v-if="field.type === 'textarea'" v-model="field.value" class="form-control mb-2" :id="field.name"
            :placeholder="field.placeholder"></textarea>
    </div>
</template>

<script>
export default {
    props: ['fields', 'item'],
}
</script>