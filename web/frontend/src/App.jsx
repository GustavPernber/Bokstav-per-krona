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

		this.state = {
			filters: null,
		};
	}

	handleLoadMore(filters) {
		this.setState((state, props)=>({

			filters: {...filters}
    }))

	}

  
	render() {
		return (
			<main id="index">
				<Filters loadMore={this.handleLoadMore}></Filters>

				<Products filters={this.state.filters}></Products>
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
