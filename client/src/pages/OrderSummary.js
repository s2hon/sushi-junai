import { connect } from 'react-redux'
import MenuCart from "../components/OrderSummary/MenuCart";

const mapStateToProps = state => ({
    menuCart: state.menuCart,
    favCart: state.favCart,
    totalSavings: state.clearCart,
    pastOrders: state.oldCart

});

const mapDispatchToProps = dispatch => {
    return {
        incrementItem: item => {
            dispatch({
                type: 'INCREMENT_MENU_ITEM',
                payload: { item }
            });
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
        getTotal: accumulativeTotal => {
            dispatch({
                type: 'CALCULATE_CART',
                payload: { accumulativeTotal }
            })
        },
        savePastCart: menuCart => {
            dispatch({
                type: 'SAVE_PAST_CART',
                payload: { menuCart }
            });
            dispatch({
                type: "SHOW_NOTIFICATION"
            });
        },
        clearCart: () => {
            dispatch({
                type: 'CLEAR_CART',
                payload: { }
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