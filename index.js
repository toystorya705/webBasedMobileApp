
let app = new Vue({
    el: "#app",
    data: {

        product: product,
        showProduct: true,
        order: {
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            zip: "",
            method: 'Home',
            gift: "Do not send as a gift",
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as a gift',
            states: [
                'Alabama',
                'Arizona',
                'California',
                'Nevada'
            ],
            stateCheckoutDisplay: ""


        },

        cart: []
    },
    methods: {
        //  This function decrease the value of stock by 1 every time user click Button

        addItem(itemId) {
            if (product[itemId].stock > 0) {

                this.stock = --product[itemId].stock;
                this.cart.push(itemId);
            }
        },
        isDisabled(itemId) {
            return this.product[itemId].stock === 0
        },
        submitForm() { alert('Ordersubmitted!') },
        stateSelect(state) {
            //     console.log(state);
            //     this.order.stateCheckoutDisplay= state;

        },
        showCart() {
            this.showProduct = this.showProduct ? false : true
            
        },
   
        cartCount(id) {
            let count = 0;
            for (let i = 0; i < this.cart.length; i++) {
                if (this.cart[i] === id) {
                    count++;
                }
            }
            return count;
        }
    },
    computed: {// This disables the button at 0 stock
        cartCheckDisable: function(){
           return this.cart.length===0;
        },
        cartItemCount: function () {
            return this.cart.length || '';
        }

    }
});