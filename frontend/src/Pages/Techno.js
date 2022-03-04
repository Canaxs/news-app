import React, { useState,useEffect } from 'react'
import {getPageTechno} from "../api/apiCalls"
import Navbar from '../fixedComponents/Navbar';
import NewsCard from "../fixedComponents/NewsCard";
import { useParams } from 'react-router-dom';
import { ApiProgress } from '../api/apiProgress';
import Spinner from '../fixedComponents/Spinner';

const Techno = (props) => {
    const [cont,setCont] = useState();
    const pendingApiCall = ApiProgress("get",`/api/1.0/techno/page?`);
    const {id} = useParams();

    useEffect(() => {
        loadTechno(id);
      },[])

    const loadTechno = page => {
        getPageTechno(page).then(res => {
            setCont(res.data)
        })
    }
    const onClickNext = () => {
        const next = cont.number + 1;
        const {push} = props.history;
        push('/techno/'+next);
        loadTechno(next);
    }
    const onClickPrevious = () => {
        const previous = cont.number - 1;
        const {push} = props.history;
        push("/techno/"+previous);
        loadTechno(previous);
    }

    if(pendingApiCall) {
        return (
            <div>
            <Navbar />
            <Spinner />
            </div>
        )
    }

        return (
            <div>
                <Navbar />
                <h5 className='text-white mt-3'>Page {cont && cont.pageable.pageNumber+1}</h5>
                {cont && cont.content.map(e => (
                <NewsCard title={e.title} topic={e.topic} key={e.title}/>
                ))}
                <div className='d-flex justify-content-center w-100'>
                { cont && cont.first === false && (
                    <button className="btn btn-sm btn-light m-1 w-25" onClick={() => onClickPrevious()}>
                    Previous
                    </button>
                )}
                {cont && cont.last === false && (
                    <button className="btn btn-sm btn-light m-1 w-25" onClick={() => onClickNext()}>
                    Next
                    </button>
                )}
                </div>
                
            </div>
  )
}

export default Techno