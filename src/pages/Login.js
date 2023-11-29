import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  //  armazenar os valores dos campos de entrada
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Dashboard() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/Dashboard');
    };
  

  // Função para lidar com o envio do formuláriogit status
  //const handleClick = () => {
    //const navigate = useNavigate();
    // Navega para a rota '/outra-rota'
      //navigate("/Dashboard");
    
  };

  

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Login</h2>
        
        <input
          type="text"
          placeholder="Email"
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
        <input
          type="password"
          placeholder="Senha"
          style={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Link to="/dashboard" style={styles.link}>
        Login
        </Link>
        
        
        
        <Link to="/register" style={styles.link}>
         Registre-se aqui
        </Link>
      </div>
    </div>
  );
}

// Estilos CSS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  formContainer: {
    width: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  title: {
    marginBottom: '20px',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    marginBottom: '15px',
    padding: '10px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  link: {
    marginTop: '10px',
    textAlign: 'center',
    marginLeft: '50px'
  },
};

export default Login;

 