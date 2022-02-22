import React, { Component } from 'react'
import {ProductsContainer, LoadMoreBtn} from './products'
import ViewOptions from './viewOptions'

export default class Products extends Component {

    constructor(props) {
      super(props)
        
      this.handleViewChange=this.handleViewChange.bind(this)
      this.handleLoadMore=this.handleLoadMore.bind(this)

      this.state={
        pageNum:1,
        isSmall:false
      }
    }

    async handleLoadMore(){
        await this.setState((state)=>({
            pageNum:state.pageNum+1
        }))
        
        
        this.productContainer.getProducts()
        
    }

    handleViewChange(type){
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
                <ProductsContainer pageNum={this.state.pageNum} ref={instance=>{this.productContainer=instance}} filters={this.props.filters} isSmall={this.state.isSmall}></ProductsContainer>
                <LoadMoreBtn loadMore={this.handleLoadMore}></LoadMoreBtn>
            </div>
        )
    }
}