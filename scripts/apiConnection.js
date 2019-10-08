let body = document.querySelector("body")

/*let beerApiConnection = async () => {
    const response = await fetch("https://api.punkapi.com/v2/beers")
    const jason = await response.json()

    for (i=0; i < 25; i++){
    let article = document.createElement("img")
    article.setAttribute("src", jason[i].image_url)
    body.appendChild(article)
    console.log(jason[i])
    }
}

beerApiConnection();*/

const key = "3848e1696e988e3b239b560c608dbd8b"
const proxy = "https://cors-anywhere.herokuapp.com/"
const apiUrl = "https://sandbox-api.brewerydb.com/v2/"

let beerApiRandom = async () => {

    const response = await fetch(`${proxy + apiUrl}beer/random/?key=${key}`)
    const jason = await response.json()
    console.log(jason)
    }

beerApiRandom()