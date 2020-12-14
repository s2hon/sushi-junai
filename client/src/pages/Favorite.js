import { connect } from 'react-redux';
import FavoriteItems from "../components/Favorites/FavoriteItems";

const mapStateToProps = state => {
    return {
        menuCart: state.menuCart
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch({
                type: 'ADD_MENU_ITEM',
                payload: { item }
            })
        }        
    }
};

const Favorite = connect(
    mapStateToProps,
    mapDispatchToProps
)(FavoriteItems);

export default Favorite;