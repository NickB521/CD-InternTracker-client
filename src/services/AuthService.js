import axios from "axios"

export function getLoginDetails(username, password) { // requests token for user and stores if successful
    
    axios.post('http://localhost:8080/api/auth/login?email=' + username + '&password=' + password).then((response) => {
        if (response.data && response.data.accessToken) {
            localStorage.setItem("token", response.data.accessToken);
        }
        else {
            console.error("login failed");
        }
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