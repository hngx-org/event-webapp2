import * as React from "react";
import Sidebar from "@/components/layout/sidebar";
import ArrowUpLg from "@/components/icons/create-event/arrow-up-lg";
import ArrowUpSm from "@/components/icons/create-event/arrow-up-sm";
import LocationIconLg from "@/components/icons/create-event/location-lg";
import GroupIconLg from "@/components/icons/create-event/group-lg";
import LocationIconSm from "@/components/icons/create-event/location-sm";
import GroupIconSm from "@/components/icons/create-event/group-sm";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopTimePicker } from "@mui/x-date-pickers/DesktopTimePicker";
import dayjs from "dayjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import XIcon from "@/components/icons/create-event/x-icon";
import ImageUpload from "@/components/icons/create-event/image-upload";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { FormValues, UserGroups } from "@/@types";
import { toast } from "react-toastify";
import MainLayout from "@/components/layout/mainLayout";
import http from "@/http/interceptor";
import axios from "axios";
import Cookies from "js-cookie";

const today = dayjs().add(0, "day");

export default function CreateEvents(props: {
  [x: string]: any;
  components: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [image, setImage] = useState<string | null>("null");
  const [imageName, setImageName] = useState<string>("");
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [endDate, setEndDate] = useState<dayjs.Dayjs | null>(today);
  const [startTime, setStartTime] = useState<dayjs.Dayjs | null>(today);
  const [endTime, setEndTime] = useState<dayjs.Dayjs | null>(today);
  const [groups, setGroups] = useState<UserGroups[]>([]);
  const router = useRouter();
  const [file, setFile] = useState("");
  const [uploadedFile, setUploadedFile] = useState<any>("");

  const fetchGroups = async () => {
    const response = await http.get("/groups");
    setGroups(response.data.userGroups);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);

    const formData = new FormData();
    formData.append("event_name", data.title);
    formData.append("event_description", data.description);
    formData.append("location", data.location);
    formData.append("event_start", startTime ? startTime.toISOString() : "");
    formData.append("event_end", endTime ? endTime.toISOString() : "");
    formData.append("image", uploadedFile || "");
    const groupId = { groupId: data.group };
    const eventData = { ...Object.fromEntries(formData), ...groupId };

    try {
      // const response = await http.post("/events", eventData);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/events`,
        eventData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        },
      );

      if (response.status === 201) {
        toast.success("Event created successfully", {
          position: "top-right",
        });
        setTimeout(() => {
          router.push("/timeline");
        }, 3000);
      } else {
        toast.error("Could not create event", {
          position: "top-right",
        });
      }
    } catch (error: any) {
      console.error("An error occurred:", error.response.data);
      const errorMessage = error.response?.data?.error || "An error occurred";
      toast.error(errorMessage, {
        position: "top-right",
      });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];

    if (uploadedFile) {
      const fileSize = uploadedFile.size / 1024 / 1024; //To convert to MB
      if (fileSize > 5) {
        alert("File size must be greater than 5MB.");
        event.target.value = "";
      } else {
        setFile(URL.createObjectURL(uploadedFile));
        setImageName(uploadedFile.name);
        setUploadedFile(uploadedFile);
        // console.log(uploadedFile);
      }
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    setFile("");
    setImageName("");
    const input = document.getElementById(
      "image-upload-input",
    ) as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  return (
    <MainLayout title="Create Event">
      <div className="h-full lg:py-6 rounded-3xl lg:rounded-none bg-brand-gray-100">
        <div className="flex items-center gap-6">
          <Link href="/timeline">
            <ArrowUpLg />
            <ArrowUpSm />
          </Link>
          <div className="flex flex-col justify-start">
            <h1 className="text-2xl font-bold leading-10">Create Event</h1>
            <p className="xsm:hidden lg:flex text-brand-gray-400 font-normal text-base">
              Please ensure that you provide accurate information in this form
              to avoid any hiccups in this process.
            </p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 inline-flex flex-col items-start gap-8 md:w-full xsm:w-full lg:w-[591px] lg:ml-16"
        >
          <div className="flex lg:flex-row xsm:flex-col items-start gap-6 w-full">
            <label id="label" className="text-lg font-semibold">
              Event Name:
            </label>
            <div className="flex flex-col gap-1 w-full">
              <input
                type="text"
                placeholder="Enter the event name"
                className="flex flex-grow p-4 justify-center items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <p className="text-red-500">Event name is required</p>
              )}
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start gap-6 w-full">
            <label id="label" className="text-lg font-semibold">
              Event Description:
            </label>
            <div className="flex flex-col gap-1 w-full">
              <textarea
                placeholder="Enter the event description"
                className="flex flex-grow xsm:h-[122px] w-full lg:h-28 p-4 justify-center items-center gap-2 rounded-2xl border-2 lg:border-black xsm:border-brand-pink-400 bg-brand-gray-100"
                {...register("description", { required: true })}
              />
              {errors.description && (
                <p className="text-red-500">Event description is required</p>
              )}
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start gap-6 w-full">
            <label id="label" className="text-lg font-semibold">
              Event <br className="hidden lg:block" /> Image:
            </label>
            <div className="flex flex-grow px-2 py-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100">
              <div className="text-center flex items-center ">
                {file ? (
                  <>
                    <Image
                      src={file}
                      alt="Uploaded"
                      height={24}
                      width={24}
                      className="rounded items-center h-full"
                    />
                    <div className="flex justify-between w-full">
                      {imageName && <p>{imageName}</p>}
                      <button
                        onClick={handleImageRemove}
                        className="remove-button"
                      >
                        <XIcon />
                      </button>
                    </div>
                  </>
                ) : (
                  <ImageUpload />
                )}
              </div>
              <div className="flex items-center">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  accept="image/*"
                  onChange={handleImageUpload}
                  id="image-upload-input"
                  className="hidden"
                />
                {file ? null : (
                  <label
                    htmlFor="image-upload-input"
                    className="cursor-pointer text-[#9CA3AF]  max-w-[347px]"
                  >
                    Upload an image of your event
                  </label>
                )}
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start lg:items-center gap-6 w-full">
            <label id="label" className="text-lg font-semibold">
              Location:
            </label>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-grow py-2 px-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100">
                <LocationIconLg />
                <input
                  type="text"
                  placeholder="Enter event location"
                  className="w-full bg-transparent p-2"
                  {...register("location", { required: true })}
                />
              </div>
              {errors.location && (
                <p className="text-red-500">Location is required</p>
              )}
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start lg::items-center gap-6 w-full">
            <label id="label" className="text-lg font-semibold">
              Event <br className="hidden lg:block" /> Group:
            </label>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-grow py-2 px-4 items-center gap-2 rounded-2xl border-2 border-black bg-brand-gray-100">
                <GroupIconLg />
                <select
                  id="select"
                  className="flex justify-between w-full bg-transparent p-2"
                  {...register("group", {
                    required: "Event group is required", // Required validation
                  })}
                >
                  <option className="text-[#9CA3AF]" disabled selected>
                    Enter event group
                  </option>
                  {groups?.map((group) => {
                    return (
                      <option key={group.group_name} value={group.id}>
                        {group.group_name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {errors.group && (
                <p className="text-red-500">{errors.group.message}</p>
              )}
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start gap-6">
            <label
              id="label"
              className="text-lg font-semibold inline-flex gap-1"
            >
              <span className="xsm:hidden lg:inline-flex">Event</span> Starts:
            </label>
            <div className="flex items-center gap-6">
              <div className="flex flex-col justify-center items-start gap-1">
                <label
                  htmlFor="date"
                  className="font-medium text-base text-black opacity-70"
                >
                  Date
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    openTo="day"
                    format="DD/MM/YY"
                    defaultValue={null}
                    className="datepicker"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <label
                  htmlFor="time"
                  className="font-medium text-base text-black opacity-70"
                >
                  Time
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopTimePicker
                    defaultValue={today}
                    className="timepicker"
                    value={startTime}
                    onChange={(newValue) => setStartTime(newValue)}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row xsm:flex-col items-start gap-6">
            <label
              id="label"
              className="text-lg font-semibold inline-flex gap-1"
            >
              <span className="xsm:hidden lg:inline-flex">Event </span> Ends:
            </label>
            <div className="flex items-center gap-6">
              <div className="flex flex-col justify-center items-start gap-1">
                <label
                  htmlFor="date"
                  className="font-medium text-base text-black opacity-70"
                >
                  Date
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    views={["day", "month", "year"]}
                    openTo="day"
                    format="DD/MM/YY"
                    defaultValue={null}
                    className="datepicker"
                    disablePast
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                </LocalizationProvider>
              </div>
              <div className="flex flex-col justify-center items-start gap-1">
                <label
                  htmlFor="time"
                  className="font-medium text-base text-black opacity-70"
                >
                  Time
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopTimePicker
                    defaultValue={today}
                    className="timepicker"
                    value={endTime}
                    onChange={(newValue) => setEndTime(newValue)}
                    sx={{
                      "& .MuiInputAdornment-root": {
                        display: "", // Hide the default icon
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className="mt-9 md:mb-36 inline-flex justify-center items-center gap-2 py-5 px-6 md:rounded-2xl rounded-full bg-brand-pink-400 text-black text-base font-bold text-center min-w-[295px] md:min-w-[312px]"
            >
              Create Event
            </button>
          </div>
        </form>
      </div>
      {/* 
                <div className='lg:hidden xsm:block px-8'>
                    <div className='flex lg:flex-row xsm:flex-col lg:items-center gap-2 mx-4'>
                        <div className='flex gap-2 items-center p-2'>
                            <LocationIconSm />
                            <button className='lg:text-primary xsm:text-white text-base font-bold underline'>Add location</button>
                        </div>
                        <div className='flex gap-2 items-center p-2'>
                            <GroupIconSm />
                            <button className='lg:text-primary xsm:text-white text-base font-bold underline'>Select Groups</button>
                        </div>
                        
                    </div>
                    <button type='submit' className='mt-14 inline-flex justify-center items-center gap-2 py-5 px-6 lg:rounded-2xl xsm:rounded-full bg-brand-pink-400 text-black text-base font-bold text-center lg:w-[312px] xsm:w-full'  onClick={handleSubmit(onSubmit)}>
                        Create Event
                    </button>
                </div> */}
    </MainLayout>
  );
}
