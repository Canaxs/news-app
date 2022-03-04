import React from 'react';
import image2 from '../images/5.jpg';

const NewsCard = (props) => {
    const {title,topic,href} = props;
  return (
    <div className='w-100 d-flex justify-content-center'>
        <div className="card mb-3 mt-5 w-50 bg-dark">
            <img className="card-img-top md-h-75" src={image2} alt="Card image cap" />
            <div className="card-body text-white">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{topic}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href=''><button type="button" className={`btn btn-primary btn-lg`}>Read More</button></a>
        </div>
        </div>
    </div>
  )
}

export default NewsCard;