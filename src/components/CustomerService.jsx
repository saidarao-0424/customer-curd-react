
import axios from 'axios';

const CUSTOMER_API_URL = "http://localhost:9090/api/v1/customers"

class CustomerService {

    getCustomers() {
        return axios.get(CUSTOMER_API_URL);
    }

    createCustomer(customer) {
        return axios.post(CUSTOMER_API_URL, customer);
    }

    getCustomerById(id) {
        return axios.get(CUSTOMER_API_URL + "/find/" + id);
    }

    updateCustomer(customer, id) {
        return axios.put(CUSTOMER_API_URL + "/" + id, customer);
    }

    deleteCustomer(id) {
        return axios.delete(CUSTOMER_API_URL + "/" + id);
    }
}


export default new CustomerService();