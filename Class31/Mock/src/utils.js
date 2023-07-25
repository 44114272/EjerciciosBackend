import {Faker, es} from '@faker-js/faker';

const customFaker = new Faker({ locale: [es] });

const generateUser = () => {
    const numOfProducts = parseInt(
        customFaker.string.numeric(1, {
            bannedDigits: ['0']
        })
    );

    let products = [];

    for (let i=0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return {
        name: customFaker.person.firstName(),
        lastName: customFaker.person.lastName(),
        birthDate: customFaker.date.birthdate(),
        phone: customFaker.phone.number(),
        email: customFaker.internet.email(),
        id: customFaker.database.mongodbObjectId(),
        products
    }
}

const generateProduct = () => {
    return {
        title: customFaker.commerce.productName(),
        price: customFaker.commerce.price(),
        department: customFaker.commerce.department(),
        // stock: customFaker.commerce.stock(1),
        id: customFaker.database.mongodbObjectId(),
        img: customFaker.image.url()
    }
}

export {
    generateUser
}