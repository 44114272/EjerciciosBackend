const taxes = {
    tax1: 12,
    tax2: 5,
    tax3: 32
}

const onlyValues = Object.values(taxes);

const totalTaxes = onlyValues.reduce((initialV, newV) => initialV + newV)

console.log(totalTaxes);

const object = {
    prop1: 2,
    prop2: 'b',
    prop3: true,
}
const object2 = {
    prop4: 'c',
    prop5: [1,2,3,4],
}

const totalObject = {
    ...object,
    ...object2
}
console.log(totalObject);

const object3 = {
    a: 1,
    b: 2,
    c: 3,
}
const {a, ...rest} = object3; 
console.log(a);
console.log(rest);


const objects =  [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5,
        dulces:2
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

let newArray = [];
let total;

objects.forEach(obj => {
    const keys = Object.keys(obj);
    const values = Object.values(obj);

    keys.forEach(key=> {
        if(!newArray.includes(key)) newArray.push(key);
    })

    total = values.reduce((initialValue, totalValue) => initialValue + totalValue);
})

console.log(newArray);
console.log(total);