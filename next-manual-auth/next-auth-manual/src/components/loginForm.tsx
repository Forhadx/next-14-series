"use client";

import { login } from "@/actions";
import axios from "axios";
import { useState } from "react";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const formHandler = async (e: any) => {
    e.preventDefault();
    setErrorMsg("");
    try {
      let user: any = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/login`,
        {
          userName,
          password,
        }
      );

      if (user?.data?.success) {
        login(user?.data?.data);
      }
    } catch (err) {
      setErrorMsg(err?.response?.data?.message);
      console.log(err);
    }
  };

  return (
    <form onSubmit={formHandler}>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        name="username"
        required
        placeholder="username"
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        name="password"
        required
        placeholder="password"
      />
      <button type="submit">Login</button>
      {errorMsg && <p className="text-red=500">{errorMsg}</p>}
    </form>
  );
};

export default LoginForm;
