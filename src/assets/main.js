const API = 'https://api.escuelajs.co/api/v1';
const content = document.querySelector(".content");
const options = document.querySelector(".options");
let catClass = [];
let products = {};
let categoryElmnt = [];
let currentCat = "";

async function fetchData(urlApi) { 
    const response = await fetch(urlApi);
    const data = response.json();
    return data;
}

const initialCat = async(urlApi) =>{
    try{
        const categories = await fetchData(`${urlApi}/categories`);
        //console.log(categories);
        let text = `${categories.map(category =>
            `<p class="${category.name}">${category.name}</p>`            
            ).slice(0,4).join('')}`
            ;     
        catClass = categories.map(category => category.name).slice(0,4); 
        // console.log(catClass);
        options.innerHTML = text;

        for (let i = 0; i < catClass.length; i++) {
            categoryElmnt[i] = document.querySelector(`.${catClass[i]}`);          
        }

        categoryElmnt[0].addEventListener('click',change0);
        categoryElmnt[1].addEventListener('click',change1);
        categoryElmnt[2].addEventListener('click',change2);
        categoryElmnt[3].addEventListener('click',change3);


        categoryElmnt[0].classList.add('selected');
        currentCat = categoryElmnt[0];

        products = await fetchData(`${urlApi}/products`);
        // console.log(products);
        let view = `${products.filter(product => product.category.name == catClass[0]).map(product => 
            `<div class="card flex">
            <figure>
                <img class="img" src="${product['images'][0]}" alt="Product_img">
            </figure>
            <p class="name fs-300">${product.title}</p>
            <p class="price fs-400 ff-sans-cond">$ ${product.price}</p>
        </div>`
        ).slice(0,6).join('')}`
        ;

        content.innerHTML = view;    
    }
    catch (error){
        console.log("Error al cargar categories");
    }
}

function change0(){
    currentCat.classList.remove('selected');
    categoryElmnt[0].classList.add('selected');
    currentCat = categoryElmnt[0];
    setView(0);
}

function change1(){
    currentCat.classList.remove('selected');
    categoryElmnt[1].classList.add('selected');
    currentCat = categoryElmnt[1];
    setView(1); 
}

function change2(){
    currentCat.classList.remove('selected');
    categoryElmnt[2].classList.add('selected');
    currentCat = categoryElmnt[2];
    setView(2);
}

function change3(){
    currentCat.classList.remove('selected');
    categoryElmnt[3].classList.add('selected');
    currentCat = categoryElmnt[3];
    setView(3);
}

function setView(elmnt){
    let view = `${products.filter(product => product.category.name == catClass[elmnt]).map(product => 
        `<div class="card flex">
        <figure>
            <img class="img" src="${product['images'][0]}" alt="Product_img">
        </figure>
        <p class="name fs-300">${product.title}</p>
        <p class="price fs-400 ff-sans-cond">$ ${product.price}</p>
    </div>`
    ).slice(0,6).join('')}`
    ;

    content.innerHTML = view;
}

initialCat(API);







// function toogleCategory1{
//     if (){

//     }
// }
// anotherFunction(API); //se hace el llamado
//Apuntes: https://www.notion.so/emmanuelsworld/Mod-Async-await-d558010ff1a8493f9f4ff3cdc42105cc