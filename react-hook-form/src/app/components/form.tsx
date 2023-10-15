"use client";
import { error } from "console";
import { useState } from "react";
import { useForm } from "react-hook-form";
export const Form = () => {
  const { register, handleSubmit, control } = useForm();
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const onSubmit = (data: any) => {
    console.log("Submit Fun");
    console.log(control);
    console.log(data);
  };
  return (
    <div className=" w-full h-[100vh] bg-[green] flex flex-col items-center justify-center">
      <div className=" w-96 h-96 bg-white rounded-2xl">
        <h1 className=" text-2xl font-bold text-center mt-4">
          Registration Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" flex flex-col ml-3 mt-4">
            <label>Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              onChange={(e) => {
                setState((prevState: any) => ({
                  ...prevState,
                  username: e.target.value,
                }));
              }}
              className=" w-[70%] border-[2px] border-solid border-black mt-2"
              placeholder="Enter Username"
            ></input>
          </div>
          <div className=" flex flex-col ml-3 mt-4">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }));
              }}
              className=" w-[70%] border-[2px] border-solid border-black mt-2"
              placeholder="Enter Email"
            ></input>
          </div>
          <div className=" flex flex-col ml-3 mt-4">
            <label>Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              onChange={(e) => {
                setState((prevState) => ({
                  ...prevState,
                  password: e.target.value,
                }));
              }}
              className=" w-[70%] border-[2px] border-solid border-black mt-2"
              placeholder="Enter Password"
            ></input>
          </div>
          <div className=" flex justify-center mt-8">
            <button type="submit" className=" bg-[green] w-24 h-11 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
      <h1>{state.username}</h1>
      <h1>{state.email}</h1>
      <h1>{state.password}</h1>
    </div>
  );
};
