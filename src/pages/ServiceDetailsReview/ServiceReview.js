import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ReviewCart from "./ReviewCart";

const ServiceReview = ({service}) => {
  const { user } = useContext(AuthContext);
  const {_id, service_name} = service;
  const [reviews, setReviews] = useState([]);

  useEffect( ()=>{
    fetch("http://localhost:5000/reviews")
    .then(res => res.json())
    .then(data => {
      setReviews(data)
    });
  },[])
  
  const handleReview = event =>{
    event.preventDefault();
    const date = new Date();
    const userId = user?.uid;
    const email = user?.email;
    const img = user?.photoURL;
    const clientName = user?.displayName;
    const message = event.target.review.value;

    const review ={
        serviceId : _id,
        serviceName : service_name,
        date,
        email,
        img,
        clientName,
        userId,
        message
    }

    fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(review)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            alert('review added');
            event.target.reset();
        }
    })
    .catch(e=> console.log(e));
  }

  return (
    <div className="ml-36">
      <h1 className=" dancing text-5xl">Client Review</h1>

      {user?.uid ? (
        <>
          <div className="mt-10">
            <form onSubmit={handleReview} className="form-control">
              <label className="label"></label>
              <textarea
                className="textarea textarea-bordered h-12 w-1/2  "
                placeholder="Write your review"
                name="review"
              ></textarea>

              <input type="submit" className="btn w-40 bg-pink-500 border-0 my-4" value="Add Review" />
            </form>
           {
            reviews.map(review => <ReviewCart
            key={review._id}
            review={review}
            ></ReviewCart>)
           }
          </div>
        </>
      ) : (
        <p>
          Please
          <Link to="/login">
            <button className="btn btn-link">Login</button>
          </Link>
          Add You Review
        </p>
      )}
    </div>
  );
};

export default ServiceReview;
