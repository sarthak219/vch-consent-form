import React, { useState } from "react";
import "../src/assets/Css/App.css"
import ConsentForm from "./components/Forms/ConsentForm";
import SubmissionSuccess from "./components/views/SubmissionSuccess";

function App() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <div className="form-container my-sm-2">
        {!submitted ? 
        <ConsentForm setSubmitted={setSubmitted}/> 
        :
        <SubmissionSuccess setSubmission={setSubmitted}/>
        }
      </div>
    </>
  );
}

export default App;
