console.log("I'm connected don't worry")
const createImg = (name, url)=>{
    let div=document.createElement('div')
    let label =document.createElement('label')
    label.innerHTML=name
    label.style.color="white"
    let pokemonImg= document.createElement('img')
    pokemonImg.src=url
    div.appendChild(pokemonImg)
    div.appendChild(label)
    div.style.display='flex'
    div.style.flexDirection='column'
    div.style.textAlign='center'
    document.getElementById('imgHolder').appendChild(div)
}

const createImgByUrl =(url)=>{
    axios.get(url)
    .then((response)=>{
        createImg(response.data.name, response.data.sprites['front_default'])
    })
}


const getPokemonTheme=()=>{
    document.getElementById('imgHolder').innerHTML=""
    let pokeId=Math.floor(Math.random()*151)+1
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
    .then((response)=>{
        createImg(response.data.name, response.data.sprites['front_default'])
        let typeUrl=response.data.types[0]['type']['url']
        axios.get(typeUrl)
        .then((response)=>{
            for (let i=0; i<4; i++){
                createImgByUrl(response.data.pokemon[i]['pokemon']['url'])
            }
        })
    })
}