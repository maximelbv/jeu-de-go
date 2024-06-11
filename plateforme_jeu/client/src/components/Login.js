import React, { useState } from 'react';

export default function Login() {
  const [register, setRegister] = useState(true);

  const handleClick = () => {
    setRegister(!register);
  };

  const inputStyle = {
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
  };

  return (
    <div
      id="login"
      style={{
        backgroundColor: '#000000',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>{register ? 'Inscription' : 'Connexion'}</h1>

        <form style={{ display: register ? 'flex' : 'none', flexDirection: 'column' }}>
          <input
            type="email"
            placeholder="Votre email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            style={inputStyle}
          />

          {register && (
            <input
              type="password"
              placeholder="Confirmation de votre mot de passe"
              style={inputStyle}
            />
          )}

          <input
            type="submit"
            value="S'inscrire"
            style={{
              ...inputStyle,
              backgroundColor: '#ba926c',
              color: '#fff',
              cursor: 'pointer',
              border: 'none',
            }}
          />
        </form>

        <form style={{ display: !register ? 'flex' : 'none', flexDirection: 'column' }}>
          <input
            type="email"
            placeholder="Votre email"
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Votre mot de passe"
            style={inputStyle}
          />

          <input
            type="submit"
            value="Se connecter"
            style={{
              ...inputStyle,
              backgroundColor: '#ba926c',
              color: '#fff',
              cursor: 'pointer',
              border: 'none',
            }}
          />
        </form>

        <p style={{ textAlign: 'center', cursor: 'pointer' }} onClick={handleClick}>
          {register ? 'Vous avez déjà un compte ? Se connecter' : "Vous n'avez pas de compte? S'inscrire"}
        </p>
      </div>
    </div>
  );
}
