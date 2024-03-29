import React from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

export default function LoginPage() {
  return (
    <div className="flex items-center min-h-screen p-4 bg-gray-100 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-3xl shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md w-full">
        <div className="p-5 bg-white md:flex-1">
          <div className="flex items-center my-3 text-4xl font-bold tracking-wider text-left">
            <a href="#">LOGO</a>
            <div className="w-full flex flex-grow lg:flex items-baseline lg:items-baseline lg:w-auto py-2 z-50 justify-end">
            <button className="bg-gray-950 border-none hover:bg-gray-950 text-white font-normal py-2 px-3 rounded-full mr-4 transition-colors duration-300 btn">
              <a href="../auth/register">Sing Up</a>
            </button>
            <button className="text-white hover:bg-gray-950 bg-gray-950 py-2 px-3 rounded-full font-normal transition-colors duration-300 btn">
              <a href="../auth/login">Join Us</a>
            </button>
          </div>
          </div>

          <h3 className="my-4 text-2xl font-semibold text-gray-700">
            Account Login
          </h3>
          <form action="#" className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-1">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="email" label="Email" />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
                <Input type="password" label="Password" />
              </div>
              <div className="flex items-center space-x-2 justify-between">
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="remember"
                    className="w-4 h-4 transition duration-300 rounded focus:ring-2 focus:ring-offset-0 focus:outline-none focus:ring-blue-200"
                  />
                  <label className="text-sm font-semibold text-gray-500">
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-sm text-right text-blue-600 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-gray-950 rounded-full shadow hover:bg-gray-600 focus:outline-none focus:ring-gray-200 focus:ring-4"
              >
                Log in
              </button>
              <div className="text-lg font-semibold text-dark text-center py-5">
                Dont have a account?{" "}
                <a
                  href="#"
                  className="font-semibold no-underline text-blue-600"
                >
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
        <div className="p-5 md:flex-1 flex flex-col hidden md:flex  gradient-bg">
          <div className="w-full flex flex-grow lg:flex items-baseline lg:items-baseline lg:w-auto py-2 z-50 justify-end">
            <button className="bg-transparent border-none hover:bg-gray-950 text-white font-normal py-2 px-4 rounded-full mr-4 transition-colors duration-300">
              <a href="../auth/register">Sing Up</a>
            </button>
            <button className="border-solid border-1 text-white hover:bg-gray-950 hover:border-gray-950 border-white py-2 px-4 rounded-full mr-2 transition-colors duration-300">
              <a href="../auth/login">Join Us</a>
            </button>
          </div>

          <div className="my-3 text-4xl font-bold tracking-wider text-center z-50">
            <a href="#">Lorem</a>
          </div>

          <p className="mt-6 font-normal text-left text-gray-300 md:mt-0 z-50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            omnis, aliquid facere harum vitae inventore.
          </p>
          <p className="mt-6 text-sm text-left text-gray-300 z-50">
            Read our{" "}
            <a href="#" className="underline">
              terms
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              conditions
            </a>
          </p>
          <svg xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="goo">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="10"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                  result="goo"
                />
                <feBlend in="SourceGraphic" in2="goo" />
              </filter>
            </defs>
          </svg>
          <div className="gradients-container absolute">
            <div className="g1"></div>
            <div className="g2"></div>
            <div className="g3"></div>
            <div className="g4"></div>
            <div className="g5"></div>
            <div className="interactive"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
