import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    

    render() { 
        const { onDelete, onIncrement, onReset, counters } = this.props;

        return (<div>
            {counters.map(counter => <Counter key={counter.id} onIncrement={onIncrement} onDelete={onDelete}  counter={ counter} />)}
            <button onClick={onReset} className="btn btn-success btn-sm m-2">Reset</button>
        </div>);
    }
}
 
export default Counters;