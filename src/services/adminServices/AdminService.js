import axios from "axios"
import authHeader from "../auth/AuthHeader"

const API_URL = 'https://localhost:7083/api/v1/'

class AdminServices {
  getUnregisteredUsers() {
    return axios.get(API_URL + "Admin", {
      headers: authHeader(),
    })
      .then(response => {
        console.log(response.data)
        
        return response.data
      })
  }

}


export default new AdminServices()