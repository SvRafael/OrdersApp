import axios from 'axios';

// Cria uma instância do Axios com configuração padrão
const api = axios.create({
  baseURL: 'http://localhost:5000', // URL base para as requisições
  timeout: 10000, // Tempo máximo de espera por uma resposta (em milissegundos)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;