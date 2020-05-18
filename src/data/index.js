const DOUGH = { HANDTOSSED : "Hand Tossed", THINCRUST:"Thin Crust", NEWYORK:"New York Style", GLUTENFREE:"Gluten Free"}
const SIZE = {
    HANDTOSSED: {small: 9.99, medium:12.99, large:14.99},
    THINCRUST: {medium:11.99, large:13.99},
    NEWYORK: {large:16.99, extralarge:19.99},
    GLUTENFREE: {small:10.99}
}

const CHEESEOPTIONS = {
    light: 0,
    normal: 0,
    extra: 2.99,
    double:3.99
}

const TOPPINGS = {
    pepperoni: 0.99,
    sausage: 0.99,
    ham: 0.99,
    bacon: 0.99,
    salami: 0.99,
    peppers: 0.99,
    olives: 0.99,
    jalapenos: 0.99,
    mushrooms: 0.99,
    pineapple: 0.99,
    onion: 0.99
}

const SAUCE = {
    RegularTomato: 0,
    HeartyTomato: 0.99,
    BBQSauce: 1.99
}

export {
    DOUGH,
    SIZE,
    CHEESEOPTIONS,
    TOPPINGS,
    SAUCE
}
