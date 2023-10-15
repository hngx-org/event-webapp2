import React, { useState, useContext, useEffect } from "react";
import Image from "next/image";
import Artboard from "@/public/assets/auth/Artboard.png";
import Logo from "@/public/assets/auth/logo.svg";
import Google from "@/public/assets/icon/Google.svg";
import Twitter from "@/public/assets/icon/Twitter.svg";
import PageIndicator from "@/public/assets/icon/pageIndicator.svg";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LoadingSVG } from "@/components/layout/TimelineEvents";
import { User } from "@/@types";
import { useAuth } from "@/hooks/useAuth";
import axios from "axios";

type dataRes = {
  data: User;
  message: string;
  statusCode: number;
};

export default function Auth() {
  const router = useRouter();
  const clientId =
    "69712066400-eu3ddnj8njs960htlnbh9hlgrvfg6ke9.apps.googleusercontent.com";
  // const redirectUri = "http://localhost:3000";
  const redirectUri = "https://zuri-event-webapp2.vercel.app";
  const [isLoading, setIsLoading] = useState(false);

  const signInWithGoogle = () => {
    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile&access_type=offline`;
    window.location.href = authUrl;
  };

  const fetchData = async (authorizationCode: string) => {
    setIsLoading(true);
    try {
      // const callBackURL = "http://localhost:8080/api/auth/callback";
      const callBackURL =
        "https://zuri-event-webapp2.vercel.app/api/auth/callback";
      const response = await axios.get(
        `${callBackURL}?code=${authorizationCode}`,
      );
      console.log(response.data);

      if (response) {
        setIsLoading(false);
        // Save token and user info
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log("push:", response.data);
        router.push("/timeline");
      }
    } catch (error: any) {
      setIsLoading(false);
      console.error(error);
      router.push("/");
      toast.error(error || "Login failed! Try again");
    }
  };

  const authorizeUser = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const authorizationCode = queryParams.get("code");

    if (authorizationCode) {
      console.log("Authorization Code:", authorizationCode);
      await fetchData(authorizationCode);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/timeline");
    } else {
      authorizeUser();
    }
  }, []);

  const signInWithTwitter = () => {
    toast.error(
      "Sign in with Twitter not available right now.\nUse Google Sign in",
    );
  };

  if (isLoading) {
    return <LoadingSVG />;
  }
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="min-h-screen grid lg:grid-cols-2">
        <div className="hidden md:flex py-2 bg-[#3F3849] justify-center items-center">
          <div className="text-center">
            <Image src={Artboard} width={400} height={480} alt="Artboard" />
            <div className="mb-10">
              <h4 className="text-[2.5rem] lg:text-[3rem] font-bold text-white">
                Wetin<span className="text-[#884ED0]">Dey</span>Sup
              </h4>
              <p className="mt-4 text-gray-400 text-[1.15rem] lg:text-[1.25rem]">
                All your events in one place,
                <br /> connect and socialize
              </p>
              <div className="hidden lg:flex mt-6 w-full justify-center">
                <Image src={PageIndicator} width={80} alt="Page Indicator" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#F7F6F8] pt-4 md:pt-14">
          <Image
            src={Logo}
            className="pl-8"
            width={200}
            height={60}
            alt="Logo"
          />
          <div className="px-8 md:px-12 lg:px-16 mb-6 flex justify-center items-center min-h-screen md:min-h-full lg:min-h-[500px] xl:h-[80%]">
            <div>
              <Image
                src={Artboard}
                width={400}
                height={480}
                alt="Artboard"
                className="md:hidden mx-auto"
              />
              <h4 className="font-bold text-[1.5rem] md:ext-[2rem]">
                Welcome on Board!
              </h4>
              <p className="mt-3 text-[0.8rem] md:text-[1rem] text-gray-600">
                We&#8217;re glad you&#8217;re here. Discover, Create, and Share
                Memorable Moments with a Thriving Community of Event Lovers.
              </p>
              <div className="mt-5 lg:pr-20 xl:pr-40">
                {/* <Link href="/timeline"> */}
                <button
                  disabled={isLoading}
                  onClick={signInWithGoogle}
                  className="flex text-sm md:text-md justify-center w-full bg-white hover:bg-gray-100 py-4 border border-gray-400 font-semibold rounded-xl"
                >
                  <Image
                    src={Google}
                    width={23}
                    height={23}
                    className="mr-3"
                    alt="Google SVG"
                  />
                  Continue with Google
                  {isLoading && <ClipLoader className="ml-3" size="15px" />}
                </button>
                {/* </Link> */}

                {/* <Link href="/timeline"> */}
                <button
                  onClick={signInWithTwitter}
                  className="mt-5 flex text-sm md:text-md justify-center w-full bg-red-300 hover:bg-red-300/90 py-4 border border-white font-semibold rounded-xl"
                >
                  <Image
                    src={Twitter}
                    width={23}
                    height={23}
                    className="mr-3"
                    alt="Twitter SVG"
                  />
                  Continue with Twitter
                </button>
                {/* </Link> */}
              </div>
              <p className="mt-6 text-[1rem] text-gray-600">
                By continuing, you agree with our{" "}
                <span className="font-semibold text-black">privacy policy</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
