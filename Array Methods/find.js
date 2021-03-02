// Find method 
const items = [{ name: 'Macbook Pro', price: 200000 },
{ name: 'Macbook Air', price: 130000 },
{ name: 'ASUs', price: 50000 },
{ name: 'Dell', price: '10000' }
]

const findItem = items.find((item) => {
    return item.name === "Macbook Air"
})
console.log(findItem);