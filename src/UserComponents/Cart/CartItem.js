import React from 'react';
import {connect} from "react-redux";

const mapStateToProps = ({ session}) => ({
    session
});

const CartItem = ({session ,...props}) => {

    const {id,name, price, quantity} =  props.item;
    const {increment, decrement, removeItem} = props;

    return (
        <div className="row my-2 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img  style={{width: '5rem', height: '5rem'}} className="img-fluid" alt="product "/>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Product: </span>{name}
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">Price: </span>{price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                     <div>
                         <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
                         <span className="btn btn-black mx-1">{quantity}</span>
                         <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
                     </div>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <div className="cart-icon">
                    <i className="fas fa-trash" onClick={() => removeItem(id)}/>
                </div>
            </div>
            <div className="col-10 mx-auto col-lg-2">
                <srong>Total: ${50}</srong>
            </div>
        </div>
    );
};

export default connect(
    mapStateToProps
)(CartItem);










// export default function CartItem({item,value}) {
//
//     const {id,title, img, price, total, count} =  item;
//     const {increment, decrement, removeItem } = value;
//
//     return (
//         <div className="row my-2 text-capitalize text-center">
//             <div className="col-10 mx-auto col-lg-2">
//                 <img src={img} style={{width: '5rem', height: '5rem'}} className="img-fluid" alt="product "/>
//             </div>
//             <div className="col-10 mx-auto col-lg-2">
//                 <span className="d-lg-none">Product: </span>{title}
//             </div>
//             <div className="col-10 mx-auto col-lg-2">
//                 <span className="d-lg-none">Price: </span>{price}
//             </div>
//             <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
//                 <div className="d-flex justify-content-center">
//                     <div>
//                         <span className="btn btn-black mx-1" onClick={() => decrement(id)}>-</span>
//                         <span className="btn btn-black mx-1">{count}</span>
//                         <span className="btn btn-black mx-1" onClick={() => increment(id)}>+</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="col-10 mx-auto col-lg-2">
//                 <div className="cart-icon" onClick={() => removeItem(id)}>
//                     <i className="fas fa-trash"/>
//                 </div>
//             </div>
//             <div className="col-10 mx-auto col-lg-2">
//                 <srong>Total: ${total}</srong>
//             </div>
//         </div>
//     );
// }
