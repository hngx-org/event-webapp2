import React, { useState } from "react";

type Content = {
  title: string;
  body: string;
};
type HelpProp = {
  content: Content;
  initiallyOpen?: boolean;
};
// Reusable Modal component
const HelpToggle: React.FC<HelpProp> = ({ content, initiallyOpen = false }) => {
  const [show, setShow] = useState(initiallyOpen);

  const toggleDisplay = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="grid gap-[15px] w-full transition-all border-b-[1px] py-[15px] border-b-black ">
      <div className="flex justify-between items-center gap-[25px]">
        <h3 className="uppercase font-semibold text-lg">{content.title}</h3>
        <button
          onClick={toggleDisplay}
          className="w-[30px] h-[30px] rounded-[50%] text-lg"
        >
          {show ? <>&#8593;</> : <>&#8595;</>}
        </button>
      </div>
      {show && <p className="text-base text-black/70">{content.body}</p>}
    </div>
  );
};

export default HelpToggle;
