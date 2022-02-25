import React, { Component } from "react";
import { ReactComponent as CollapseArrow } from "../img/collapse-arrow.svg";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import { LoadMoreBtn } from "./products/products";

class DropHeader extends Component {
	render() {
		return (
			<div onClick={this.props.onClick} className="dropHeader">
				<p>{this.props.title}</p>
				<CollapseArrow></CollapseArrow>
			</div>
		);
	}
}

class Slider extends Component {
	constructor(props) {
		super(props);

		this.minVal = this.props.filter.minVal;
		this.maxVal = this.props.filter.maxVal;

		this.range = { min: this.minVal, max: this.maxVal };
		this.min = this.props.filter.minTag;
		this.max = this.props.filter.maxTag;

		this.handleSlider = this.handleSlider.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.handleInputKey = this.handleInputKey.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);

		this.state = {
			[this.min]: this.minVal,
			[this.max]: this.maxVal,
			//TODO fixa start värden
			start: [this.minVal, this.maxVal],
		};
	}

	handleSlider(value) {
		this.setState({
			[this.min]: value[0],
			[this.max]: value[1],
		});

		this.props.update(
			parseFloat(this.state[this.min]),
			parseFloat(this.state[this.max])
		);
	}

	handleInputBlur(e) {
		const value = e.target.value;

		if (value > this.maxVal || value < this.minVal) {
			this.setState(() => ({
				[this.min]: this.minVal,
				[this.max]: this.maxVal,
				start: [this.minVal, this.maxVal],
			}));
		} else if (
			value > this.state[this.max] ||
			value < this.state[this.min]
		) {
			this.setState({
				[this.min]: value,
				[this.max]: value,
			});

			this.setState((state, props) => ({
				start: [state[this.min], state[this.max]],
			}));

			//Call update function
			this.props.update(this.state[this.min], this.state[this.max]);
		} else {
			this.setState((state, props) => ({
				[e.target.name]: parseFloat(value),
			}));

			this.setState((state, props) => ({
				start: [state[this.min], state[this.max]],
			}));

			//Call update
			this.props.update(this.state[this.min], this.state[this.max]);
		}
	}

	handleInputKey(e) {
		if (e.key === "Enter") {
			this.handleInputBlur(e);
		}
	}

	handleInputChange(e) {
		const value = parseFloat(e.target.value);
		this.setState((state, props) => ({
			[e.target.name]: value,
		}));
	}

	render() {
		return (
			<div className={`dropContainer ${this.props.show ? "show" : ""}`}>
				<div className="sliderContainer">
					<div className="inputs-wrapper">
						<div className="range-input-wrapper">
							<p>Från</p>
							<input
								type="number"
								name={this.min}
								value={this.state[this.min]}
								onKeyUp={this.handleInputKey}
								onBlur={this.handleInputBlur}
								onChange={this.handleInputChange}
							/>
							<p>{this.props.filter.unit}</p>
						</div>
						<div className="range-input-wrapper">
							<p>Till</p>
							<input
								type="number"
								name={this.max}
								value={this.state[this.max]}
								onKeyUp={this.handleInputKey}
								onBlur={this.handleInputBlur}
								onChange={this.handleInputChange}
							/>
							<p>{this.props.filter.unit}</p>
						</div>
					</div>

					<div className="sliderRound">
						<Nouislider
							connect
							onSlide={this.handleSlider}
							step={this.props.filter.steps}
							start={this.state.start}
							range={this.range}
						></Nouislider>
					</div>
				</div>
			</div>
		);
	}
}

class SliderFilter extends Component {
	constructor(props) {
		super(props);

		this.handleHeaderClick = this.handleHeaderClick.bind(this);
		this.state = {
			show: false,
		};
	}

	handleHeaderClick() {
		this.setState({
			show: !this.state.show,
		});
	}

	render() {
		return (
			<div className="filterWrapper">
				<DropHeader
					onClick={this.handleHeaderClick}
					title={this.props.filter.title}
				></DropHeader>
				<Slider
					show={this.state.show}
					update={this.props.update}
					filter={this.props.filter}
				></Slider>
			</div>
		);
	}
}

class OrderStockFilter extends Component {
	constructor(props) {
		super(props);
		this.handleHeaderClick = this.handleHeaderClick.bind(this);

		this.state = {
			show: true,
		};
	}

	handleHeaderClick() {
		this.setState({
			show: !this.state.show,
		});
	}

	render() {
		return (
			<div className="filterWrapper">
				<DropHeader
					onClick={this.handleHeaderClick}
					title={this.props.filter.title}
				></DropHeader>
				<div
					className={`dropContainer order-stock-drop ${this.state.show ? "show" : ""}`}
				>
					<div className="input-option">
						<input
							onChange={this.props.update}
							// onChange={this.props.update}
							type={"checkBox"}
							name={"orderStock"}
							id="hideOrderStock"
						/>
						<label htmlFor="hideOrderStock">Dölj ordervaror</label>
					</div>
				</div>
			</div>
		);
	}
}

export default class Filters extends Component {
	constructor(props) {
		super(props);
		this.handleSliderUpdate = this.handleSliderUpdate.bind(this);
		this.handleLoadMore = this.handleLoadMore.bind(this);
		this.handleOrderStockUpdate = this.handleOrderStockUpdate.bind(this);
		this.state = {
			hasChanged: false,
			changedArray: null,

			filters: {
				showOrderStock: {
					value: true,
					prevValue: true,
					title: "Ordervaror",
				},
				slideFilters: [
					{
						unit: "%",
						maxTag: "alcMax",
						minTag: "alcMin",

						title: "Alkoholhalt",

						maxVal: 90,
						minVal: 0,

						minPrevious: 0,
						maxPrevious: 90,

						minCurrent: 0,
						maxCurrent: 90,

						steps: 0.5,
					},
					{
						unit: "kr",
						maxTag: "priceMax",
						minTag: "priceMin",

						title: "Pris",

						maxVal: 400000,
						minVal: 0,

						minPrevious: 0,
						maxPrevious: 400000,

						minCurrent: 0,
						maxCurrent: 400000,

						steps: 1,
					},
					{
						unit: "ml",
						maxTag: "volumeMax",
						minTag: "volumeMin",

						title: "Volym",

						maxVal: 40000,
						minVal: 0,

						minPrevious: 0,
						maxPrevious: 40000,

						minCurrent: 0,
						maxCurrent: 40000,

						steps: 1,
					},
				],
			},
		};
	}

	componentDidMount() {
		this.setState({
			changedArray: Array(this.state.filters.slideFilters.length).fill(
				false
			),
		});
	}

	handleSliderUpdate(index, min, max) {
		let newFilter = this.state.filters.slideFilters.slice();

		newFilter[index].minCurrent = min;
		newFilter[index].maxCurrent = max;

		this.setState(() => ({
			slideFilters: newFilter,
		}));

		//Checka alla
		this.state.filters.slideFilters.forEach((filter, i) => {
			if (
				filter.minCurrent !== filter.minPrevious ||
				filter.maxCurrent !== filter.maxPrevious
			) {
				let changeArray = this.state.slideFilters;
				changeArray[i] = true;
				this.setState(() => ({
					changedArray: changeArray,
				}));
			} else {
				let changeArray = this.state.slideFilters;
				changeArray[i] = false;
				this.setState(() => ({
					changedArray: changeArray,
				}));
			}
		});

		if (this.state.changedArray.includes(true)) {
			this.setState({
				hasChanged: true,
			});
		} else {
			this.setState({
				hasChanged: false,
			});
		}
	}

	handleLoadMore() {
		const newSlideFilters = this.state.filters.slideFilters.slice();
		let filters = { ...this.state.filters };
		filters.showOrderStock.prevValue =
			!this.state.filters.showOrderStock.prevValue;

		this.setState({
			hasChanged: false,
			changedArray: Array(this.state.filters.slideFilters.length).fill(
				false
			),
			filters: filters,
		});

		this.props.loadMore(this.state.filters);

		newSlideFilters.map((filter, i) => {
			filter["minPrevious"] = filter["minCurrent"];
			filter["maxPrevious"] = filter["maxCurrent"];
		});
	}

	handleOrderStockUpdate() {
		let newFilters = { ...this.state.filters };

		// newFilters.showOrderStock.prevValue = this.state.filters.showOrderStock.value
		newFilters.showOrderStock.value =
			!this.state.filters.showOrderStock.value;

		let changed =
			newFilters.showOrderStock.value !=
			newFilters.showOrderStock.prevValue;
		console.log(changed);

		this.setState((state, props) => ({
			filters: newFilters,
			hasChanged: changed,
		}));

		setTimeout(() => {
			console.log(this.state.filters.showOrderStock);
		}, 100);
	}

	render() {
		return (
			<aside
				className={`filters ${
					this.props.showMobile ? "show-mobile" : ""
				}`}
			>
				<button
					onClick={this.props.changeMobileShow}
					className="close-filters"
				>
					<p>Stäng</p>
					<p>x</p>
				</button>

				<h1>Filtrera</h1>

				{this.state.filters.slideFilters.map((filter, i) => {
					return (
						<SliderFilter
							update={(min, max) =>
								this.handleSliderUpdate(i, min, max)
							}
							className="filterWrapper"
							key={filter.title}
							filter={filter}
						/>
					);
				})}
				<OrderStockFilter
					update={this.handleOrderStockUpdate}
					filter={this.state.filters.showOrderStock}
				></OrderStockFilter>

				<div className="button-container">
					{this.state.hasChanged ? (
						<button
							className="update-filters"
							onClick={this.handleLoadMore}
						>
							Uppdatera filter
						</button>
					) : (
						""
					)}
				</div>
			</aside>
		);
	}
}
