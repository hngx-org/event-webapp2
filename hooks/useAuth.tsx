import { User } from "@/@types";
import { useEffect, useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myToken = localStorage.getItem("token");
    const myUser = localStorage.getItem("user");

    if (myToken) {
      setToken(myToken);
    }

    if (myUser) {
      setUser(JSON.parse(myUser));
    }
    setLoading(false);
  }, []);

  return { user, token, loading };
}
