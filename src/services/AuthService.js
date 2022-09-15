import axios from 'axios';
import decode from 'jwt-decode';

axios.defaults.baseURL = process.env.API;

export default {

  login(user) {
    return axios.post('/account/Auth', user)
  },

  register(user) {
    return axios.post('/account/user/add', user)
  },

  isSignedIn () {
    const token = localStorage.getItem('token');
  
    if (!token)     // Se não existe o token no LocalStorage
      return false; // significa que o usuário não está assinado.
  
    try {
      const { exp: expiration } = decode(token);
      const isExpired = !!expiration && Date.now() > expiration * 1000;
  
      if (isExpired)  // Se o token tem uma data de expiração e
        return false; // essa data é menor que a atual o usuário
                      // não está mais assinado.
      return true;
    } catch (_) {   // O "jwt-decode" lança erros pra tokens inválidos.
      return false; // Com um token inválido o usuário não está assinado.
    }
  }

}