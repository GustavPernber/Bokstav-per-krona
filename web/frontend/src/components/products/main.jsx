import React, { Component } from 'react'
import {ProductsContainer, LoadMoreBtn} from './products'
import ViewOptions from './viewOptions'

export default class Products extends Component {

    constructor(props) {
      super(props)
        
      this.handleViewChange=this.handleViewChange.bind(this)

      this.state={
        isSmall:false
      }
    }

    handleViewChange(type){
        console.log(type)
        if (type==="small") {
            this.setState({
                isSmall:true
            })
        } else {
            this.setState({
                isSmall:false
            })
        }
    }

    render() {
        return (
            <div>
                <ViewOptions viewTypeChange={this.handleViewChange}></ViewOptions>
                <ProductsContainer ref={instance=>{this.productContainer=instance}} isSmall={this.state.isSmall}></ProductsContainer>
                <LoadMoreBtn loadMore={()=>this.productContainer.getProducts()}></LoadMoreBtn>
            </div>
        )
    }
}