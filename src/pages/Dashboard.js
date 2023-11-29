import React, { useState } from 'react';

function Dashboard() {
  // Estados para armazenar os valores dos créditos e débitos
  const [credit, setCredit] = useState('');
  const [debit, setDebit] = useState('');
  const [transactions, setTransactions] = useState([]); // Array para armazenar transações

  // Função para adicionar uma transação de crédito
  const addCredit = () => {
    const newTransaction = {
      type: 'credit',
      amount: parseFloat(credit),
    };
    setTransactions([...transactions, newTransaction]);
    setCredit('');
  };

  // Função para adicionar uma transação de débito
  const addDebit = () => {
    const newTransaction = {
      type: 'debit',
      amount: parseFloat(debit),
    };
    setTransactions([...transactions, newTransaction]);
    setDebit('');
  };

  // Calcular o total de créditos
  const totalCredit = transactions
    .filter((transaction) => transaction.type === 'credit')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calcular o total de débitos
  const totalDebit = transactions
    .filter((transaction) => transaction.type === 'debit')
    .reduce((total, transaction) => total + transaction.amount, 0);

  // Calcular a diferença entre créditos e débitos
  const difference = totalCredit - totalDebit;

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
    totalContainer: {
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Dashboard</h2>
        <div>
          <h3>Créditos</h3>
          <input
            type="number"
            placeholder="Valor"
            style={styles.input}
            value={credit}
            onChange={(e) => setCredit(e.target.value)}
          />
          <button style={styles.button} onClick={addCredit}>
            Adicionar Crédito
          </button>
        </div>
        <div>
          <h3>Débitos</h3>
          <input
            type="number"
            placeholder="Valor"
            style={styles.input}
            value={debit}
            onChange={(e) => setDebit(e.target.value)}
          />
          <button style={styles.button} onClick={addDebit}>
            Adicionar Débito
          </button>
        </div>
      </div>

      <div style={styles.totalContainer}>
        <h3>Resumo Financeiro</h3>
        <p>Total a Pagar: R${totalDebit}</p>
        <p>Total a Receber: R${totalCredit}</p>
        <p>Diferença: R${difference}</p>
      </div>
    </div>
  );
}

export default Dashboard;
