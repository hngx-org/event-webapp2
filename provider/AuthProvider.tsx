import React, { createContext, ReactNode, useContext, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config/firebase";
import { AuthContextType } from "@/@types";
import { useRouter } from "next/navigation";

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const Router = useRouter();
  const [user] = useAuthState(auth);

  const handleLogout = () => {
    auth.signOut();
  };

  const authContextValue = {
    user,
    logout: handleLogout,
  };
  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
