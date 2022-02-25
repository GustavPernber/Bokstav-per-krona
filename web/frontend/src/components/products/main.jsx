import React, { Component } from 'react'
import {ProductsContainer, LoadMoreBtn} from './products'
import ViewOptions from './viewOptions'

export default class Products extends Component {

    constructor(props) {
      super(props)
        
      this.handleViewChange=this.handleViewChange.bind(this)
      this.handleLoadMore=this.handleLoadMore.bind(this)
        this.sortUpdate=this.sortUpdate.bind(this)
        
      this.state={
        pageNum:1,
        isSmall:false,
        sortBy:"apk"
      }
    }

    async handleLoadMore(){
        await this.setState((state)=>({
            pageNum:state.pageNum+1
        }))
        
        
        this.productContainer.getProducts()
        
    }

    sortUpdate(e){
        this.setState({
            sortBy: e.target.value
        })
    }

    //On filter update
    componentDidUpdate(prevProps){

        if(prevProps.filters != this.props.filters){
            this.setState(()=>({
                pageNum:1
            }))
        }
        
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
                <ViewOptions sortUpdate={this.sortUpdate} mobileFilters={this.props.mobileFilters} viewTypeChange={this.handleViewChange}></ViewOptions>
                <ProductsContainer sortBy={this.state.sortBy} pageNum={this.state.pageNum} ref={instance=>{this.productContainer=instance}} filters={this.props.filters} isSmall={this.state.isSmall}></ProductsContainer>
                <LoadMoreBtn loadMore={this.handleLoadMore}></LoadMoreBtn>
            </div>
        )
    }
}