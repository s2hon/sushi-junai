import { connect } from 'react-redux'
import ItemList from "../components/MenuList";
import {addItem} from "../actions/index"

const mapStateToProps = state => {
    return {
        itemListing: state.itemListing
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: id => 
            dispatch(addItem(id))
        
    }
};

const AYCEMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(ItemList);

export default AYCEMenu;