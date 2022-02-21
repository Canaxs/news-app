import React from 'react'

const Inpust = (props) => {
        const {onChange,types,placeholder} = props;
        return (
            <div>
                <form>
                <div className="input-group mb-3">
                    <input type={types} className='form-control' aria-label="Text input with checkbox" placeholder={placeholder} onChange={onChange}/>
                </div>
                </form>
            </div>
        )
    }
export default Inpust;
