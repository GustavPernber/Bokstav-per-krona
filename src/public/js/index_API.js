console.log('API')

const productArticles={

    drinksContainer:document.querySelector('section.drinksContainer'),


    clocks:{
        1:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-1" class="css-1a0aeb e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M20.4 6.36l-5.44 9.4V4.88c2 0 3.88.64 5.44 1.48zM.12 15.76C.12 7.52 6.72.84 14.96.84c8.2 0 14.92 6.68 14.92 14.92 0 8.16-6.72 14.84-14.92 14.84C6.72 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.8 12.92 12.84 12.92 7.16 0 12.92-5.8 12.92-12.92 0-7.2-5.76-13-12.92-13-7.04 0-12.84 5.8-12.84 13z"></path></svg>`
    },

    clocks(clockString){
    
        const switchName=(name)=>{
            switch (name) {
                case "Body":
                    return "Fyllighet"
                    break;
                case "Roughness":
                    return "Strävhet"
                    break;
                case "Fruitacid":
                    return "Fruktsyra"
                    break;
    
                case "Sweetnes":
                    return "Sötma"
                    break;
    
                case "Bitter":
                    return "Beska"
                    break;
            
                default:
                    return `NOT KNOWN ${name}`
                    break;
            }
        }
        let array=clockString.split(', ')
    
        let newArr=[]
        array.forEach(element => {
            let pair=element.split('Clock')[1]
            let obj={
                name: switchName(pair.split(':')[0]),
                value:pair.split(':')[1]
            }
            // console.log(obj)
            newArr.push(obj)
            // console.log(element.split('Clock'))
            
        });
        return newArr
    },


    async getDrinks(){

        console.log('fetching...')
        const response=await fetch('/api/drinksLimited')
        const data=await response.json()
        console.log('done fetching')
        return data
    },

    async renderDrinks(products){
        console.log('rendering')

        products.forEach(product => {
            let apk=parseFloat(product.APK).toPrecision(3)
            let imgUrl=`https://product-cdn.systembolaget.se/productimages/${product.id}/${product.id}_200.png`

            let clocks=this.htmlClocks(product.)

            let nameThin;
            if (product.nameThin===null) {
                nameThin=""
            } else {
                nameThin=product.nameThin
            }


            this.drinksContainer.insertAdjacentHTML('afterbegin', `<a href="systembolaget.se"> 

                <figure>
                    <img alt="" src="${imgUrl}">
                </figure>
                
                <div class="titles">
                    <p>${product.category2}, ${product.category3}</p>
                    <h1>${product.nameBold}</h1>
                    <h2>${nameThin}</h2>
                </div>
            
                <div class="usageTasteContainer">
                    <p> ${product.taste} ${product.usage}
                    </p>
                </div>
            
                <footer class="volumePrice">
                    <div>
                        <p><strong>APK: ${apk} </strong></p>
                        <p>${product.volume} ml</p>
                        <p>${product.alcPercentage}%</p>
                    </div>
                    <h3>${product.price} :-</h3>
                </footer>
            
                <aside class="clocks">
                    
                    ${clocks}

                    
                    
                    
                    </aside>
                    </a>`
            )

        });
                    // <div>
                    //     ${this.clocks[1]}
                    //     <p>SÖTMA</p>
                    // </div>
                    // <div>
                    //     ${this.clocks[1]}
                    //     <p>SÖTMA</p>
                    // </div>
                    // <div>
                    //     ${this.clocks[1]}
                    //     <p>SÖTMA</p>
                    // </div>
        console.log('rendering done')
    },

    async init(){
        let data= await this.getDrinks()
        this.renderDrinks(data)
    },

}



productArticles.init()


// <div class="clock">
//                         <object data="img/clocks/clock-1.svg" type="image/svg+xml"></object>
//                         <p>SÖTMA</p>
//                     </div>
//                     <div class="clock">
//                         <object data="img/clocks/clock-1.svg" type="image/svg+xml"></object><p>SÖTMA</p>
//                     </div>
//                     <div class="clock"><object data="img/clocks/clock-1.svg" type="image/svg+xml"></object><p>SÖTMA</p>
//                     </div>




// function renderDrinks(){


// }



// const drinksContainer= document.querySelector('section.drinksContainer')
// drinksContainer.insertAdjacentHTML('afterbegin', 

// `<a href="systembolaget.se"> 

//     <figure>
//         <div class="orderStock">
//             <p>Ordevara</p>
//         </div>
//         <img alt="" src="https://product-cdn.systembolaget.se/productimages/24624904/24624904_200.png">
//     </figure>

//     <div class="titles">
//         <p>VITT FRISKT &amp; FRUKTIGT </p>
//         <h1>VID-A</h1>
//         <h2>Organic Suavignong Blanc</h2>
//     </div>

//     <div class="usageTasteContainer">
//         <p> något aromatisk, mycket frisk smak med inslag av päron, örter, krusbär och citrus. 
//         Serveras vid 8-10°C som aperitif eller till rätter av fisk eller skaldjur, gärna sallader.
//         </p>
//     </div>

//     <footer class="volumePrice">
//         <div>
//             <p><strong>APK: 2.019 </strong></p>
//             <p>750 ml</p>
//             <p>12%</p>
//         </div>
//         <h3>89:-</h3>
//     </footer>

//     <aside class="clocks">
//         <div class="clock">
//             <object data="img/clocks/clock-1.svg" type="image/svg+xml"></object>
//             <p>SÖTMA</p>
//         </div>
//         <div class="clock">
//             <object data="img/clocks/clock-1.svg" type="image/svg+xml"></object><p>SÖTMA</p>
//         </div>
//         <div class="clock"><object data="img/clocks/clock-1.svg" type="image/svg+xml"></object><p>SÖTMA</p>
//         </div>
//     </aside>
//     </a>`
// )



//             drinksContainer.addEventListener('click', ()=>{
//     console.log('click');
// })
// getDrinks()


// fetch('/api/30drinks')
// .then(resp=>{
    
//     return resp.json()
// })
// .then(data=>console.log(data))