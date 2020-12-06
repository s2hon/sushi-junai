import { connect } from 'react-redux'
import MenuCart from "../components/OrderSummary/MenuCart";


const mapStateToProps = state => ({
    menuCart: state.menuCart,
    favCart: state.favCart,
    totalSavings: state.clearCart
});

const mapDispatchToProps = dispatch => {
    return {
        incrementItem: item => {
            dispatch({
                type: 'INCREMENT_MENU_ITEM',
                payload: { item }
            })
        },
        removeItem: item => {
            dispatch({
                type: 'DELETE_MENU_ITEM',
                payload: { item }
            })
        },
        decrementItem: item => {
            dispatch({
                type: 'DECREMENT_MENU_ITEM',
                payload: { item }
            })
        },
        clearCart: cartTotal => {
            dispatch({
                type: 'CLEAR_CART',
                payload: { cartTotal }
            })
        }
        // handleFavorite: item => {
        //     dispatch({
        //         type: 'ADD_FAV_ITEM',
        //         payload: { item }
        //     })
        // }
    }
};

const OrderSummary = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuCart);


export default OrderSummary