"use client";
import { useEffect, useState } from "react";

export default function AuthForm() {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setSiningIn] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    // Handle login
  }

  async function handleSignUp(e) {
    e.preventDefault();
    // Handle sign up
  }

  let signInMessage = "Sign in";
  if (isSigningIn) {
    signInMessage = "Signing in";
  } else if (isNewUser) {
    signInMessage = "Signing up";
  }

  return (
    <form
      action=""
      className="flex flex-col mx-auto w-3/4"
      onSubmit={isNewUser ? handleLogin : handleSignUp}
    >
      <fieldset className="flex flex-col gap-4 my-4">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered input-md w-full"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-md w-full"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </fieldset>
      <button className="btn btn-primary mt-8" type="submit">
        {signInMessage}
      </button>
      <p className="text-center mt-4">
        {isNewUser ? (
          <>
            Already have an account?{" "}
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => setIsNewUser(false)}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              className="btn btn-ghost"
              type="button"
              onClick={() => setIsNewUser(true)}
            >
              Sign Up
            </button>
          </>
        )}
      </p>
    </form>
  );
}
