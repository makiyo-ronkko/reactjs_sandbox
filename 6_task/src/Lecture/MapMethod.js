/* import React from 'react';

const MapMethod = () => {
    const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // new variable to use myArray
    const listItems = myArray.map((mynumber) => <li>{mynumber}</li>);

    return (
        <div>
            {listItems}
        </div>
    );
}

export default MapMethod; */

import React, { Component } from 'react';

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

class MapMethod extends Component {
    state = {
        //numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        numbersList: myArray
    }

    removeHandler = (listindex) => {
        //const myOldArray = this.state.numbersList;
        //const myOldArray = this.state.numbersList.slice(); // cerate a copy
        const myOldArray = [...this.state.numbersList]; // spread to crate a copy
        myOldArray.splice(listindex, 1);
        this.setState({ numbersList: myOldArray })
        //console.log('clicked!', listindex);
    }


    render() {
        const listItems = this.state.numbersList.map((number, index) => <li key={index} onClick={this.removeHandler.bind(this, index)}>{number}</li>)

        return (
            <div>
                {listItems}
            </div>
        );
    }
}

export default MapMethod;

