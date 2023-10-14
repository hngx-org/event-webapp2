import { useEffect } from "react";

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const response = await fetch(
    `https://events-be-python-one.vercel.app/api/events/search/rev`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer 6q234vqmp15v1dxpcsg8v0cw4wccjb4a`,
        "Content-Type": "application/json",
        //   "X-CSRF-Token": "YP5wEL1V9mtRnNq9zc4v6Fl2FnACVda",
      },
    },
  );
  console.log(response);
};
