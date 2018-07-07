import React from 'react';

function Output(props) {
 return(
   <div className="row">
     <div className="col-md-8 push-md-2">

         <div className="card-block mt-4 text-center">
           <h3 className="mb-2">{props.title}</h3>
           <p>{props.description}</p>
            <a className="results" href={props.link} target="_blank">Read more</a>
         </div>

     </div>
   </div>
 );
}
export default Output;
