import React, { Component } from 'react';

class IngHeaderBottom extends Component {
    render () {
        return (
            <div id="ing-header-bottom" className="container">
                <div id="logo">
                        <img src={require('../../../images/ing-header/logo.png')} alt="" data-pin-nopin="true" />
                </div>
            </div>
        )
    }
}

export default IngHeaderBottom;