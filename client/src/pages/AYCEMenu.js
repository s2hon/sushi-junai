import { connect } from 'react-redux';
import MenuList from "../components/AyceMenu/MenuList";

const mapStateToProps = state => {
    return {
        menuCart: state.menuCart,
        pastOrders: state.oldCart,
        showNotification: state.showNotification
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addItem: item => {
            dispatch({
                type: 'ADD_MENU_ITEM',
                payload: { item }
            });
            dispatch({
                type: "SHOW_NOTIFICATION"
            });
        }        
    }
};

const AYCEMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(MenuList);

export default AYCEMenu;