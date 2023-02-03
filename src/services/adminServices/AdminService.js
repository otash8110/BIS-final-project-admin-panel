import axios from "axios"

const API_URL = 'https://localhost:7083/api/v1/'

class AdminServices {
  getUnregisteredUsers() {
    return axios.get(API_URL + "Admin")
      .then(response => {
        console.log(response.data)
        
        return response.data
      })
  }

}


export default new AdminServices()