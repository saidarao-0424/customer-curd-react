import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import ManageCustomer from './ManageCustomer';
import CustomerService from './CustomerService';
import Customer from './Customer'


const propTypes = {};

const defaultProps = {};


/**
 * 
 */
class CustomerList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            customerList: []
        };
        this.addCustomer = this.addCustomer.bind(this);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    componentDidMount() {
        CustomerService.getCustomers().then((res) => {
            this.setState({ customerList: res.data });
        });
    }

    addCustomer() {
        this.props.history.push("/manage/-1");
    }

    deleteCustomer(id) {
        CustomerService.deleteCustomer(id).then((res) => {
            this.setState({ customerList: this.state.customerList.filter(customer => customer.id !== id) });
        });
    }

    render() {
        const Customers = this.state.customerList.map(cust =>
            <Customer key={cust.id} customer={cust} history={this.props.history} onDelete={this.deleteCustomer} />
        );
        return <div>
            <div style={{ textAlign: "right" }}> <button className="button" onClick={this.addCustomer}>Add Customer</button>
            </div>
            <table id="customers">
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Contact Num</th>
                    <th>Address</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {Customers}
                </tbody>

            </table>

        </div>;
    }
}

CustomerList.propTypes = propTypes;
CustomerList.defaultProps = defaultProps;
// #endregion

export default CustomerList;