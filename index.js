
let app = new Vue({
    el: "#app",
    data: {

        product: product,
        showProduct: true,
        filterName: '',
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
                if (this.cart[i] == index) {
                    this.cart.splice(i, 1);
                    console.log(i + " " + index);
                    break;

                }
            }


        },
        filterClick() {


            if (this.filterName == "") {
                console.log("uufyerjf");
                this.sort = "asec"
            }

            else if (this.filterName == "price" || this.filterName == "location" || this.filterName == "subject" || this.filterName == "rating") {
                this.filterName = ""
                this.sort = ""
            }
        }
    },
    computed: {// This disables the button at 0 stock
        cartCheckDisable: function () {
            if (this.showProduct == false)
                return false;
            else
                return this.cart.length === 0;
        },
        cartItemCount: function () {
            return this.cart.length || '';

        },


        getproduct() {

            var product = this.product.filter((product) => {
                return product.subject.toLowerCase().includes(this.filter.toLowerCase());
            });

            if (this.filterName == "subject") {
                console.log("llll");
                if (this.sort == 'dsec') {
                    console.log("sssss");
                    return product.sort((a, b) => (b.subject > a.subject ? 1 : -1));

                }
                else if (this.sort == 'asec') {
                    console.log("dddd");
                    return product.sort((a, b) => (b.subject < a.subject ? 1 : -1));
                }
            }
            else if (this.filterName == "price") {
                if (this.sort == "dsec") {
                    return product.sort(function (a, b) {
                        return b.price - a.price
                    });

                }
                else if (this.sort == 'asec') {
                    return product.sort(function (a, b) {
                        return a.price - b.price
                    });

                }
            }
            //  let x = list.sort((a, b) => (a.name > b.name ? 1 : -1));
            else if (this.filterName == "location") {
                console.log("its working");
                if (this.sort == 'dsec') {
                    return product.sort((a, b) => (b.location > a.location ? 1 : -1));

                }
                else if (this.sort == 'asec') {
                    return product.sort((a, b) => (b.location < a.location ? 1 : -1));


                }
            }
            else if (this.filterName == "stock") {
                if (this.sort == 'dsec') {
                    return product.sort(function (a, b) {
                        return b.stock - a.stock;
                    });

                }
                else if (this.sort == 'asec') {
                    return product.sort(function (a, b) {
                        return a.stock - b.stock;
                    });

                }
            }



            else {
                return product;
            }

        },
        submitForm() {

            if (this.order.firstName.match(/[a-z]/) && this.order.lastName.match(/[0-9]/) && this.order.lastName.length >= 10)
                return false;
            else
                return true;

        },
    }
});

