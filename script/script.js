//----------------------GET API DATA-------------------//

const getPokemon = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}/`;

    try{
        const response = await fetch(url)
        const data = await response.json()
        //console.log(data);
        printData(data)
    }
    catch(error){
        throw error
    }

}
const getPokemons = (qty) => {
    let i=1
    while(i <= qty){
       getPokemon(i)
       i++
    }
    
}

let html ='';
const  printData = (data) => {
    
    console.log(data)
   
        html += '<div class ="col mt-5" >';
            html += '<div class="card" style="width: 13rem;">'
                html += `<img src="${data.sprites.front_default}" class="card-img-top" alt="...">`
                html += '<div class="card-body">'
                    html += `<h5 class="card-title text-center" >${data.species.name}</h5>`
                    html += `<p class="card-text text-center">${data.types[0].type.name}</p>`
                html += '</div>'
            html += '</div>'
        html += '</div>'
    
    document.getElementById('cards-Char').innerHTML = html
}
getPokemons(20)