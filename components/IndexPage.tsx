"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const IndexPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleRegisterClick = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  const handleCloseLogin = () => {
    setShowLogin(false);
  };

  const handleCloseRegister = () => {
    setShowRegister(false);
  };

  return (
    <div>
      <button onClick={handleLoginClick}>Iniciar sesión</button>
      <br />
      <button onClick={handleRegisterClick}>Registro</button>
      {showLogin && !showRegister && <Login onClose={handleCloseLogin} />}
      {showRegister && !showLogin && <Register onClose={handleCloseRegister} />}
    </div>
  );
};

export default IndexPage;
