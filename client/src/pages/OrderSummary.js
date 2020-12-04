import { connect } from 'react-redux'
import MenuCart from "../components/OrderSummary/MenuCart";


const mapStateToProps = state => ({
    menuCart: state.menuCart,
    favCart: state.favCart
});

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch({})
        },
        handleFavorite: item => {
            dispatch({
                type: 'ADD_FAV_ITEM',
                payload: { item }
            })
        }
    }
};

const OrderSummary = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuCart);


export default OrderSummary