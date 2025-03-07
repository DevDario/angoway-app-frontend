import React from "react";
import Login from "./auth/login";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  //check if the user is authenticated (mock)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLogged = false;

      if (isLogged) {
        router.navigate("/routes");
      } else {
        router.navigate("auth/login");
      }
    }, 1000);

    clearTimeout(timeout);
  }, []);

  return <Login />;
}
