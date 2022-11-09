import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const ServiceReview = () => {
    const {user} = useContext(AuthContext);
  return (
    <div className="ml-36">
      <h1 className=" dancing text-5xl">Client Review</h1>
      <div className="w-1/2  mt-10">
        {
            user?.uid ?
            <>
             <form className="form-control">
          <label className="label">
          </label>
          <textarea
            className="textarea textarea-bordered h-12"
            placeholder="Write your review"
          ></textarea>
          <label className="label">
            <span className="label-text-alt">Your bio</span>
            <span className="label-text-alt">Alt label</span>
          </label>
        </form>
            </>
            :
            <p>Please <Link to='/login'><button className="btn btn-link">Login</button></Link> Add You Review</p>
        }
       
      </div>
    </div>
  );
};

export default ServiceReview;
