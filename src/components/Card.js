import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow fl w-25 tc">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
