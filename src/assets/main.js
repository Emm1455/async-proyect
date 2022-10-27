const API = 'https://api.escuelajs.co/api/v1';
const card = document.querySelector(".content");


async function fetchData(urlApi) { 
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try{
        const products = await fetchData(`${urlApi}/products`);
        let view = `
        <div class="card flex">
                <figure>
                    <img src="" alt="Product_img" width="100%">
                </figure>
                <p class="name fs-200">${products[0].title}</p>
                <p class="price fs-200 ff-sans-cond">$100</p>
            </div>`;
        
        card.insertAdjacentHTML("beforeend",view);
        // console.log(products[0]);
    } catch(error) {
        console.error(error);
    }
}


anotherFunction(API); //se hace el llamado
//Apuntes: https://www.notion.so/emmanuelsworld/Mod-Async-await-d558010ff1a8493f9f4ff3cdc42105cc