import React, { useEffect, useState, createContext } from 'react';
import { items, brands } from './data';

const ProductContext = createContext();

const ContextProvider = (props) => {
	const [products, setProducts] = useState([]);
	const [featuredProducts, setFeaturedProducts] = useState([]);
	const [sortedProducts, setSortedProducts] = useState([]);
	const [addInfo, setAddInfo] = useState([]);
	const [someBrands, setSomeBrands] = useState([]);
	const [loading, setLoading] = useState(true);

	const formatData = (items) => {
		let tempItems = items.map((item) => {
			let id = item.sys.id;
			let images = item.fields.images.map((image) => image.fields.file.url);
			let product = { ...item.fields, images, id };
			return product;
		});
		return tempItems;
	};

	/*Get Brands*/
	const brandData = (brands) => {
		let tempBrands = brands.map((brand) => {
			let images = brand.fields.images.map((image) => image.fields.file.url);
			let brandImage = { ...brands.fields, images };
			return brandImage;
		});
		return tempBrands;
	};

	// Single Product
	const getSingleProduct = (slug) => {
		let tempProduct = products;
		const product = tempProduct.find((product) => product.slug === slug);
		return product;
	};

	useEffect(() => {
		let products = formatData(items);
		let brand = brandData(brands);
		let featuredProducts = products.filter((product) => product.featured === true);

		let addProducts = products.filter((product) => product.other === true);

		setProducts(products);
		setFeaturedProducts(featuredProducts);
		setSortedProducts(products);
		setSomeBrands(brand);
		setAddInfo(addProducts);
		setLoading(false);
	}, []);

	return (
		<ProductContext.Provider
			value={{ products, featuredProducts, sortedProducts, addInfo, someBrands, loading, getSingleProduct }}>
			{props.children}
		</ProductContext.Provider>
	);
};

const ProductConsumer = ProductContext.Consumer;

export { ProductContext, ProductConsumer, ContextProvider };
