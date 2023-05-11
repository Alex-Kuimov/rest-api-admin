<template>
    <div class="container">
        <div v-if="store.notification?.text" class="notification alert " :class="'alert-'+store.notification.type">
            {{ store.notification.text }}
        </div>
    </div>
</template>

<script>
import { loadStore } from "../store/store";

export default {
    setup() {
        return loadStore();
    },
}
</script>

<style>
.notification {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed!important;
    bottom: 0;
    left: 0;
    padding: 5px 10px!important;
    width: 100%;
    margin-bottom: 0px!important;
    border-radius: 0px!important;
}
</style>