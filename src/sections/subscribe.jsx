import React from "react";
import Button from "../components/Button";
const subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-lg font-palanquin font-bold">
        Sign up from
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-2.5 p-2.5 sm:border sm:border-slate-gray rounded-full ">
        <input
          type="text"
          placeholder="tew@gmail.com"
          className="sm:flex-1 max-sm:w-full text-base leading-normal text-slate-gray pl-5 max-sm:p-5 outline-none   border max-sm:border-slate-gray max-sm:rounded-full"
        />
        <div className="flex  max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </div>
    </section>
  );
};

export default subscribe;
