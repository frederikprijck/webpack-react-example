import React, { Component } from 'react';
import IngHeaderBottom from './IngHeaderBottom';

class IngHeader extends Component {

    render () {
        return (
            <div className="ing-header container">
                <IngHeaderBottom />
                header
            </div>
        )
    }
}

export default IngHeader;