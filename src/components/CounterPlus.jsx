import React, { Component } from "react";

class Counter extends Component {
    state = {
        count: 0
    };

    addOne = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
        <div>
            <span>{this.formatCount()}</span>
            <button
            onClick={this.addOne}
            className="btn btn-secondary btn-sm"
            >
            +
            </button>
        </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "" : count;
    }
}

export default Counter;
