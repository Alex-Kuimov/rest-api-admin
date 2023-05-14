const SettingsMixin = {
    methods: {
        setSettings() {
            this.store.api = process.env.VUE_APP_API_URL;
        }
    }
}

export default SettingsMixin;