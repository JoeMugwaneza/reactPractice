import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    styles = {
        backgroundColor: "green",
        fontWeight: 50
    }

    render() { 
        let classes = "badge m-2 badge-"
        classes += this.state.count === 0 ? "Warning" : "primary";

        return ( 
        <React.Fragment>
                <span className={classes}>{this.formatCount() }</span>
            <button className='btn btn-secondary btn-sm'>Increment</button>
        </React.Fragment>
        );
    }

    formatCount() {
        const {count} = this.state
        return count === 0 ? <h4>Zero</h4>: count
    }
}

export default Counter;