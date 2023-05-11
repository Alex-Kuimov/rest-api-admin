
const NotificationMixin = {
    methods: {
        notification(text, type){
            this.store.notification = {
                text: text,
                type: type
            };

            setTimeout(function (){
                this.store.notification = {};
            }.bind(this),2000);
        }
    }
}

export default NotificationMixin;