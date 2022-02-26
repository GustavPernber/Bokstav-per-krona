import React, { Component } from "react";
import { ProductsContainer, LoadMoreBtn } from "./products";
import ViewOptions from "./viewOptions";

export default class Products extends Component {
	constructor(props) {
		super(props);

		this.handleViewChange = this.handleViewChange.bind(this);
		this.handleLoadMore = this.handleLoadMore.bind(this);
		this.sortUpdate = this.sortUpdate.bind(this);
		this.handleFetchFail = this.handleFetchFail.bind(this);
		this.handleFetchSucces = this.handleFetchSucces.bind(this);
		this.handleNoProducts = this.handleNoProducts.bind(this);

		this.state = {
			pageNum: 1,
			isSmall: false,
			sortBy: "apk",
			fetchFail: false,
			loading: true,
			noProducts: false,
		};
	}

	async handleLoadMore() {
		await this.setState((state) => ({
			pageNum: state.pageNum + 1,
			loading: true,
		}));

		this.productContainer.loadMore();
	}

	async sortUpdate(e) {
		await this.setState(() => ({
			sortBy: e.target.value,
			loading: true,
		}));
	}

	//On filter update
	componentDidUpdate(prevProps) {
		if (prevProps.filters != this.props.filters) {
			this.setState(() => ({
				pageNum: 1,
			}));
		}
	}

	handleViewChange(type) {
		if (type === "small") {
			this.setState({
				isSmall: true,
			});
		} else {
			this.setState({
				isSmall: false,
			});
		}
	}

	handleFetchFail() {
		this.setState({
			fetchFail: true,
			loading: false,
			noProducts: false,
		});
	}

	handleFetchSucces() {
		this.setState({
			fetchFail: false,
			loading: false,
			noProducts: false,
		});
	}

	handleNoProducts() {
		this.setState({
			fetchFail: false,
			loading: false,
			noProducts: true,
		});
	}

	render() {
		return (
			<div>
				<ViewOptions
					sortUpdate={this.sortUpdate}
					mobileFilters={this.props.mobileFilters}
					viewTypeChange={this.handleViewChange}
				></ViewOptions>
				<ProductsContainer
					catFilter={this.props.catFilter}

					noProductsFound={this.handleNoProducts}
					fetchSucces={this.handleFetchSucces}
					fetchHasFailed={this.handleFetchFail}
					fetchFail={this.state.fetchFail}
					sortBy={this.state.sortBy}
					pageNum={this.state.pageNum}
					ref={(instance) => {
						this.productContainer = instance;
					}}
					filters={this.props.filters}
					isSmall={this.state.isSmall}
				></ProductsContainer>



				{this.state.loading ? "loading" : ""}

				{this.state.fetchFail ? (
					<div className="fetch-err-container">
						<p>
							Ajdå något gick fel.... <a href="/">Försök igen</a>
						</p>
					</div>
				) : (
					""
				)}

				{this.state.noProducts ? (
					<div className="fetch-err-container">
						<p>
							Inga produkter kunde hittas. <a href="/">Återställ filter</a>
						</p>
					</div>
				) : (
					""
				)}

				{this.state.loading === false &&
				this.state.fetchFail === false &&
				this.state.noProducts === false ? (
					<LoadMoreBtn loadMore={this.handleLoadMore}></LoadMoreBtn>
				) : (
					""
				)}
			</div>
		);
	}
}
