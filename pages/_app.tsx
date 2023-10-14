import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import http from "@/http/interceptor";
import { AuthProvider } from "@/provider/AuthProvider";

export const metadata: Metadata = {
  title: "Events App",
  description: "Zuri Events App",
};

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  //   useEffect(() => {
  //     const handleRouteChange = async (url: string) => {
  //       const response = await http.get("/profile/");
  //       console.log(response);
  //       const { message } = response.data;
  //       if (message !== "User login successful" && (url !== "/" || "/auth")) {
  //         router.replace("/auth");
  //       } else if (
  //         message === "User login successful" &&
  //         (url === "/" || "/auth")
  //       ) {
  //         router.replace("/timeline");
  //       }
  //     };

  //     router.events.on("routeChangeStart", handleRouteChange);

  //     return () => {
  //       router.events.off("routeChangeStart", handleRouteChange);
  //     };
  //   }, []);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
