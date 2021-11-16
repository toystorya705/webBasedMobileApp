
let app = new Vue({
    el: "#app",
    data: {

        product: product,
        showProduct: true,
        filter: '',
        sort: '',
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
        options: [
            { label: 'Default', value: 'none' },
            { label: 'Most Rated', value: 'rating' },
            { label: 'least Rated', value: 'leastrated' },
            { label: 'price(high to low)', value: 'price(high to low)' },
            { label: 'price(low to high)', value: 'price(low to high)' },


        ],

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
        submitForm() {
            
             if(this.order.firstName==""){
                 console.log("ugygygyg");
             }
        
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
        },
        removeButton(index) {
            product[index].stock++;
            for (let i = 0; i < this.cart.length; i++) {
                if(this.cart[i]==index) {
                this.cart.splice(i,1);
            console.log(i+" "+index);
          break;
            
                }
            }
        }
    },
    computed: {// This disables the button at 0 stock
        cartCheckDisable: function () {
            return this.cart.length === 0;
        },
        cartItemCount: function () {
            return this.cart.length || '';
        },
    
    getproduct() {

        var product = this.product.filter((product) => {
            return product.subject.toLowerCase().includes(this.filter.toLowerCase());
        });

        if (this.sort == 'rating') {
            return product.sort(function (a, b) {
                return b.rating - a.rating
            });

        }
        else if (this.sort == 'leastrated') {
            return product.sort(function (a, b) {
                return a.rating - b.rating
            });

        }
        else if (this.sort == 'price(high to low)') {
            return product.sort(function (a, b) {
                return b.price - a.price
            });

        }
        else if (this.sort == 'price(low to high)') {
            return product.sort(function (a, b) {
                return a.price - b.price
            });

        }

        else {
            return product;
        }

    }
}
});

