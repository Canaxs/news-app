import React from 'react'

 const SubmitProgress = (props) => {
     const {pendingApiCall,text} = props;
  return (
        <button className='btn btn-primary'>
        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{text}
    </button>
  )
}

export default SubmitProgress;
