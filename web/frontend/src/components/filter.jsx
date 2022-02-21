import React, { Component } from 'react'
import {ReactComponent as CollapseArrow} from '../img/collapse-arrow.svg';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { LoadMoreBtn } from './products/products';

class DropHeader extends Component {

    render(){
      return (
        <div onClick={this.props.onClick} className='dropHeader'>
          <p>{this.props.title}</p>
          <CollapseArrow></CollapseArrow>
        </div>
      )
  
    }
    
  }
  
class Slider extends Component{
constructor(props) {
    super(props);


    this.minVal=this.props.filter.minVal
    this.maxVal=this.props.filter.maxVal

    this.range={min:this.minVal, max:this.maxVal}
    this.min=this.props.filter.minTag
    this.max=this.props.filter.maxTag

    this.handleSlider=this.handleSlider.bind(this)
    this.handleInputBlur=this.handleInputBlur.bind(this)
    this.handleInputKey=this.handleInputKey.bind(this)
    this.handleInputChange=this.handleInputChange.bind(this)

    this.state={
    [this.min]:this.minVal,
    [this.max]:this.maxVal,
    //TODO fixa start värden
    start:[this.minVal, this.maxVal]
    }
}


handleSlider(value){
    this.setState({
    [this.min]:value[0],
    [this.max]:value[1],
    })

    this.props.update(parseFloat(this.state[this.min]) ,parseFloat(this.state[this.max]) )
}

handleInputBlur(e){
    const value=e.target.value

    if (value>this.maxVal || value<this.minVal) {

    this.setState(()=>({
        [this.min]:this.minVal,
        [this.max]:this.maxVal,
        start:[this.minVal, this.maxVal]

    }))

    }else if(value>this.state[this.max] || value<this.state[this.min] ){
    this.setState({
        [this.min]:value,
        [this.max]:value,
    })

    this.setState((state, props)=>({
        start:[state[this.min], state[this.max]]
    }))

    //Call update function
    this.props.update(this.state[this.min], this.state[this.max])
    } else {

    this.setState((state, props)=>({
        [e.target.name]: parseFloat(value),
    }))
    
    this.setState((state, props)=>({
        start:[state[this.min], state[this.max]]
    }))

    //Call update
    this.props.update(this.state[this.min], this.state[this.max])
    }

    
}

handleInputKey(e){
    if(e.key=== 'Enter'){
    this.handleInputBlur(e)
    }
}

handleInputChange(e){

    const value=parseFloat(e.target.value)
    this.setState((state, props)=>({
    [e.target.name]:value
    }))

}

render(){
    return(
        <div className='sliderContainer'>
            <input
            type="number"
            name={this.min}
            value={this.state[this.min]}

            onKeyUp={this.handleInputKey}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            />
            <input
            type="number"
            name={this.max}
            value={this.state[this.max]}

            onKeyUp={this.handleInputKey}
            onBlur={this.handleInputBlur}
            onChange={this.handleInputChange}
            />

            <Nouislider onSlide={this.handleSlider} step={this.props.filter.steps} start={this.state.start} range={this.range}></Nouislider>
        </div>
    )
}
}

class SliderFilter extends Component{
constructor(props) {
    super(props);

    this.state={
    show:"lol"
    }
}

render(){
    return(
    <div className='filterWrapper'>
        <DropHeader title={this.props.filter.title}></DropHeader>
        <Slider update={this.props.update} filter={this.props.filter}></Slider>
    </div>
    )
}

}

export default class Filters extends Component {

    constructor(props){
        super(props)
        this.handleSliderUpdate=this.handleSliderUpdate.bind(this)
        this.handleLoadMore=this.handleLoadMore.bind(this)

        this.state={
        hasChanged:false,

        filters:{
            slideFilters:[
            {
                maxTag: "alcMax",
                minTag:"alcMin",

                title:"Alkoholhalt",

                maxVal:90,    
                minVal:0,

                minPrevious:0,
                maxPrevious:90,

                minCurrent:0,
                maxCurrent:90,

                steps:0.5,

            },
            {
                maxTag: "priceMax",
                minTag:"priceMin",

                title:"Pris",

                maxVal:400000,    
                minVal:0,

                minPrevious:0,
                maxPrevious:400000,

                minCurrent:0,
                maxCurrent:400000,

                steps:1,

            },
            {
                maxTag: "volumeMax",
                minTag:"volumeMin",

                title:"Volym",

                maxVal:40000,    
                minVal:0,

                minPrevious:0,
                maxPrevious:40000,

                minCurrent:0,
                maxCurrent:40000,

                steps:1,

            },
        ]}
        
        }
    }

    handleSliderUpdate(index, min, max){
        let newFilter=this.state.filters.slideFilters.slice()

        newFilter[index].minCurrent=min
        newFilter[index].maxCurrent=max

        this.setState(()=>({
        slideFilters:newFilter
        }))

        //Checka alla
        if(min!==this.state.filters.slideFilters[index].minPrevious || max!==this.state.filters.slideFilters[index].maxPrevious){
            this.setState(()=>({
                hasChanged:true
            }))
        }else{
            this.setState(()=>({
                hasChanged:false
        }))

        }


    }

    handleLoadMore(){

        const newSlideFilters=this.state.filters.slideFilters.slice()
        
        this.props.loadMore(this.state.filters)
        newSlideFilters.map((filter,i)=>{
            filter["minPrevious"]=filter["minCurrent"]
            filter["maxPrevious"]=filter["maxCurrent"]
        })

    }

    render() {
        return (
        <aside className='filters'>
            <h1>Filtrera</h1>

            {this.state.filters.slideFilters.map((filter, i)=>{

            return(
                <SliderFilter update={(min, max)=> this.handleSliderUpdate(i, min, max)} className='filterWrapper' 
                key={filter.title} 
                filter={filter} />
            )
            })}
            {this.state.hasChanged ? <button onClick={this.handleLoadMore}>Filterera</button> : 'lol' }
            
            

        </aside>
        )
    }
}



