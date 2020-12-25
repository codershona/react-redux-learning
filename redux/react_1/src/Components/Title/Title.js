import React, { Component } from 'react';


class Title extends React.Component {
      
    render() {
        return(
            <h2>
                The Title Component was {this.props.name}
            </h2>

        );
    }


}







export default Title;