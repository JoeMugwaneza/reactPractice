import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value, 
    //     tags: ["tag1", "tag2", "tag3"]
        
    // };

    // handleIncrement = () => {
    //     this.setState({value: this.state.value + 1})
    // }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>
    //     // return <ul>{this.state.tags.map(tag => <li key={tag}>{ tag}</li>) }</ul>
    // }
    
    render() {
        const { onIncrement, onDelete, counter } = this.props;

        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                
                <button onClick={() => onIncrement(counter)} className='btn btn-secondary btn-sm m-2'>Increment</button>

                <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm m-2" >Delete</button>
                <br />
                {/* {this.renderTags()} */}
            </React.Fragment>
        )

    }
    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;

    }

    formatCount() {
        const { value } = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
}

export default Counter;