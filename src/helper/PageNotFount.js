import React from "react";

import image from "../img/pnf.jpg";
const PageNotFount = () => {
  return (
    <div className="flex gap-5  flex-col mx-auto justify-center items-center px-4">
      <img src={image} alt="" className="max-w-[1000px] rounded-lg w-screen" />
      <div className=" text-2xl font-bold  text-center gap-6">
        <h1>Oops! Something went wrong.</h1>
        <h1>Page Not Found</h1>
      </div>
    </div>
  );
};

export default PageNotFount;