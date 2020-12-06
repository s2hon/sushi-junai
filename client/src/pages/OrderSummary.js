import { connect } from 'react-redux'
import MenuCart from "../components/OrderSummary/MenuCart";


const mapStateToProps = state => ({
    menuCart: state.menuCart,
    favCart: state.favCart
});

const mapDispatchToProps = dispatch => {
    return {
        incrementItem: item => {
            dispatch({
                type: 'INCREMENT_MENU_ITEM',
                payload: { item }
            })
        },
        removeItem: name => {
            dispatch({
                type: 'DELETE_MENU_ITEM',
                payload: { name }
            })
        },
        decrementItem: item => {
            dispatch({
                type: 'DECREMENT_MENU_ITEM',
                payload: { item }
            })
        },
        // handleFavorite: item => {
        //     dispatch({
        //         type: 'ADD_FAV_ITEM',
        //         payload: { item }
        //     })
        // }
        // clearCart: total => {
        //     dispatch({
        //         type: 'CLEAR_CART',
        //         payload: { total }
        //     })
        // }
    }
};

const OrderSummary = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuCart);


export default OrderSummary