"use client";

import { useState } from "react";
import { Play } from "lucide-react";

export default function LoginSection() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <section className="py-14 bg-[#000c2a]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-xl flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 p-8 flex items-center justify-center">
            <div className="text-center">
              <img
                src="/images/lightimage.png"
                alt="Skill Assessment Library"
                className="max-w-full object-fill"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-[#00418d] p-8 flex items-center">
            <div className="w-full">
              <h2 className="text-xl font-bold text-white mb-6">
                Sign in to Skill Kwiz
              </h2>
              {!showSignup ? (
                <form
                  className="space-y-4"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a8e8]"
                  />
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center text-white">
                      <input type="checkbox" className="h-4 w-4 mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="text-white hover:underline">
                      Forget Password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium hover:bg-opacity-90"
                  >
                    Sign In
                  </button>
                  <div className="text-center text-white pt-2">
                    <p className="text-sm text-gray-200">
                      Don&apos;t have an account?{" "}
                      <button
                        type="button"
                        onClick={() => setShowSignup(true)}
                        className="text-[#6fdcff] font-semibold hover:underline"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>
                </form>
              ) : (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setShowSignup(false);
                  }}
                >
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none"
                    required
                  />
                  <input
                    type="password"
                    placeholder="Create Password"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#f73e5d] text-white p-3 rounded-md font-medium"
                  >
                    Create Account
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSignup(false)}
                    className="w-full text-white text-sm hover:underline"
                  >
                    Back to Sign In
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
