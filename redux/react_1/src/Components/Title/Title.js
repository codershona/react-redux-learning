import React, { Component } from 'react';


class Title extends React.Component {
      
    render() {
        return(
            <h5>
                The Title Component was : {this.props.name} and Email address: ({this.props.email})
            </h5>

        );
    }


}







export default Title;