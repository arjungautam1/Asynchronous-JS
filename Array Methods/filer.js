const items = [{ name: 'Macbook Pro', price: 200000 },
{ name: 'Macbook Air', price: 130000 }
]
const filteredItems = items.filter((item) => {
    return item.price >= 150000
})

console.log(filteredItems);