import React, { Component } from 'react';

import Counter from "./counter"
class Counters extends Component {

    state = {
        counters: [
            { id: 1, value: 1 },
            { i: 2, value:  0},
            { i: 3, value: 0},
            {i: 4,  value: 0},
        ]
        
}
    
    render() { 
        return (
            <div>
            {/* <Counter /> */}
                {this.state.counters.map(counter => <Counter key={counter.value} />)}
            </div>);
    }
}
 
export default Counters;