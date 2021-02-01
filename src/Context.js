import React, { Component } from 'react';
import items from './data';
import brands from './brands';

const ProductContext = React.createContext();

class ContextProvider extends Component {
	state = {
		products: [],
		featuredProducts: [],
		sortedProducts: [],
		loading: true,
		someBrands: [],
		addInfo: []
	};
	componentDidMount() {
		let products = this.formatData(items);
		let brand = this.brandData(brands);
		let featuredProducts = products.filter((product) => product.featured === true);

		let addProducts = products.filter((product) => product.other === true);

		this.setState({
			products,
			featuredProducts,
			sortedProducts: products,
			loading: false,
			someBrands: brand,
			addInfo: addProducts
		});
	}

	formatData(items) {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let product = { ...item.fields, images, id };
			return product;
		});
		return tempItems;
	}

	/*Get Brands*/
	brandData(brands) {
		let tempBrands = brands.map((brand) => {
			let images = brand.fields.images.map((image) => image.fields.file.url);
			let brandImage = { ...brands.fields, images };
			return brandImage;
		});
		return tempBrands;
	}

	// Single Product
	getSingleProduct = (slug) => {
		let tempProduct = [...this.state.products];
		const product = tempProduct.find((product) => product.slug === slug);
		return product;
	};

	render() {
		return (
			<ProductContext.Provider value={{ ...this.state, getSingleProduct: this.getSingleProduct }}>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductConsumer, ContextProvider };
