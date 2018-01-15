var applyCoupon = category => discount => item => {
    if (item.category === category) {
        return item.price * (1 - discount);
    } else {
        return item.price;
    }
};

const item = {
    name : "Biscuits",
    type : "regular",
    category : "food",
    price : 2.0
};
console.log(applyCoupon("food")(0.1)(item));
console.log(applyCoupon("drink")(0.1)(item));