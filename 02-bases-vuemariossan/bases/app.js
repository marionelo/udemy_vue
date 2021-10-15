
const app = Vue.createApp({
    /* template: `
        <h1> Hola Mundos </h1>
        <p> {{ '1' + '1' }} </p>
    ` */


    data() {
        return {
            message: "Hola Mundo"
        }
    },
    methods: {
        changeMessage( event ) {
            console.log(event);
            console.log('Hola Mundo Mariossan')
            this.message = 'mariossan es el mejor'
            this.captalize()
        },
        captalize() {
            this.message = this.message.toUpperCase();
        }
    }
})

app.mount("#myApp")