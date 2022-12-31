var courses = [
{
    image: './images/htmlBasics.PNG',
    title: 'basics of HTML',
    category: 'HTML',
    price: 5.9
},
{
    image: './images/htmlElements.png',
    title: 'HTML elements and tags',
    category: 'HTML',
    price: 9.9
},
{
    image: './images/cssSelectors.jpg',
    title: 'CSS selectors',
    category: 'CSS',
    price: 69.9
},
{
    image: './images/javascriptVariables.png',
    title: 'variables and data type ',
    category: 'JS',
    price: 19.9
},
{
    image: './images/javascriptOperators.png',
    title: 'Javascript operators and conditions',
    category: 'JS',
    price: 29.9
},
{
    image: './images/htmlAttrVal.jpg',
    title: 'HTML attributes and values',
    category: 'HTML',
    price: 19.9
},
{
    image: './images/cssProperties.png',
    title: 'CSS properties',
    category: 'CSS',
    price: 29.9
},
{
    image: './images/javascriptObjects.png',
    title: 'Javascript objects and arrays',
    category: 'JS',
    price: 39.9
},
{
    image: './images/cssAnimation.png',
    title: 'CSS animations',
    category: 'CSS',
    price: 19.9
},
{
    image: './images/javascriptFunctions.png',
    title: 'The basics of javascript',
    category: 'JS',
    price: 29.9
},
{
    image: './images/javascriptEvents.png',
    title: 'javascript events',
    category: 'JS',
    price: 59.9
},
{
    image: './images/cssColors.png',
    title: 'css colors',
    category: 'css',
    price: 29.9
},
{
    image: './images/phpBasics.png',
    title: 'getting started with php',
    category: 'php',
    price: 15.9
},
{
    image: './images/javascriptFunctions2.png',
    title: 'functions and loops with javascript',
    category: 'JS',
    price: 19.9
},
{
    image: './images/phpDataBase.png',
    title: 'connecting to database using PHP',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/phpCRUD.png',
    title: 'manipulating crud using php',
    category: 'php',
    price: 45.9
},
{
    image: './images/javascriptDOM.png',
    title: 'DOM the power of javascript',
    category: 'JS',
    price: 23.9
},
{
    image: './images/course3.jpeg',
    title: 'PHP functions',
    category: 'PHP',
    price: 29.9
},
{
    image: './images/course2.jpeg',
    title: 'basics of HTML',
    category: 'html',
    price: 13.20
}

]


var content2 = document.querySelector('.content2'),
    listCat = document.querySelector('#listCat');



let creationCours= (image, titre, prix)=> {
    let div = document.createElement('div');
    div.setAttribute('class', 'card col-3 me-2 mb-2');
    let img = document.createElement('img');
    img.setAttribute('src',image)
    img.setAttribute('class','img-crd img-thumbnail ')

    let div_body = document.createElement('div')
    div_body.setAttribute('class',"card-body text-center")

    let courses_name = document.createElement('h5');
    courses_name.setAttribute('class', 'card-title ');
    let contenu = document.createTextNode(titre);
    courses_name.appendChild(contenu);

    let span = document.createElement('span');
    span.setAttribute('class', 'badge rounded-pill bg-warning text-white');
    span.appendChild(document.createTextNode(prix + ' $'));

    div.appendChild(img);
    div_body.appendChild(courses_name);
    div_body.appendChild(span);
    div.appendChild(div_body)
    content2.append(div)
}


courses.forEach((el) => {
    creationCours(el.image, el.title, el.price);
})



let creationCategories = (cat)=>{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(cat));
    li.setAttribute('class', 'list-group-item');
    li.id=cat;
    listCat.append(li);
}

let categories = ['all', ...new Set(courses.map((v) => v.category.toLowerCase()))]

categories.forEach((v) => {
    creationCategories(v);
})








// input search
let search = ()=>{
    let cat = document.getElementsByClassName('form-control')[0].value
    document.getElementById('allcard').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].title.toLowerCase().includes(cat.toLowerCase().trimStart())){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
    if(cat =="")
        courses.forEach((el)=>{
            creationCours(el.image,el.title,el.price)
        })
}
document.getElementById('search').addEventListener('keyup',search)


//filtrer par categorie

document.getElementById('all').addEventListener('click',()=>{
    document.getElementById('allcard').innerHTML = " "
    courses.forEach((el) => {
        creationCours(el.image, el.title, el.price);
    })
})
document.getElementById('js').addEventListener('click',()=>{
    document.getElementById('allcard').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="js"){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('html').addEventListener('click',()=>{
    document.getElementById('allcard').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="html"){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('css').addEventListener('click',()=>{
    document.getElementById('allcard').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="css"){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
document.getElementById('php').addEventListener('click',()=>{
    document.getElementById('allcard').innerHTML = " "
    for(let i =0;i<courses.length;i++){
        if(courses[i].category.toLowerCase()==="php"){
            creationCours(courses[i].image,courses[i].title,courses[i].price)
        }
    }
})
    	
// filtrer par prix
let Value_range=()=>{
    let value =document.getElementById('range').value
    document.getElementById('vl').innerHTML = "Value : "+ value +" $"
    document.getElementById('range').addEventListener('click',()=>{
        document.getElementById('allcard').innerHTML = " "
        for(let i =0;i<courses.length;i++){
            if(courses[i].price <= value){
                creationCours(courses[i].image,courses[i].title,courses[i].price)
            }
           
        }
    })
}
document.getElementById('range').addEventListener('change',Value_range)


    