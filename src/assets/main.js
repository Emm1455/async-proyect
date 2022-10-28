const API = 'https://api.escuelajs.co/api/v1';
const card = document.querySelector(".content");
const options = document.querySelector(".options");


async function fetchData(urlApi) { 
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        // console.log(products);
        let view = `${products.map(product => 
            `<div class="card flex">
        <figure>
            <img class="img" src="${product['images'][0]}" alt="Product_img">
        </figure>
        <p class="name fs-300">${product.title}</p>
        <p class="price fs-400 ff-sans-cond">$ ${product.price}</p>
    </div>`
        ).slice(0,6).join('')}`
        ;

        const categories = await fetchData(`${urlApi}/categories`);
        // console.log(categories);
        let text = `${categories.map(categorie =>
            `<p>${categorie.name}</p>`
            ).slice(0,5).join('')}`
            ;

        card.insertAdjacentHTML("beforeend",view);
        options.innerHTML = text;
        // console.log(products[0]);
    } catch(error) {
        console.error(error);
    }
}


anotherFunction(API); //se hace el llamado
//Apuntes: https://www.notion.so/emmanuelsworld/Mod-Async-await-d558010ff1a8493f9f4ff3cdc42105cc