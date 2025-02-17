import axios from "axios"

export function getLoginDetails(username, password) { // requests token for user and stores if successful
    
    axios.post('http://localhost:8080/api/auth/login?email=' + username + '&password=' + password).then((response) => {
        console.log(response.data)
        localStorage.setItem("token", response.data.accessToken);
    })
    
}

export function clearLoginDetails() {
    localStorage.removeItem("token")
}

export function getAuthHeader() { //gets and formats authentication header
   
    let token = localStorage.getItem("token");
  
    let headerConfig =  {headers: {
        'Authorization': 'Bearer ' + token
      }}
    return headerConfig;

}