import { connect } from 'react-redux'
import ItemList from "./Menu2";
import {addItem} from "../actions/index"

const mapStateToProps = state => {
    return {
        itemListing: state.itemListing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item =>
            dispatch(addItem(item))
        
    }
};

const VisibleItemList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default VisibleItemList