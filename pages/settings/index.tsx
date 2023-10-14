import Header from "@/components/header";
import SettingsLayout from "@/components/layout/SettingsLayout";
import MainLayout from "@/components/layout/mainLayout";

export default function settings() {
  return (
    <MainLayout>
      <div className="w-full">
        <Header
          title="Settings"
          info="Configure the settings to suit your preferences"
        />

        <SettingsLayout>
          <div className="p-4 mb-4 rounded-lg w-fit bg-[#FFEEEB] flex items-center gap-2.5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_20_15514)">
                <path
                  d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
                  stroke="#33313E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
                  stroke="#33313E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_15514">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <p className="font-bold text-lg">Notifications Settings</p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className=" font-semibold text-lg">Event Updates</h3>
                <p className="max-w-[75%] text-black/70">
                  Be the first to know about event changes, updates, and
                  important announcements.
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#ABA0B5] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3F3849]/20  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#3F3849]"></div>
              </label>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className=" font-semibold text-lg">
                    Networking Opportunities
                  </h3>
                  <p className="max-w-[75%] text-black/70">
                    Get notified about potential networking opportunities at
                    events you’re attending
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-[#ABA0B5] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3F3849]/20  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#3F3849]"></div>
                </label>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className=" font-semibold text-lg">Email Notifications</h3>
                <p className="max-w-[75%] text-black/70">
                  Set up reminders for upcoming events to make sure you never
                  miss out.
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#ABA0B5] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3F3849]/20  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#3F3849]"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className=" font-semibold text-lg">
                  Push Notifications and in-app
                </h3>
                <p className="max-w-[75%] text-black/70">
                  Set up reminders for upcoming events to make sure you never
                  miss out.
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#ABA0B5] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3F3849]/20  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#3F3849]"></div>
              </label>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <h3 className=" font-semibold text-lg">Reminders</h3>
                <p className="max-w-[75%] text-black/70">
                  Set up reminders for upcoming events to make sure you never
                  miss out.
                </p>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#ABA0B5] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#3F3849]/20  rounded-full peer  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-[#3F3849]"></div>
              </label>
            </div>
          </div>
        </SettingsLayout>
      </div>
    </MainLayout>
  );
}
