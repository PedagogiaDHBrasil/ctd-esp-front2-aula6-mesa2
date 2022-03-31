import React, { useState } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const [notifications, setNotifications] = useState(false);

  const dispatch = useDispatch();

  const handleSaveSettings = () => {
    dispatch({ type: "SAVE_SETTINGS", notifications });
    alertNotification();
  };

  const alertNotification = () => {
    alert(
      notifications ? "Opção: Ativo foi salvo!" : "Opção: Desativo foi salvo!"
    );
  };

  return (
    <article className="container-notification">
      <h1>
        Deseja receber notificação de notícias em seu emamil sobre a série de
        desenho Rick and Morty?
      </h1>
      <p>
        Status:
        <strong>{notifications ? " Ativo" : " Desativo"}</strong>
      </p>

      <button onClick={() => setNotifications(!notifications)}>
        {notifications ? "Desativar" : "Ativar"}
      </button>
      <br />
      <br />
      <button onClick={handleSaveSettings} className="button-save">
        Salvar
      </button>
    </article>
  );
};

export default App;
