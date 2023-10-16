import Header from "@/components/header";
import HelpToggle from "@/components/helpToggle";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/mainLayout";
import React, { useState } from "react";

export default function Help() {
  const [show, setShow] = useState<boolean>(false);
  const toggleDisplay = () => {
    setShow((prev) => !prev);
  };
  return (
    <MainLayout>
      <div className="w-full">
        <Header
          title="Settings"
          info="Configure the settings to suit your preferences"
        />

        <SettingsLayout>
          <div className="p-4 mb-4 rounded-lg w-fit bg-[#D2F5FE] flex items-center gap-2.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z"
                fill="#33313E"
              />
            </svg>

            <p className="font-bold text-lg">Help and Support</p>
          </div>

          <div className="grid gap-[40px]">
            <div className="flex flex-col gap-[25px] justify-between items-center">
              <HelpToggle
                content={{
                  title: "Can't create event?",
                  body: "To create an event, you must first create a group, as events need to be associated with a specific group. Please ensure you have a group created before attempting to create an event.",
                }}
              />
              <HelpToggle
                content={{
                  title: "Can’t see the list of your people?",
                  body: "If you are unable to view the list of your people, the issue may originate from your end. We recommend verifying your internet connection's stability or relocating to an area with a stronger connection to retry the action.",
                }}
              />
              <HelpToggle
                content={{
                  title:
                    "Still receiving email notifications after you cancel it?",
                  body: "If you continue to receive email notifications despite having canceled them, the issue may be on our end. We sincerely apologize for any inconvenience this may have caused. Please complete this form so that we can address the matter promptly and make the necessary adjustments. Thank you for your understanding.",
                }}
              />
            </div>
            <div>
              <p className="text-base text-black/70">
                Have more questions?{" "}
                <span className="font-bold">Contact Us</span>
              </p>
            </div>
          </div>
        </SettingsLayout>
      </div>
    </MainLayout>
  );
}
