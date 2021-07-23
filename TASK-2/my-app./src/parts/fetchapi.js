import React from 'react';
const apires = ({ name, email, id, lname}) => {
    return (
      <div className="peopleimages" style={{display:'flex',flexDirection:'column',alignItems:'center',width:'700px',backgroundColor:'rgb(253, 255, 143)'}}>
        <img src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
          <h2>{name} {lname}</h2>
          <h3>{email}</h3>
        </div>
      </div>
    );
  }
export default apires;
