import React, { useState,useEffect } from 'react'
import {getPageGame} from "../api/apiCalls"
import Navbar from '../fixedComponents/Navbar';
import NewsCard from "../fixedComponents/NewsCard";
import { useParams } from 'react-router-dom';
import { ApiProgress } from '../api/apiProgress';
import Spinner from '../fixedComponents/Spinner';
import Error from '../fixedComponents/Error';

const Game = (props) => {
    const [cont,setCont] = useState();
    const [error,setError] = useState(false);
    const pendingApiCall = ApiProgress("get",`/api/1.0/game/page?`);
    const {id} = useParams();

    useEffect(() => {
        if(isNaN(id)) {
           const {push} = props.history;
           push("/game/0");
           window.location.reload();
        }
        else {
            loadTechno(id)
        }
      },[])
    const loadTechno = async page => {
        await getPageGame(page).then(res => {
            if(res.data.content.length !== 0){
                setCont(res.data)
            }
            else {
                setError(true);
            }
        })
    }
    const onClickNext = () => {
        const next = cont.number + 1;
        const {push} = props.history;
        push('/game/'+next);
        loadTechno(next);
    }
    const onClickPrevious = () => {
        const previous = cont.number - 1;
        const {push} = props.history;
        push("/game/"+previous);
        loadTechno(previous);
    }

    if(error) {
        return (
            <div>
                <Error />
            </div>
        )
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
                <NewsCard title={e.title} topic={e.topic} key={e.title} id={e.id} news={"game"}/>
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

export default Game