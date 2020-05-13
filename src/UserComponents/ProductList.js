import React, {useEffect, Component}from "react";
import Axios from "axios";

import Product from "./Product";
import Titles from "./Titles";
import NavBar from "./NavBar";
import Item from "./Item";
import NavBar2 from "./Navbar2";

class ProductList extends Component {

    constructor() {
        super();
        this.addToCart = this.addToCart.bind(this)
        this.GetCategory = this.GetCategory.bind(this);


        // this.state = {
        //     currentCat:'All Items'
        //
        // }

    }

    state = {
        products: [],
        currentCat:'All Items'
    };

    componentDidMount() {
        Axios.get('http://localhost:8000/api/products/getProducts')
            .then(res => {
                const products = res.data;

                let tempProducts = [];
                products.data.forEach(item => {
                    const singleItem = {...item};
                    tempProducts = [...tempProducts, singleItem];
                });

                this.setState(() => {
                    return {products: tempProducts};
                });

            })
    }

    addToCart = (item) => {
        Axios.post('http://localhost:8000/api/cart/addToCart', item);

        console.log('sent')
    };

    GetCategory(category){
        this.setState({
            currentCat : category
        })
    }
    render() {
        const {products} = this.state;
        console.log(products)
        return (
            <React.Fragment>
                <NavBar2 onClickChanger={this.GetCategory}/>
                <div className = "py-5 ">
                    <div className = "container">
                        <Titles title={this.state.currentCat}/>
                        <div className="row ">
                            {products.map( product =>{
                                // return <Product key={product.id} products={product} addToCart ={this.addToCart}/>;

                                if (product.category == this.state.currentCat) {
                                    return <Product key={product.id} products={product} addToCart ={this.addToCart}/>;

                                } else if (this.state.currentCat == 'All Items') {
                                    return<Product key={product.id} products={product} addToCart ={this.addToCart}/>;

                                } else if (this.state.currentCat == 'Discounted') {
                                    if (product.discount > 0) {
                                        return <Product key={product.id} products={product} addToCart ={this.addToCart}/>;
                                    }
                                }
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;


// render() {
//
//     console.log(this.state.products.data);
//
//     return (
//         <React.Fragment>
//             <NavBar />
//             <div className = "py-5 ">
//                 <div className = "container">
//                     <Titles name = "Fashion " title = "Hub"/>
//                     <div className="row">
//                         <ProductConsumer>
//                             {list => {
//                                 return list.products.map( product =>{
//                                     return <Product key={product.id} products={product} />;
//                                 })
//                             }}
//                         </ProductConsumer>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     );
// }