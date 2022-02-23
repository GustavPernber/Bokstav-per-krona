import React, { Component } from "react";
import Filters from "./components/filter";
import Products from "./components/products/main";

class Header extends Component {
	render() {
		return (
			<header id="header">
				<nav>
					<ul>
						<li>
							<button className="wine">
								<span>Vin</span>
							</button>
						</li>
						<li>
							<button className="beer">
								<span>Öl</span>
							</button>
						</li>
						<li>
							<button className="liquor">
								<span>Sprit</span>
							</button>
						</li>
						<li>
							<button className="cider">
								<span>Cider & Blanddryck</span>
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
		this.setState((state, props)=>({

			filters: {...filters}
    }))

	}

	handleMobileShowFilters(){
		console.log('show filters')
		this.setState({
			showMobile:!this.state.showMobile
		})
	}
  
	render() {
		return (
			<main id="index">
				<Filters showMobile={this.state.showMobile} loadMore={this.handleLoadMore}></Filters>

				<Products mobileFilters={this.handleMobileShowFilters} filters={this.state.filters}></Products>
			</main>
		);
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
