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

function DropFilterSlider(props){

  return (
    <div className='dropContainer show'>
      <ul>
        <li>{props.isShow}</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
      </ul>
    </div>    
  )
    
}

// class DropFilterSlider extends Component {
//   constructor(props) {
//     super(props);
    
//   }
  

// }


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
    this.minInput=this.props.filter.minTag
    this.maxInput=this.props.filter.maxTag

    this.handleSlider=this.handleSlider.bind(this)
    this.handleInput=this.handleInput.bind(this)

    this.state={
      minVal:this.props.start[0],
      maxVal:this.props.start[1]
    }
  }
  
  handleInput(e){
    console.log(e)
  }

  handleSlider(value){
    this.setState({
      minVal:value[0],
      maxVal:value[1]
    })
  }

  render(){
    return(
        <div className='sliderContainer'>
            {/* <p>{this.props.filter}</p> */}
            <input
              name={this.minInput}
              value={this.state.minVal}
              onChange={this.handleInput}
            />
            {/* <input
              name={this.maxInput}
              value={this.state.maxVal}
            /> */}

            <Nouislider onSlide={this.handleSlider} range={this.props.range} start={this.props.start} ></Nouislider>
        </div>
    )
  }
}
// noUiSlider.create(this.slider, {
//   start: [20, 80],
//   connect: true,
//   tooltips:true,

//   range: {
//       'min': 0,
//       'max': 100
//   }
// });
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
        <Slider filter={this.props.filter} range={{min:0, max:100}} start={[20, 80]}></Slider>
      </div>
    )
  }

}



class Filters extends Component {
  constructor(props){
    super(props)
    
    this.state={
      slideFilters:[
        { maxTag: "alcMax",
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
