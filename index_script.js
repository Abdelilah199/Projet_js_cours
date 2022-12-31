

let chargerCartesAleatoire = ()=>{
document.getElementById('troi_card').innerHTML=" "
for(let i =0;i<3;i++){
    let nbr=Math.floor(Math.random() *10 + Math.random()*10)
    creationCours(courses[nbr].image,courses[nbr].title,courses[nbr].price)

}
}

chargerCartesAleatoire();




