let body = document.querySelector("body")
let articleContainer = document.getElementById("article-container")

const key = "3848e1696e988e3b239b560c608dbd8b"
const proxy = "https://cors-anywhere.herokuapp.com/"
const apiUrl = "https://sandbox-api.brewerydb.com/v2/"

let createBeerArticle = beer =>{
    let article = document.createElement("article")
    article.setAttribute("class", "beer-container")
    article.innerHTML = `
    <h5 class="beer-name">${beer.name}</h5>
    <div class="beer-data">
        <img src="${beer.labels ? beer.labels.medium : "img/not-available.JPG"}" alt"image-beer" class="beer-image">
        <ul class="beer-ul">
            <li class="beer-type"><b>Style:</b> ${beer.style ? beer.style.category.name :  "Our own style"}</li>
            <li class="beer-spec"> <b>Specifications: </b>
                <ul>
                    <li class="beer-abv">ABV: ${beer.abv}</li>
                    <li class="beer-ibu"> organic (Y/N): ${beer.isOrganic}</li>
                </ul>
            </li>
        </ul>
    </div> `
    articleContainer.appendChild(article)
    console.log(article)
}

let beerApiRandom = async () => {

    const response = await fetch(`${proxy + apiUrl}beers/?key=${key}`)
    let jason = await response.json()
    let beerArray = jason.data

    for(let i=0; i<8; i++){

        randomNumber = Math.floor(Math.random()*beerArray.length)
        let beer = beerArray[randomNumber]
        console.log(beer)
        createBeerArticle(beer)
        beerArray.splice(randomNumber, 1)
    }
    }

    //let i = Math.floor(Math.random()*45)

beerApiRandom()