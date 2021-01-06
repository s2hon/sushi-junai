import React, {Component} from 'react';
import './index.css';
import { connect } from 'react-redux';

class Notification extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentWillUpdate(nextProps) {
        if(this.id)
            clearTimeout(this.id);
        this.id = undefined;
        if(nextProps.showNotification)
            this.id = setTimeout(() => this.props.disableNotify(), 1500);
    }
    componentWillUnmount() {
        if(this.id)
            clearTimeout(this.id);
    }
    render() {
        if(this.props.showNotification)
            return (
                    <div className="notificationBar">
                        Item has been added
                    </div>
            );
        else return (
                <div></div>
        );
    };
}

const mapStateToProps = state => {
    return {
        showNotification: state.showNotification
    }
};

const mapDispatchToProps = dispatch => {
    return {
        disableNotify: id => {
            dispatch({
                type: "REMOVE_NOTIFICATION"
            })
        }
    }
};

const VisibleNotification = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notification);

export default VisibleNotification