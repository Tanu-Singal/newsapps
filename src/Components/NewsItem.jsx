
import React from 'react'
import defaultimage from './collection-newspapers.webp'
const NewsItem = (props) => {
  return (
    <div>
        <div className="my-3"> 
        <div className="card" >
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '90%' , zIndex:'1'}}>{props.source}</span>
  <img src={!props.imageurl?defaultimage:props.imageurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}...</h5>
    <p className="card-text">{props.description}...</p>
    <p className="card-text"><small className="text-muted">By {props.author?props.author:"unknown"} on {new Date(props.date).toGMTString()}</small> </p>
    <a href={props.newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>
      </div>
    </div>
  )
}

export default NewsItem