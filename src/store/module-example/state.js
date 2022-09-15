import axios from 'axios'

const currentToken = localStorage.getItem('token')
const currentUser = JSON.parse(localStorage.getItem('user'));

if(currentToken != null) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${currentToken}`;
}

export default function () {
  return {
    token: currentToken || '',
    user: currentUser || {}
  }
}
