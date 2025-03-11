const myNums = [1, 2, 3];

// reduce calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result and is provided as an argument in the next call to the callback function.
// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0);
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price, 0);
console.log(priceToPay);