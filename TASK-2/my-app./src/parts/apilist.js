import React from "react";
import Card from "./fetchapi";
const applist = ({ imgxx }) => {
  return (
    <div>
      {imgxx.map((user, i) => {
        //Map function like in python, maps all the elements( key value pairs one by one)
        return (
          <Card
            key={i}
            name={imgxx[i].first_name}
            id={imgxx[i].id}
            email={imgxx[i].email}
            lname={imgxx[i].last_name}
          />
        );
      })}
    </div>
  );
};
export default applist;
