import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import CommnentApi from '../api/CommnentApi'

const CommnentDetails = () => {

    const { id } = useParams()//passes an id to the get the id of the Commnent
    const [CommnentDetail, setCommnentDetail] = useState([])
    
    //function that uses axios to get the details for each Commnent
    const getTheCommnent = () => {
        CommnentApi.getCommnent({ params: { id } })
            .then(response => {
                setCommnentDetail(response.data)
            
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    useEffect(() => {
        //function call to retrieve the Commnent
        getTheCommnent()

    },[])
    
    return ( 
        <div className='Commnent-details'>
            <h2>Commnent Details</h2>
           {CommnentDetail.map(Commnents => (
            <div key={Commnents.id}>{/*outputs the return of each Commnent details */}
                <ul className="list-group">
                  <li className="list-group-item active"> Commnent ID: {Commnents.id}</li>
                  <li className="list-group-item">Title: {Commnents.title}</li>
                  <p className="list-group-item">Body: {Commnents.body}</p>
                </ul>
                </div>
            ))}
        </div>
     );
}
 
export default CommnentDetails;