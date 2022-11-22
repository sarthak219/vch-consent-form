import React from "react";
import AuthForm from "./components/Forms/AuthForm";
import "../src/assets/Css/App.css"

function App() {
  return (
    <>
      {/* <div className="d-flex flex-direction-column justify-content-center p-5 align-items-center"> */}
      <div className="form-container">
        <AuthForm />
      </div>
    </>
  );
}

export default App;
