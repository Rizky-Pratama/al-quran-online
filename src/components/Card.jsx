import React from "react";

function Title({ children }) {
  return <h2 className="card-title">{children}</h2>;
}

function Body({ children }) {
  return <p>{children}</p>;
}

function Footer({ children }) {
  return (
    <div className="card-actions justify-end">
      <button className="btn btn-primary">{children}</button>
    </div>
  );
}

export default function Card({ children }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {/* <Title />
        <Body />
        <Footer/> */}
        {children}
      </div>
    </div>
  );
}

export { Title, Body, Footer };
