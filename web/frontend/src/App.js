import React, { Component } from 'react'
import {ReactComponent as CollapseArrow} from './img/collapse-arrow.svg';

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

class SliderFilter extends Component{
  constructor(props) {
    super(props);
    
    this.state={
      show:"lol"
    }
  }
  
  render(){
    return(
      <div>
        <p onClick={()=> this.setState({show:"lol2"})}>
          click
        </p>
        <p>
          {this.state.show}
        </p>
      </div>
    )
  }

}



class Filters extends Component {
  constructor(props){
    super(props)
    
    this.state={
      slideFilters:[
        { max: "alcMax",
          min:"alcMin",
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
