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
    render(){
        return(
            <div>
                <p>Välj vy:</p>
                <button className="stripped notActive">
                    <SmallArticlesIcon></SmallArticlesIcon>
                </button>
                <button className="bigArticles">
                    <BigArticlesIcon></BigArticlesIcon>
                </button>
            </div>
        )
    }
}

class ViewOptions extends Component {
    render() {
        return (
            <header className='searchOptions'>

                <Sort></Sort>
                
                <ArticleType></ArticleType>

            </header>
        );
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

    return(
        <a href='systembolaget.se'>
            <figure>
                <img src={imgUrl}/>
            </figure>

            <div className='titles'>
                <p>{props.product.category1}, {props.product.category2}, {props.product.category3}</p>
                <h1>{props.product.nameBold}</h1>
                <h2>{nameThin}</h2>
            </div>

            <div className='usageTasteContainer'>
                <p>{taste} {usage}</p>
            </div>
            
            <footer className='volumePrice'>
                <div>
                    <p><strong>APK: {apk}</strong></p>
                    <p>{props.product.volume}</p>
                    <p>{props.product.alcPercentage}</p>
                </div>
                <h3>{props.product.price} :-</h3>
            </footer>

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



    render() {
        return (
            <div>

                <ViewOptions></ViewOptions>
                <ProductsContainer></ProductsContainer>
                {/* <loadMoreBtn></loadMoreBtn> */}
            </div>
        )
    }
}
