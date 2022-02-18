import React, { Component } from 'react'
import Filters from './components/filter'
import Products from './components/products'

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


class Main extends React.Component{
  render(){
    return(
      <main id="index">
        <Filters>
        </Filters>

        <Products>
        </Products>
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