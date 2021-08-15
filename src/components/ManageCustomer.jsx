import React from 'react';
import PropTypes from 'prop-types';
import CustomerService from './CustomerService';

// #region constants

// #endregion

// #region styled-components

// #endregion

// #region functions

// #endregion

// #region component
const propTypes = {};

const defaultProps = {};

/**
 * 
 */
class ManageCustomer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            contactNum: '',
            address: ''
        };
    }

    componentDidMount() {
        console.log("this.state.id", this.state.id);

        if (this.state.id === "-1") {
            return;
        }
        console.log("this.state.id", this.state.id);
        CustomerService.getCustomerById(this.state.id).then((res) => {
            console.log("response ", res);
            let customer = res.data;
            this.setState({
                id: customer.id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                contactNum: customer.contactNum,
                address: customer.address
            });
        });
    }

    changeFirstName = (event) => {
        this.setState({ firstName: event.target.value })
    }

    changeLastName = (event) => {
        this.setState({ lastName: event.target.value })
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    changeContactNum = (event) => {
        this.setState({ contactNum: event.target.value })
    }


    changeAddress = (event) => {
        this.setState({ address: event.target.value })
    }

    saveCustomer = (event) => {
        event.preventDefault();
        let customer = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName, email: this.state.email,
            contactNum: this.state.contactNum, address: this.state.address
        }
        console.log("Customer info =>", JSON.stringify(customer));

        if (this.state.id === "-1") {
            CustomerService.createCustomer(customer).then((response) => {
                this.props.history.push("/")
            });
        } else {
            CustomerService.updateCustomer(customer, this.state.id).then((response) => {
                this.props.history.push("/")
            });
        }
    }

    render() {
        return <div>
            <div style={{ textAlign: "center" }}> {this.state.id === "-1" ? "Add Customer" : "Edit Customer"} </div>
            <div> <label >First Name : </label>
                <input name="firstName" type="text" value={this.state.firstName} onChange={this.changeFirstName} />
            </div>

            <div> <label >Last Name : </label>
                <input name="lastName" type="text" value={this.state.lastName} onChange={this.changeLastName} />
            </div>

            <div > <label>Email : </label>
                <input name="email" type="text" value={this.state.email} onChange={this.changeEmail} />
            </div>

            <div > <label>Contact Num : </label>
                <input name="contactNum" type="text" value={this.state.contactNum} onChange={this.changeContactNum} />
            </div>

            <div > <label>address : </label>
                <input name="address" type="text" value={this.state.address} onChange={this.changeAddress} />
            </div>

            <div><br /></div>

            <div> <button className="button" onClick={this.saveCustomer}>Save</button></div>

        </div>;
    }
}

ManageCustomer.propTypes = propTypes;
ManageCustomer.defaultProps = defaultProps;
// #endregion

export default ManageCustomer;