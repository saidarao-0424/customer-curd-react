import React from 'react';
import PropTypes from 'prop-types';
import CustomerService from './CustomerService';

const propTypes = {};

const defaultProps = {};

class Customer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        };
        this.editCustomer = this.editCustomer.bind(this);
    }

    editCustomer(id) {
        this.props.history.push('/manage/' + id);
    }


    render() {
        return (
            <tr key={this.props.customer.id}>
                <td>{this.props.customer.firstName}</td>
                <td>{this.props.customer.lastName}</td>
                <td>{this.props.customer.email}</td>
                <td>{this.props.customer.contactNum}</td>
                <td>{this.props.customer.address}</td>
                <td><button className="button" style={{ backgroundColor: "#ff7e00" }} onClick={() => this.editCustomer(this.props.customer.id)}>Update </button>
                    &nbsp; <button className="button" style={{ backgroundColor: "#ccc" }} onClick={() => this.props.onDelete(this.props.customer.id)}>Delete </button>
                </td>
            </tr>

        );
    }
}

Customer.propTypes = propTypes;
Customer.defaultProps = defaultProps;
// #endregion

export default Customer;