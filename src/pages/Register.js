import React, { useState } from 'react';
import { Link,  } from 'react-router-dom';

function Register() {
  // Estados para armazenar os valores dos campos de entrada
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Histórico de navegação para redirecionar após o registro
  //const history = useHistory();

  // Função para lidar com o envio do formulário
  const handleRegister = () => {
    // Implemente sua lógica de registro aqui
    // Exemplo básico: redireciona para a tela Dashboard após o registro
    //history.push('/dashboard');
  };

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
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Cadastro</h2>
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
        <input
          type="password"
          placeholder="Confirmar Senha"
          style={styles.input}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button style={styles.button} onClick={handleRegister}>
          Registrar
        </button>
        <Link to="/" style={styles.link}>
          Já tem uma conta? Faça login
        </Link>
      </div>
    </div>
  );
}

export default Register;
