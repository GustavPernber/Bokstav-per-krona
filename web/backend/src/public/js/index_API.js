console.log('API')

const productArticles={

    drinksContainer:document.querySelector('section.drinksContainer'),

    tasteClocks:{

        svgClock:{
            1:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-1" class="css-1a0aeb e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M20.4 6.36l-5.44 9.4V4.88c2 0 3.88.64 5.44 1.48zM.12 15.76C.12 7.52 6.72.84 14.96.84c8.2 0 14.92 6.68 14.92 14.92 0 8.16-6.72 14.84-14.92 14.84C6.72 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.8 12.92 12.84 12.92 7.16 0 12.92-5.8 12.92-12.92 0-7.2-5.76-13-12.92-13-7.04 0-12.84 5.8-12.84 13z"></path></svg>`,
            2:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-2" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 15.76V4.88c4.96 0 8.2 3.28 9.4 5.44l-9.4 5.44zm-14.84 0C.12 7.52 6.84.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.84 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.8 12.92 12.84 12.92 7.16 0 12.92-5.8 12.92-12.92 0-7.2-5.76-13-12.92-13-7.04 0-12.84 5.8-12.84 13z"></path></svg>`,
            3:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-3" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 15.76V4.88c6.6 0 10.84 5.68 10.84 10.88H14.96zm-14.84 0C.12 7.52 6.76.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.76 30.6.12 23.92.12 15.76zm1.92 0c0 7.12 5.76 12.92 12.92 12.92 7.2 0 12.96-5.8 12.96-12.92 0-7.2-5.76-13-12.96-13-7.16 0-12.92 5.8-12.92 13z"></path></svg>`,
            4:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-4" class="css-1a0aeb e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M25.8 15.76c0 1.92-.48 3.72-1.44 5.36L15 15.76V4.88c6 0 10.8 5.16 10.8 10.88zm-25.68 0C.12 7.52 6.76.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.76 30.6.12 23.92.12 15.76zm1.92 0c0 7.12 5.76 12.92 12.92 12.92 7.2 0 12.96-5.8 12.96-12.92 0-7.2-5.76-13-12.96-13-7.16 0-12.92 5.8-12.92 13z"></path></svg>`,
            5:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-5" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 15.76V4.92c6.56 0 10.8 5.72 10.8 10.84 0 3.8-2.12 7.4-5.36 9.36l-5.44-9.36zm-14.84 0C.12 7.52 6.72.84 14.96.84c8.2 0 14.92 6.68 14.92 14.92 0 8.12-6.72 14.84-14.92 14.84C6.72 30.6.12 23.88.12 15.76zm2 0c0 7.08 5.68 12.88 12.84 12.88s12.92-5.8 12.92-12.88c0-7.2-5.76-12.96-12.92-12.96S2.12 8.56 2.12 15.76z"></path></svg>`,
            6:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-6" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 4.88c6.44 0 10.8 5.2 10.8 10.84 0 5.92-4.8 11-10.8 10.84V4.88zM.12 15.72C.12 7.56 6.72.84 14.96.84c8.2 0 14.92 6.72 14.92 14.88 0 8.2-6.72 14.88-14.92 14.88C6.72 30.6.12 23.92.12 15.72zm2 0c0 7.16 5.8 12.92 12.84 12.92 7.16 0 12.92-5.76 12.92-12.92 0-7.12-5.76-12.88-12.92-12.88-7.04 0-12.84 5.76-12.84 12.88z"></path></svg>`,
            7:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-7" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 15.76V4.88c4.72 0 10.88 3.52 10.88 10.88 0 5.76-4.88 10.8-10.88 10.8-1.92 0-3.8-.56-5.32-1.48l5.32-9.32zm-14.84 0C.12 7.52 6.84.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.84 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.8 12.92 12.84 12.92 7.16 0 12.92-5.8 12.92-12.92 0-7.2-5.76-13-12.92-13-7.04 0-12.84 5.8-12.84 13z"></path></svg>`,
            8:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-8" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M14.96 15.76V4.88c4.24 0 10.84 3.2 10.84 10.88 0 5.76-4.92 10.92-10.84 10.8-3.88 0-7.48-2.12-9.36-5.44l9.36-5.36zm-14.84 0C.12 7.52 6.76.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.76 30.6.12 23.92.12 15.76zm1.92 0c0 7.12 5.76 12.92 12.92 12.92 7.2 0 12.96-5.8 12.96-12.92 0-7.2-5.76-13-12.96-13-7.16 0-12.92 5.8-12.92 13z"></path></svg>`,
            9:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-9" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M15 15.76V4.88c4.24 0 10.8 3.16 10.8 10.88 0 5.76-4.4 10.8-10.84 10.8-6.4 0-10.8-4.96-10.8-10.8H15zm-14.88 0C.12 7.52 6.76.84 14.96.84c8.24 0 14.92 6.68 14.92 14.92 0 8.16-6.68 14.84-14.92 14.84C6.76 30.6.12 23.92.12 15.76zm1.92 0c0 7.12 5.76 12.92 12.92 12.92 7.2 0 12.96-5.8 12.96-12.92 0-7.2-5.76-13-12.96-13-7.16 0-12.92 5.8-12.92 13z"></path></svg>`,
            10:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-10" class="css-1a0aeb e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M.12 15.76C.12 7.52 6.72.84 14.96.84c8.2 0 14.92 6.68 14.92 14.92 0 8.16-6.72 14.84-14.92 14.84C6.72 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.68 12.92 12.84 12.92s12.92-5.8 12.92-12.92c0-7.2-5.76-13-12.92-13s-12.84 5.8-12.84 13zm23.64 0c0 5.92-4.64 10.8-10.8 10.8-5.92 0-10.84-4.88-10.84-10.8 0-2.08.6-3.88 1.52-5.44l9.32 5.44V4.88c6.16 0 10.8 5.16 10.8 10.88z"></path></svg>`,
            11:`<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 31" type="taste-clock-11" class="css-ocvexr e16t9rkf0" width="30"  height="31" ><path fill-rule="evenodd" d="M.12 15.76C.12 7.52 6.72.84 14.96.84c8.2 0 14.92 6.68 14.92 14.92 0 8.16-6.72 14.84-14.92 14.84C6.72 30.6.12 23.92.12 15.76zm2 0c0 7.12 5.8 12.92 12.84 12.92 7.16 0 12.92-5.8 12.92-12.92 0-7.2-5.76-13-12.92-13-7.04 0-12.84 5.8-12.84 13zm12.84 0V4.88s10.56.32 10.8 10.88c.12 6.04-5 10.8-10.8 10.8-5.84 0-10.84-4.88-10.84-10.8 0-3.92 2.16-7.48 5.44-9.4l5.4 9.4z"></path></svg>`
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
        
                    case "Sweetness":
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
            let array=clockString.split(', T')
            
            let newArr=[]

            array.forEach(element => {
                let pair=element.split('Clock')[1]
                let obj={
                    name: switchName(pair.split(':')[0]),
                    value:parseInt(pair.split(':')[1])
                }
                newArr.push(obj)
    
                
            });

            return newArr
        },
    
        htmlClocks(clockString){
            if (clockString===""){
                return ""
            }

            let clocksArray=this.clocks(clockString)
            let htmlArray=[]

            clocksArray.forEach(clockObj=>{
                let clockString=`<div> ${this.svgClock[clockObj.value]} <p> ${clockObj.name}</p> </div>`
                htmlArray.push(clockString)
            })
    
            return(htmlArray.join(' '))
        }
                                  
    },

    assortment(assortment){
        let htmlOrder='<div class="orderStock"><p>Ordeleta</p></div>'
        if(assortment==="Orderletor"){
            return htmlOrder
        }else{
            return ""
        }
    },

    async getDrinks(pageNum){
        console.log('getDrinks, Fetching...')

        let url=`/api/drinksLimited?page=${pageNum}&priceMax=100&priceMin=50`
        console.log("🚀 ~ getDrinks ~ url", url)

        const response=await fetch(url)
        const data=await response.json()

        console.log('getDrinks, Done fetching')

        return data
    },

    async renderDrinks(products){
        console.log('rednerDrinks, Rendering...')

        products.forEach(product => {
            let apk=parseFloat(product.APK).toPrecision(3)
            let imgUrl=`https://product-cdn.systembolaget.se/productimages/${product.id}/${product.id}_200.png`

            let clocks=this.tasteClocks.htmlClocks(product.tasteClocks)

            let orderStock=this.assortment(product.assortment)

            let nameThin;
            if (product.nameThin===null) {
                nameThin=""
            } else {
                nameThin=product.nameThin
            }

            let usage;
            if (product.usage===null){
                usage=""
            }else{
                usage=product.usage
            }

            let taste;
            if (product.taste===null){
                taste=""
            }else{
                taste=product.taste
            }

            this.drinksContainer.insertAdjacentHTML('beforeend', `<a href="systembolaget.se"> 

                <figure>
                    ${orderStock}
                    <img alt="" src="${imgUrl}">
                </figure>
                
                <div class="titles">
                    <p>${product.category1}, ${product.category2}, ${product.category3}</p>
                    <h1>${product.nameBold}</h1>
                    <h2>${nameThin}</h2>
                </div>
            
                <div class="usageTasteContainer">
                    <p> ${taste} ${usage}
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

        console.log('Rendering done')
    },

    async init(pageNum){
        let data= await this.getDrinks(pageNum)
        this.renderDrinks(data)
    },

}

const loadMoreBtn={

    element:document.querySelector('#index > div > button.loadMore'),
    counts:1,

    init(){

        this.element.addEventListener('click', ()=>{
            this.counts+=1
            productArticles.init(this.counts)
        })

    }
    
}

productArticles.init(1)
loadMoreBtn.init()


class Filter{
    constructor(name, min, max){

    }

    //Rensar tidigare
    clear(){

    }

    //Uppdaterar params
    update(){

    }

    //hämtar produkter med nya params
    get(){

    }
}

class Slider{
    constructor({sliderSelector, minSelector, maxSelector}){
        this.inputs=[document.querySelector(minSelector), document.querySelector(maxSelector)]
        this.slider=document.querySelector(sliderSelector)

        let slider=this.slider
        noUiSlider.create(this.slider, {
            start: [20, 80],
            connect: true,
            tooltips:true,
        
            range: {
                'min': 0,
                'max': 100
            }
        });

        this.slider.noUiSlider.on('update', (values, handle)=>{
            this.inputs[handle].value=values[handle]
        })


        this.inputs.forEach((input, handle)=>{
            input.addEventListener('change', function () {
                slider.noUiSlider.setHandle(handle, this.value);
            });
        
            input.addEventListener('keydown', function (e) {
        
                let values = slider.noUiSlider.get();
                let value = Number(values[handle]);
        
                let steps = slider.noUiSlider.steps();
                let step = steps[handle];
        
                let position;
        
                // 13 is enter,
                // 38 is key up,
                // 40 is key down.
                switch (e.which) {
        
                    case 13:
                        slider.noUiSlider.setHandle(handle, this.value);
                        break;
        
                    case 38:
        
                        // Get step to go increase slider value (up)
                        position = step[1];
        
                        // false = no step is set
                        if (position === false) {
                            position = 1;
                        }
        
                        // null = edge of slider
                        if (position !== null) {
                            slider.noUiSlider.setHandle(handle, value + position);
                        }
        
                        break;
        
                    case 40:
        
                        position = step[0];
        
                        if (position === false) {
                            position = 1;
                        }
        
                        if (position !== null) {
                            slider.noUiSlider.setHandle(handle, value - position);
                        }
        
                        break;
                }
            });
        })
    }

    

}

const priceSlider= new Slider({
    sliderSelector:"#priceSlider", 
    minSelector:"#priceMin", 
    maxSelector: "#priceMax"})



//Har högsta och lägsta
//Query metod skicka params
//Välja en range


//Filter pris:
//Vilken har högt/lägst pris
//all artiklar ska raderas.
//Spara params-> 
//Fetch med para