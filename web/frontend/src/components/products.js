import React, { Component } from 'react'
import {ReactComponent as FilterIcon} from '../img/filter-settings.svg';
import {ReactComponent as SortArrows} from '../img/sort-arrows.svg';
import {ReactComponent as SmallArticlesIcon} from '../img/smallArticles.svg';
import {ReactComponent as BigArticlesIcon} from '../img/bigArticles.svg';


class Sort extends Component {
  render() {
    return (
      <>
        <button className='filter'>
            Filtrera
            <FilterIcon></FilterIcon>
        </button>

        <form className='sort'>
            <select name='sort'>
                <option> Sortera efter</option>
            </select>
            <SortArrows></SortArrows>
        </form>
      </>
    )
  }
}

class ArticleType extends Component{
    constructor(props) {
        super(props)
        
        this.changeViewSmall=this.changeViewSmall.bind(this)
        this.changeViewBig=this.changeViewBig.bind(this)

        this.state = {
            smallActive:true
        }
    }

    changeViewSmall(){
        this.setState({
            smallActive: false
        })
    }

    changeViewBig(){
        this.setState({
            smallActive: true
        })
    }

    // onClick={this.props.viewTypeChange}
    render(){
        return(
            <div>
                <p>Välj vy:</p>
                <button onClick={this.changeViewSmall} className={`stripped ${this.state.smallActive ? "notActive" : ""}`}>
                    <SmallArticlesIcon></SmallArticlesIcon>
                </button>

                <button onClick={this.changeViewBig} className={`bigArticles ${this.state.smallActive ? "" : "notActive"}`}>
                    <BigArticlesIcon></BigArticlesIcon>
                </button>
            </div>
        )
    }
}

class ViewOptions extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <header className='searchOptions'>

                <Sort></Sort>
                
                <ArticleType viewTypeChange={this.props.viewTypeChange}></ArticleType>

            </header>
        );
    }
}

class TasteClocks extends Component{
    constructor(props) {
        super(props);
        
        this.clockString=this.props.clockString
    }

    clockArray(clockString){
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
    }

    render(){
        if(this.clockString===""){
            return (<aside className='clocks'></aside>)
        }
        let clockArray=this.clockArray(this.clockString)
        return(
            <aside className='clocks'>
                {clockArray.map((clockObj)=>{
                    return(
                        <div key={clockObj.name}> 
                            <img  src={`../img/clocks/clock-${clockObj.value}.svg`} alt="Taste clock"></img>
                            <p>{clockObj.name}</p>
                        </div>
                    )
                })}
            </aside>
        )
    }
    
}

function Product(props){
    let imgUrl=`https://product-cdn.systembolaget.se/productimages/${props.product.id}/${props.product.id}_200.png`
    let apk=parseFloat(props.product.APK).toPrecision(3)

    let nameThin;
    if (props.product.nameThin===null) {
        nameThin=""
    } else {
        nameThin=props.product.nameThin
    }

    let usage;
    if (props.product.usage===null){
        usage=""
    }else{
        usage=props.product.usage
    }

    let taste;
    if (props.product.taste===null){
        taste=""
    }else{
        taste=props.product.taste
    }

    let productUrlName=`${props.product.nameBold.replace(/\s+/g, '-').toLowerCase()}-${props.product.productNumber}`

    let productUrl=`https://www.systembolaget.se/produkt/${props.product.category1}/${productUrlName}`

    let vintage=""
    if(props.product.vintage!=null){
        vintage=`, ${props.product.vintage}`
    }

    return(
        <a href={productUrl}>
            <figure>
                <img src={imgUrl} alt="Produktbild"/>
            </figure>

            <div className='titles'>
                <p>{props.product.category1}, {props.product.category2}, {props.product.category3}</p>
                <h1>{props.product.nameBold}</h1>
                <h2>{nameThin} {vintage}</h2>
            </div>

            <div className='usageTasteContainer'>
                <p>{taste} {usage}</p>
            </div>
            
            <footer className='volumePrice'>
                <div>
                    <p><strong>APK: {apk}</strong></p>
                    <p>{props.product.volume} ml</p>
                    <p>{props.product.alcPercentage}%</p>
                </div>
                <h3>{props.product.price} :-</h3>
            </footer>

            <TasteClocks clockString={props.product.tasteClocks}></TasteClocks>

        </a>
    )
    
}

class ProductsContainer extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         products: []
      }
      
    }

    componentDidMount(){
        this.getProducts()
    }

    async getProducts(){
        console.log('Fetching...')
        let url=`http://localhost:4567/api/drinksLimited?page=1&priceMax=100&priceMin=50`
        const response=await fetch(url)
        const data=await response.json()

        console.log('Done fetching')
        // let value = [{ key:'lol'}]
        
        this.setState({
            products:data
        })
        
    }

    render(){
        console.log('Products:', this.state.products)

        return(
            <section className='drinksContainer'>
                {this.state.products.map((product, i)=>{
                    return (<Product key={product.id} product={product}></Product>)
                })}

            </section>
        )
    }
}

export default class Products extends Component {

    constructor(props) {
      super(props)
        
      this.handleViewChange=this.handleViewChange.bind(this)

    }

    handleViewChange(){
        console.log('change')
    }

    render() {
        return (
            <div>
                <ViewOptions viewTypeChange={this.handleViewChange}></ViewOptions>
                <ProductsContainer></ProductsContainer>
                {/* <loadMoreBtn></loadMoreBtn> */}
            </div>
        )
    }
}
