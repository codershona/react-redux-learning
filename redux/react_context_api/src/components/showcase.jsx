import React, { Component } from 'react';
import { Context } from './app';

class AddItem extends Component {
    state = {
        value: ''
    };

    handleChange = e => {
        this.setState({ value: e.target.value });

    };

    addItem = () => {
        if (this.state.value) {
            this.props.addToShowcase(this.state.value);
            this.setState({value: ''});
        }

    };

    render() {
        return(
            <div className="d-flex my-3">
                <input
                type='text'
                className='form control mr-2'
                value={this.state.value}
                onChange={this.handleChange}

                 />
                 <button
                 onClick={this.addItem}
                 className='btn btn-sm btn-primary btn-block'>
                     ADD ITEMS
                 </button>
            </div>
        );
    }
}




const ItemList = () => {
    return (
        <Context.Consumer>
     {({user}) => (
             <ul className='list-group'>
             {user.languages.map(lang => (
                 <li className='list-group-item' key={lang}>
                     {lang}
                 </li>
             ))}
 
         </ul>
     )}
        </Context.Consumer>
    );

};


/* MAIN COMPONENT :  */

const Showcase = ({user, addToShowcase}) => {
    return (
        <div>
            <h3>
                {user.name} ShowCase: 
            </h3>
            <AddItem addToShowcase={addToShowcase} />
            <ItemList />
        </div>
    );
};



export default Showcase;

