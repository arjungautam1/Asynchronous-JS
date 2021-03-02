//Map in js
const items = [{ name: 'Macbook Pro', price: 200000 },
{ name: 'Macbook Air', price: 130000 },
{name :'ASUs' ,price :50000},
{name : 'Dell',price :'10000'} 
]

const mappedItems=items.map((item)=>{
    return "Item Name :"+item.name+" " + "Item Price :"+item.price;

})
console.log(mappedItems);