import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {

    useTitle('Add Service')
   const handleAddService = event =>{
    event.preventDefault();
    
    const form = event.target;
    const service_name = form.service_name.value;
    const price= form.price.value;
    const details = form.details.value;
    const img = form.img.value;
    const date = new Date();
    console.log(service_name, price)
    const service = {
        service_name,
        price,
        details,
        img,
        date
    }

    fetch('http://localhost:5000/services', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(service)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.acknowledged){
            alert('Successfully added service');
            event.target.reset();
        }
    })
    .catch(e=> console.log(e));
   }

    return (
        <div>
            <div>
      <div className="text-center mt-8 font-bold">
        <h2 className="text-8xl dancing text-pink-500">ADD  SERVICE</h2>
        
      </div>
      <div className="m-16 bg-gray-100 p-20 rounded text-center">
        <form onSubmit={handleAddService}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <input
              type="text"
              name="service_name"
              placeholder="Enter Service Name"
              className="input input-bordered w-3/4 mb-8"
              required
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              className="input input-bordered w-3/4 mb-8 "
              required
            />
            <input
              type="text"
              name = "details"
              placeholder= "Details"
              className="input input-bordered w-3/4 mb-8"
              required
            />
            <input
              type="text"
              placeholder="Image URL"
              name= "img"
              className="input input-bordered w-3/4 mb-8  "
              required
            />
          </div>
          <div className="text-center">
        <button className="btn btn-outline btn-secondary w-60 ">Add Service</button>
        </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddService;