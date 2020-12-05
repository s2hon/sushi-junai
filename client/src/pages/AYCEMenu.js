import { connect } from 'react-redux';
import MenuList from "../components/AyceMenu/MenuList";

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

const AYCEMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

export default AYCEMenu;