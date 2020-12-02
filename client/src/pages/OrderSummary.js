import { connect } from 'react-redux'
import Cart from "../components/Cart";
import {changeQuantity, addItem, decrementItem} from "../actions/index";

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeItem: (id, quantity) => {
            if(quantity >= 0)
                dispatch(changeQuantity(id, quantity))
        },
        removeItem: id => {
            dispatch(changeQuantity(id, 0))
        },
        incrementItem: id => {
            dispatch(addItem(id))
        },
        decrementItem: id => {
            dispatch(decrementItem(id))
        }
    }
};

const OrderSummary = connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);

export default OrderSummary