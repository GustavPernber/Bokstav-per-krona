console.log('index')

const dropHeaders=document.querySelectorAll('.dropHeader')
const dropContainers=document.querySelectorAll('.dropContainer')

dropHeaders.forEach((el, i)=>{
    el.addEventListener('click', ()=>{
        const dropContainer=dropContainers[i]
        dropContainer.classList.toggle("show")

        el.classList.toggle('active')

    })
})

