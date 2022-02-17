import React, { Component } from 'react'
// import React from 'react'
import {ReactComponent as CollapseArrow} from './img/collapse-arrow.svg';
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";

class Header extends Component{
  render(){
    return(
      <header id="header">
        <nav>
          <ul>
            <li>
              <button className="wine"><span>Vin</span></button>
            </li>
            <li>
              <button className="beer"><span>Öl</span></button>
            </li>
            <li>
              <button className="liqour"><span>Sprit</span></button>
            </li>
            <li>
              <button className="cider">
                <span>Cider & Blanddryck</span>
              </button>
            </li>
          </ul>
        </nav>
		</header>
    )
  }


}

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
    console.log(this.range)
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
    
    console.log('state:', this.state)
  }
  

  handleSlider(value){
    this.setState({
      [this.min]:value[0],
      [this.max]:value[1]

    })
  }

  handleInputBlur(e){
    const value=e.target.value

    this.setState((state, props)=>({
      [e.target.name]: parseFloat(value),
    }))

    this.setState((state, props)=>({
      start:[state[this.min], state[this.max]]
    }))


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
            {/* <p>{this.props.filter}</p> */}
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
        <Slider filter={this.props.filter}></Slider>
        {/* <NewSlider filter={this.props.filter} range={{min:0, max:100}} start={[20, 80]}></NewSlider> */}
      </div>
    )
  }

}



class Filters extends Component {
  constructor(props){
    super(props)
    
    this.state={
      slideFilters:[
        { maxVal:70,
          minVal:2,

          steps:0.5,

          maxTag: "alcMax",
          minTag:"alcMin",

          title:"Alkoholhalt",
        }
      ]
    }
  }

  render() {
    return (
      <aside className='filters'>
        <h1>Filtrera</h1>
        {console.log(this.state)}

        {this.state.slideFilters.map((filter, i)=>{
          console.log(filter
          )
          return(
            <SliderFilter className='filterWrapper' 
            key={filter.title} 
            filter={filter} />
          )
        })}
        

      </aside>
    )
  }
}



class Main extends React.Component{
  render(){
    return(
      <main id="index">
        <Filters>

        </Filters>

        <div>
          {/* <SearchOptions></SearchOptions>
          <DrinksContainer></DrinksContainer>
          <LoadMoreBtn></LoadMoreBtn> */}
        </div>
      </main>
    )
  }
}

function App() {
  return (
    <div id="app">
      <Header></Header>
      <Main></Main>
    </div>
    
  );
}

export default App;
