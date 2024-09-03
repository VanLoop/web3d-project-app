import "./Login.css";
import { useCallback, useEffect, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user, loginGoogleWithPopUp, logout, observeAuthState, loading, error } =
    useAuthStore();

  const navigate = useNavigate();
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    observeAuthState();
  }, [observeAuthState]);

  useEffect(() => {
    if (user) {
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      UserDAO.createUser(newUser);
      navigate("/World");
    }
  }, [user, navigate]);

  const handleLogin = useCallback(async () => {
    try {
      await loginGoogleWithPopUp();
    } catch (err) {
      setShowError(true);
    }
  }, [loginGoogleWithPopUp]);

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Cargando...</p>
      </div>
    );
  }

  return (
    <div className="container-login">
      <div className="box">
        {showError && <p className="error-text">Hubo un error al iniciar sesión. Por favor, inténtalo de nuevo.</p>}
        {user ? (
          <>
            <h1 className="welcome-text">¡Hola, {user.displayName}!</h1>
            <button className="button-logout" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </>
        ) : (
          <div className="login-buttons">
            <h1 className="welcome-message">¡Bienvenido!</h1>
            <button className="button-login" onClick={handleLogin}>
              Iniciar sesión
            </button>
            {error && <p className="error-text">Error: {error.message}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;

