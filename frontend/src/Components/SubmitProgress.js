import React from 'react'

 const SubmitProgress = (props) => {
     const {onClick,pendingApiCall,text,disabled} = props;
  return (
        <button className='btn btn-primary'onClick={onClick} disabled={disabled}>
        {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{text}
    </button>
  )
}

export default SubmitProgress;
