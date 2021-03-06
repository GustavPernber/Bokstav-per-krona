import React, { Component, useState } from "react";

class LoadMoreBtn extends Component {
	render() {
		return (
			<button onClick={() => this.props.loadMore()} className="loadMore">
				<p>Visa fler</p>
			</button>
		);
	}
}

class TasteClocks extends Component {
	switchName(name) {
		switch (name) {
			case "TasteClockBody":
				return "Fyllighet";
			case "TasteClockRoughness":
				return "Strävhet";
			case "TasteClockFruitacid":
				return "Fruktsyra";

			case "TasteClockSweetness":
				return "Sötma";

			case "TasteClockBitter":
				return "Beska";
			case "TasteClockSmokiness":
				return "Rökighet";

			default:
				return `NOT KNOWN ${name}`;
		}
	}

	render() {
		return (
			<aside className="clocks">
				{this.props.clockList.map((clockObj) => {
					return (
						<div key={clockObj.key}>
							<img
								src={`../img/clocks/clock-${clockObj.value}.svg`}
								alt="Taste clock"
							></img>
							<p>{this.switchName(clockObj.key)}</p>
						</div>
					);
				})}
			</aside>
		);
	}
}

function Product(props) {
	const [imgUrl, setImgUrl] = useState(`https://product-cdn.systembolaget.se/productimages/${props.product.productId}/${props.product.productId}_100.png`);

	// let imgUrl = `https://product-cdn.systembolaget.se/productimages/${props.product.productId}/${props.product.productId}_100.png`;
	let apk = parseFloat(props.product.apk).toPrecision(4);


	let nameAndVintage;
	if (props.product.vintage === null && props.product.nameThin === null) {
		nameAndVintage = "";
	} else if (props.product.nameThin === null) {
		nameAndVintage = props.product.vintage;
	} else if (props.product.vintage === null) {
		nameAndVintage = props.product.nameThin;
	} else {
		nameAndVintage = `${props.product.nameThin}, ${props.product.vintage}`;
	}

	let productUrlName = `${props.product.nameBold
		.replace(/\s+/g, "-")
		.toLowerCase()}-${props.product.productNumber}`;

    let cat1NameURL=props.product.cat1==="Cider%20%26%20blanddrycker" ? "cider-blanddrycker" : props.product.cat1

	let productUrl = `https://www.systembolaget.se/produkt/${cat1NameURL}/${productUrlName}`;
    
    let cat1Name = props.product.cat1==="Cider%20%26%20blanddrycker" ? "Cider & blanddryck" : props.product.cat1


	return (
		<a
			href={productUrl}
			className={
				props.product.assortmentText !== "Ordervaror"
					? ""
					: "order-stock-product"
			}
		>
			<figure>
				<img onError={()=>setImgUrl('/img/placeholder-wine-bottle.png')} src={imgUrl} alt="Produktbild" />
			</figure>

			<div className="titles">
				<p>
					{cat1Name}, {props.product.cat2},{" "}
					{props.product.cat3}
				</p>
				<h1>{props.product.nameBold}</h1>
				<h2>{nameAndVintage}</h2>
			</div>

			<div className="usageTasteContainer">
				<p>
					{props.product.taste} {props.product.usage}
				</p>
			</div>

			<footer className="volumePrice">
				<div>
					<p>
						<strong>APK: {apk}</strong>
					</p>
					<p>{props.product.volume} ml</p>
					<p>{props.product.alcPercentage}%</p>
				</div>
				<h3>{props.product.price} :-</h3>
			</footer>

			<TasteClocks clockList={props.product.tasteClocks}></TasteClocks>

			{props.product.assortmentText !== "Ordervaror" ? (
				""
			) : (
				<div className="order-stock-flag">
					<div className="order-p-container">
						<p>Ordervara</p>
					</div>
				</div>
			)}
		</a>
	);
}

//FETCH
class ProductsContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: [],
			url: "",
		};
	}


	componentDidMount() {
		this.getProducts();
	}

	async componentDidUpdate(prevProps, prevState) {

		if (this.props.filters !== null && prevProps.filters !== this.props.filters) {
			//Om filter uppdateras
            await this.updateURL()
			this.getProducts(true);
		} else if (this.props.sortBy !== prevProps.sortBy) {
            //om sort uupdateras
            await this.updateURL()
			this.getProducts();
		} else if (this.props.catFilter !== prevProps.catFilter) {
			//Om kategori filter har uppdaterats
            await this.updateURL()
            this.getProducts();
			
		}
	}

	async updateURL() {

		let urlArr = [];
        if (this.props.filters !== null) {
            this.props.filters.slideFilters.forEach((filter, i) => {
                urlArr.push(
                    `${filter.minTag}=${filter.minCurrent}&${filter.maxTag}=${filter.maxCurrent}`
                );
            });
        }
        urlArr.push(`sortBy=${this.props.sortBy}`);
        urlArr.push(`cat1=${this.props.catFilter}`);

        await this.setState(() => ({
            products: [],
            url: urlArr.join("&"),
        }));

        
	}

	loadMore() {
		this.getProducts();
	}

	async getProducts(firstPage = false) {
		console.log("Fetching...");

		try {
			const pageNum = firstPage ? 1 : this.props.pageNum;

			let orderStock = "showOrderStock=true";

			if (this.props.filters !== null) {
				orderStock = this.props.filters.showOrderStock.value
					? "showOrderStock=true"
					: "showOrderStock=false";
			}

			let url = `http://localhost:8080/api/productsLimited?page=${pageNum}&${orderStock}&${this.state.url}`;
			// let url=`${window.location}api/productsLimited?page=${pageNum}&${orderStock}&${this.state.url}`
			console.log(url);
			const response = await fetch(url);
			const data = await response.json();
			if (data.length > 0) {
				this.props.fetchSucces();
				console.log("Done fetching: ", data);
				let newData = this.state.products.concat(data);
				this.setState({
					products: newData,
				});
			} else {
				console.log("No products found!");
				//Sätt i state
				//Rensa staten vid update
				this.props.noProductsFound();
			}
		} catch (error) {
			console.error(error);
			console.log("Failed to fetch from server!");
			this.props.fetchHasFailed();
		}
	}

	render() {
		return (
			<section
				className={`drinksContainer ${
					this.props.isSmall ? "strippedArticles" : ""
				}`}
			>
				{this.props.fetchFail === false
					? this.state.products.map((product, i) => {
							return (
								<Product
									key={product.productId}
									product={product}
								></Product>
							);
					  })
					: ""}
			</section>
		);
	}
}

export { ProductsContainer, LoadMoreBtn };
