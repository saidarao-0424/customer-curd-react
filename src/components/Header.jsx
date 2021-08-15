import React from 'react';
import PropTypes from 'prop-types';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

const headerStyle = {
    textAlign: "center", backgroundColor: "rebeccapurple",
    paddingLeft: "10px", paddingTop: "10px", paddingBottom: "10px"
};


/**
 * 
 */
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return <div>
            <h1 style={headerStyle}>Customers Information</h1>

        </div>
    }
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
// #endregion

export default Header;