import React, { Component} from 'react'


class LoadMoreBtn extends Component {
    render() {
        return (
            <button onClick={()=>this.props.loadMore()} className='loadMore'>
                <p>Visa fler</p>
            </button>
        );
    }
}


class TasteClocks extends Component{

    switchName(name){
        switch (name) {
            case "TasteClockBody":
                return "Fyllighet"
            case "TasteClockRoughness":
                return "Strävhet"
            case "TasteClockFruitacid":
                return "Fruktsyra"

            case "TasteClockSweetness":
                return "Sötma"

            case "TasteClockBitter":
                return "Beska"
        
            default:
                return `NOT KNOWN ${name}`
        }
    }

    render(){

        return(
            <aside className='clocks'>
                {this.props.clockList.map((clockObj)=>{
                    return(
                        <div key={clockObj.key}> 
                            <img  src={`../img/clocks/clock-${clockObj.value}.svg`} alt="Taste clock"></img>
                            <p>{this.switchName(clockObj.key)}</p>
                        </div>
                    )
                })}
            </aside>
        )
    }

}

function Product(props){
    let imgUrl=`https://product-cdn.systembolaget.se/productimages/${props.product.productId}/${props.product.productId}_100.png`
    let apk=parseFloat(props.product.apk).toPrecision(4)

    let nameAndVintage;
    if (props.product.vintage===null && props.product.nameThin===null) {
        nameAndVintage=""
    } else if(props.product.nameThin===null) {
        nameAndVintage=props.product.vintage
    }else if(props.product.vintage===null){
        nameAndVintage=props.product.nameThin
    }else{
        nameAndVintage=`${props.product.nameThin}, ${props.product.vintage}`
    }

    
    let productUrlName=`${props.product.nameBold.replace(/\s+/g, '-').toLowerCase()}-${props.product.productNumber}`

    let productUrl=`https://www.systembolaget.se/produkt/${props.product.cat1}/${productUrlName}`

    return(
        <a href={productUrl } className={props.product.assortmentText!=="Ordervara" ? "" : "order-stock-product"}>
            <figure>
                {/* {props.product.assortmentText!=="Ordervara" ? "" : 
                <div className='orderStock'><p>Ordervara</p></div> } */}

                <img src={imgUrl} alt="Produktbild"/>
            </figure>

            <div className='titles'>
                <p>{props.product.cat1}, {props.product.cat2}, {props.product.cat3}</p>
                <h1>{props.product.nameBold}</h1>
                <h2>{nameAndVintage}</h2>
            </div>

            <div className='usageTasteContainer'>
                <p>{props.product.taste} {props.product.usage}</p>
            </div>
            
            <footer className='volumePrice'>
                <div>
                    <p><strong>APK: {apk}</strong></p>
                    <p>{props.product.volume} ml</p>
                    <p>{props.product.alcPercentage}%</p>
                </div>
                <h3>{props.product.price} :-</h3>
            </footer>

            <TasteClocks clockList={props.product.tasteClocks}></TasteClocks>

            {props.product.assortmentText!=="Ordervara" ? "" : 
                
                <div className='order-stock-flag'>
                <div className='order-p-container'><p>Ordervara</p>
                </div>
                </div>
            }

        </a>
    )
    
}


//FETCH
class ProductsContainer extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        products: [],
        url:""
      }
      
    }

    //Körs på direkten en gång
    componentDidMount(){
        this.getProducts()
    }

    //körs när filter uppdateras
    async componentDidUpdate(prevProps, prevState){
        if (this.props.filters!==null && prevProps.filters !== this.props.filters) {

            let urlArr=[]
            this.props.filters.slideFilters.forEach((filter, i)=>{
                urlArr.push(`${filter.minTag}=${filter.minCurrent}&${filter.maxTag}=${filter.maxCurrent}`)
            })
            urlArr.push(`sortBy=${this.props.sortBy}`)
            await this.setState(()=>({
                products:[],
                url:urlArr.join('&')
            }))
            
            this.getProducts(true)
            
            
        }else if(this.props.sortBy!==prevProps.sortBy){
            
            
            let urlArr=[]
            if(this.props.filters!==null){

                this.props.filters.slideFilters.forEach((filter, i)=>{
                    urlArr.push(`${filter.minTag}=${filter.minCurrent}&${filter.maxTag}=${filter.maxCurrent}`)
                })
            }
            urlArr.push(`sortBy=${this.props.sortBy}`)

            await this.setState(()=>({
                products:[],
                url:urlArr.join('&')
            }))

            this.getProducts()
        
        }
        
    }

    loadMore(){
        this.getProducts()
    }

    



    async getProducts(firstPage=false){
        console.log('Fetching...')

        try {

            const pageNum= firstPage ? 1 : this.props.pageNum

            let orderStock="showOrderStock=true"

            if(this.props.filters!==null){

                orderStock= this.props.filters.showOrderStock.value ? "showOrderStock=true" : "showOrderStock=false"
            }

            // console.log(pageNum)

            let url=`http://localhost:8080/api/productsLimited?page=${pageNum}&${orderStock}&${this.state.url}`
            // let url=`${window.location}api/productsLimited?page=${this.props.pageNum}&${queries}`
            console.log(url)
            const response=await fetch(url)
            const data=await response.json()
            console.log('Done fetching: ', data)
            
            let newData= this.state.products.concat(data)
            this.setState({
                products:newData
            })
        } catch (error) {
            console.error(error)
            console.log('Failed to fetch from server!')
        }
        
    }
    
    
    render(){
        return(
            <section className={`drinksContainer ${this.props.isSmall ? "strippedArticles" : ""}`}>
                {this.state.products.map((product, i)=>{
                    return (<Product key={product.productId} product={product}></Product>)
                })}

            
            </section>
        )
    }
}

export {ProductsContainer, LoadMoreBtn}