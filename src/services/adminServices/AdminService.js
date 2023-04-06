import axios from "axios"
import authHeader from "../auth/AuthHeader"

const API_URL = 'https://localhost:7083/api/v1/'

class AdminServices {
  getUnregisteredUsers() {
    return axios.get(API_URL + "Admin/GetUnregisteredUsers", {
      headers: authHeader(),
    })
      .then(response => {
        return response.data
      })
  }

  approveUserRegisration(email) {
    return axios.post(API_URL + "Admin/ApproveUser", {
      email,
    }, {
      headers: authHeader(),
    })
      .then(response => {
        return response.data
      })
  }

  getUnapprovedProducts() {
    return axios.get(API_URL + "Admin/GetUnregisteredProducts", {
      headers: authHeader(),
    })
      .then(response => {
        return response.data
      })
  }

  approveProduct(productId) {
    return axios.post(API_URL + "Admin/ApproveProduct", {
      productId,
    }, {
      headers: authHeader(),
    })
      .then(response => {
        return response.data
      })
  }

}


export default new AdminServices()