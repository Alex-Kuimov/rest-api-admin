<template>
    <NavBar></NavBar>
    <RouterView></RouterView>
    <Notification></Notification>
</template>

<script>
import { initStore } from "./store/store";
import NavBar from "./components/NavBar.vue"
import Notification from "./components/Notification.vue";
import DataMixin from "./mixins/DataMixin";

export default {
    mixins:[DataMixin],
    components: { Notification, NavBar },
    setup() {
        initStore();
    },
}
</script>

<style></style>
