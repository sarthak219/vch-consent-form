import React from 'react'
import "../../assets/Css/submissionSuccessStyle.css"

function SubmissionSuccess({setSubmission}) {
    // const [canGoBack, setCanGoBack] = useState(true);

    // useEffect(()=>{
    //     setCanGoBack(true);
    // }, [])

    // useEffect(() => {
    //     if(canGoBack) {
    //         setTimeout(()=>{
    //             setCanGoBack(false);
    //         }, [5000])
    //     }
    // }, [canGoBack])
    

    // function handleSubmit() {
    //     if(canGoBack) {
    //         setSubmission(false);
    //     }
    // }
  return (
    <div className='success-container d-flex flex-column align-items-center'>
        <h1>You have Successfully signed up for the Queue</h1>
        <p className='mt-4'>Please wait to be called.</p>
            {/* <div className="d-flex">
                <Button onClick={handleSubmit} className={"back-btn mt-3"} type={"button"} text="Back" disabled/>
            </div> */}
    </div>
  )
}

export default SubmissionSuccess