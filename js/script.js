//evento ao carregar página, antes do CSS

document.addEventListener("DOMContentLoaded", function(){
    
    //minhas variáveis
    const prevButton = document.querySelector("#prev")
    const nextButton = document.querySelector("#next")
    const carouselList = document.querySelector(".carousel .list")
    const backgroundImage = document.querySelector(".carousel .list .item img")
    const titleElement = document.querySelector(".carousel .list .item .title")
    const descriptionElement = document.querySelector(".carousel .list .item .des")
    const ratingElement = document.querySelector(".carousel .list .item .rating")

    //mudar imagens anterior

    prevButton.addEventListener("click",function(){
        carouselList.appendChild(carouselList.firstElementChild)
        updateMainContent() //atualizar conteúdo
    })

    //mudar próxima imagem

    nextButton.addEventListener("click", function(){
        carouselList.prepend(carouselList.lastElementChild)
        updateMainContent()
    })
    

  

   



})


