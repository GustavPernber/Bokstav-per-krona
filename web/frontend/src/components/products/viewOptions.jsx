import React, { Component } from "react";

import { ReactComponent as FilterIcon } from "../../img/filter-settings.svg";
import { ReactComponent as SortArrows } from "../../img/sort-arrows.svg";
import { ReactComponent as SmallArticlesIcon } from "../../img/smallArticles.svg";
import { ReactComponent as BigArticlesIcon } from "../../img/bigArticles.svg";

class Sort extends Component {

	render() {
		return (
			<>
				<button onClick={this.props.mobileFilters} className="filter">
					Filtrera
					<FilterIcon></FilterIcon>
				</button>

				<div className="sort-container">
					<p className="sort-p">Sortera efter:</p>
					<form className="sort">
						<select onChange={this.props.sortUpdate} name="sort">
							<option value="apk">APK</option>
							<option value={"priceAsc"}>Lägsta pris</option>
							<option value={"alcAsc"}>Alkoholhalt</option>
						</select>
						<SortArrows></SortArrows>
					</form>
				</div>
			</>
		);
	}
}

class ArticleType extends Component {
	constructor(props) {
		super(props);

		this.changeViewSmall = this.changeViewSmall.bind(this);
		this.changeViewBig = this.changeViewBig.bind(this);

		this.state = {
			smallActive: false,
		};
	}

	changeViewSmall() {
		this.setState({
			smallActive: true,
		});

		this.props.viewTypeChange("small");
	}

	changeViewBig() {
		this.setState({
			smallActive: false,
		});
		this.props.viewTypeChange("big");
	}

	render() {
		return (
			<div className="article-type">
				<p>Välj vy:</p>
				<button
					onClick={this.changeViewSmall}
					className={`stripped ${
						this.state.smallActive ? "" : "notActive"
					}`}
				>
					<SmallArticlesIcon></SmallArticlesIcon>
				</button>

				<button
					onClick={this.changeViewBig}
					className={`bigArticles ${
						this.state.smallActive ? "notActive" : ""
					}`}
				>
					<BigArticlesIcon></BigArticlesIcon>
				</button>
			</div>
		);
	}
}

export default class ViewOptions extends Component {
	render() {
		return (
			<header className="searchOptions">
				<Sort sortUpdate={this.props.sortUpdate} mobileFilters={this.props.mobileFilters}></Sort>

				<ArticleType
					viewTypeChange={this.props.viewTypeChange}
				></ArticleType>
			</header>
		);
	}
}
