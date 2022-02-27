import React, { Component } from "react";
import Filters from "./components/filter";
import Products from "./components/products/main";

class Header extends Component {
	constructor(props) {
	  super(props)
		this.handleHeaderClick=this.handleHeaderClick.bind(this)
	  this.state = {
		active:'all'
	  }
	}

	handleHeaderClick(e, filter){
		const className=e.target.className
		this.setState({
			active:className
		})
		this.props.updateFilter(filter)
	}

	render() {
		return (
			<header id="header">
				<nav>
					<ul>
						<li>
							<button onClick={(e)=>this.handleHeaderClick(e, 'all')} className={`all ${this.state.active==="all " ? "active" : ""}`}>
								<span>Visa alla</span>
							</button>
						</li>
						<li>
							<button  onClick={(e)=>this.handleHeaderClick(e, 'vin')} className={`wine ${this.state.active==="wine " ? "active" : ""}`}>
								<span>Vin</span>
							</button>
						</li>
						<li>
							<button  onClick={(e)=>this.handleHeaderClick(e, 'öl')} className={`beer ${this.state.active==="beer " ? "active" : ""}`}>
								<span>Öl</span>
							</button>
						</li>
						<li>
							<button  onClick={(e)=>this.handleHeaderClick(e, 'sprit')} className={`liquor ${this.state.active==="liquor " ? "active" : ""}`} >
								<span>Sprit</span>
							</button>
						</li>
						<li>
							<button  onClick={(e)=>this.handleHeaderClick(e, 'cider')} className={`cider ${this.state.active==="cider " ? "active" : ""}`} >
								<span>Cider <p id="blanddryck">&nbsp;& Blanddryck</p></span>
							</button>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}

class Main extends React.Component {
	constructor(props) {
		super(props);
		this.handleLoadMore = this.handleLoadMore.bind(this);
		this.handleMobileShowFilters=this.handleMobileShowFilters.bind(this)
		
		this.state = {
			filters: null,
			showMobile:false
		};
	}

	handleLoadMore(filters) {
		this.setState(()=>({

			filters: {...filters}
   		}))

	}

	handleMobileShowFilters(){
		this.setState({
			showMobile:!this.state.showMobile
		})
	}
  
	render() {
		return (
			<main id="index">
				<Filters changeMobileShow={this.handleMobileShowFilters} showMobile={this.state.showMobile} loadMore={this.handleLoadMore}></Filters>

				<Products catFilter={this.props.catFilter} mobileFilters={this.handleMobileShowFilters} filters={this.state.filters}></Products>
			</main>
		);
	}
}

class App extends Component {

	constructor(props) {
	  super(props)
	  this.handleHeaderChange=this.handleHeaderChange.bind(this)

	  this.state={
		  catFilter:null,

	  }
	}

	handleHeaderChange(name){
		if(name!== this.state.catFilter){
			console.log('in app update  cat filter')
			this.setState({
				
				catFilter:name
			})
		}

	}

	render(){

		return (
			<div id="app">
				<Header updateFilter={this.handleHeaderChange}></Header>
				<Main catFilter={this.state.catFilter} ></Main>
			</div>
		);
	}
}

export default App;
