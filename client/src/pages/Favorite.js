import { connect } from 'react-redux'
import FavCart from "../components/FavCart";


const mapStateToProps = state => ({
    favCart: state.favCart
});

const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => {
            dispatch({})
        }
    }
};

const Favorite = connect(
    mapStateToProps,
    mapDispatchToProps
)(FavCart);


export default Favorite
