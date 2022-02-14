const dropHeaders=document.querySelectorAll('.dropHeader')
const dropContainers=document.querySelectorAll('.dropContainer')

const strippedBtn=document.querySelector('button.stripped')
const bigArtBtn=document.querySelector('button.bigArticles')

const articlesContainer=document.querySelector('section.drinksContainer')

dropHeaders.forEach((el, i)=>{
    el.addEventListener('click', ()=>{
        const dropContainer=dropContainers[i]
        dropContainer.classList.toggle("show")

        el.classList.toggle('active')

    })
})

strippedBtn.addEventListener('click', ()=>{
    strippedBtn.classList.remove('active')
    bigArtBtn.classList.add('active')

    articlesContainer.classList.add('strippedArticles')
    
    
})

bigArtBtn.addEventListener('click', ()=>{
    strippedBtn.classList.add('active')
    bigArtBtn.classList.remove('active')
    articlesContainer.classList.remove('strippedArticles')
})



