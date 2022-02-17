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


class ProductsContainer extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         products: []
      }
      this.getProducts()
    }

    async setProducts(){
        const value=[{ key:'lol'}]
        this.setState({
            products:value
        })
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
        console.log(this.state.products)
        return(
            <section className='drinksContainer'>
                {/* <p>{this.state.products}</p> */}
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
