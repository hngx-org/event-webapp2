import { User } from "@/@types";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myToken = Cookies.get("token");
    const myUser = Cookies.get("user");

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
