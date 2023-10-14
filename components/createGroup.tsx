"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";
import Input from "./groupInput";
import * as yup from "yup";
import {
  CancelIcon,
  PeopleIcon,
  RedCancelIcon,
  UploadIcon,
} from "@/public/assets/icon/peopleIcon";
import Image from "next/image";
import Avatar from "assets/images/avatar.png";

const initialValues = {
  firstName: "",
};

const override: CSSProperties = {
  borderWidth: "3px",
};

const validationSchema = yup.object().shape({
  firstName: yup.string().required("Required"),
  //   lastName: yup.string().required("Required"),
  //   email: yup.string().required("Required"),
  //   roles: yup
  //     .array()
  //     .of(yup.string().required("At least one role is required"))
  //     .min(1, "At least one option is required"),
  //   warehouse: yup
  //     .array()
  //     .of(yup.string().required("At least one warehouse is required"))
  //     .min(1, "At least one option is required"),
  //   number: yup.number(),
});

export default function CreateGroup() {
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [addedFriends, setAddedFriends] = useState("");

  function uploadImage(e: any) {
    const uploadedFile = e.target.files[0];
    // console.log(e.target);

    if (uploadedFile) {
      const fileSize = uploadedFile.size / 1024 / 1024; //To convert to MB
      if (fileSize > 1) {
        setErrMsg("File size must be less than 1MB.");
        e.target.value = null;
      } else {
        setFile(URL.createObjectURL(uploadedFile));
        setErrMsg("");
      }
    }
  }

  function deleteUploadedImg() {
    setFile("");
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const onSubmit = () => {
    1;
  };
  return (
    <>
      <button
        onClick={openModal}
        className="bg-brand-pink-400/80 hover:bg-brand-pink-400 rounded-lg px-4 py-3 flex items-center gap-3 transition-colors duration-300 ease-in-out ml-auto mb-4"
      >
        <PeopleIcon />
        <span className="font-bold ">Create New Group</span>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="flex min-h-full items-center justify-center text-center p-4 md:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[450px] transform overflow-hidden max-h-[90vh] rounded-2xl bg-white py-4 md:py-6 text-left align-middle shadow-xl transition-all flex flex-col">
                  <Dialog.Title
                    as="div"
                    className="flex items-center justify-between w-full px-4 md:px-10"
                  >
                    <div className="">
                      <h3 className="text-base md:text-2xl font-bold mb-1">
                        Create a new group
                      </h3>
                      <p className="text-sm md:text-base text-brand-gray-400">
                        Please fill in the correct details
                      </p>
                    </div>

                    <button onClick={closeModal}>
                      <CancelIcon />
                    </button>
                  </Dialog.Title>

                  <div className="w-full flex-grow mt-6 mb-5 overflow-y-auto pl-4 md:pl-10">
                    <Formik
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                      onSubmit={onSubmit}
                    >
                      {(formik) => {
                        return (
                          <Form action="" autoComplete="off">
                            <div className="grid grid-cols-1 gap-6 pr-4 md:pr-8 text-sm sm:text-base">
                              {/* Group name */}
                              <Input
                                name="groupName"
                                label="Group Name"
                                type="name"
                                placeholder="Enter a group name"
                              />
                              {file ? (
                                <>
                                  <div className="h-max flex flex-col items-center justify-center gap-2 overflow-hidden rounded-2xl">
                                    <Image
                                      src={file}
                                      alt="uploaded image"
                                      width={600}
                                      height={300}
                                      className="w-full h-[200px] object-cover"
                                    />
                                    <div className=" px-6 bg-white w-full font-semibold z-30">
                                      <button
                                        onClick={deleteUploadedImg}
                                        className="flex gap-4 items-center"
                                        aria-label="Delete & re-upload"
                                      >
                                        <RedCancelIcon />
                                        <span className="text-red-700">
                                          Delete & re-upload
                                        </span>
                                      </button>
                                    </div>
                                  </div>
                                </>
                              ) : (
                                <>
                                  {/* group image */}
                                  <div className="w-full">
                                    <label
                                      className="mb-2 font-semibold"
                                      htmlFor="img"
                                    >
                                      Group Image
                                    </label>
                                    <div className="flex relative">
                                      <div className="w-full p-4 rounded-2xl border-2 border-black flex items-center gap-3">
                                        <UploadIcon />
                                        <p className="text-brand-gray-400">
                                          Upload an image of your group
                                        </p>
                                      </div>
                                      <input
                                        type="file"
                                        name="img"
                                        id="img"
                                        className="absolute inset-0 opacity-0 cursor-pointer z-20"
                                        accept=".jpg, .jpeg, .png"
                                        onChange={uploadImage}
                                      />
                                    </div>
                                  </div>
                                  {errMsg && (
                                    <p className="text-red-600">{errMsg}</p>
                                  )}
                                </>
                              )}

                              {/* Add friends */}
                              <div className="w-full">
                                <label
                                  className="mb-2 font-semibold"
                                  htmlFor="friend"
                                >
                                  Add friends to this group
                                </label>
                                <div className="flex relative">
                                  <Field
                                    type="text"
                                    id="friend"
                                    name="friend"
                                    autoComplete="off"
                                    className="w-full p-4 rounded-2xl border-2 border-black placeholder:text-brand-gray-400 font-medium"
                                    placeholder="Enter friend’s email address"
                                  />
                                  <button className="absolute top-4 right-4 font-bold underline bg-white px-2">
                                    Add friend
                                  </button>
                                </div>
                                <ErrorMessage
                                  name="friend"
                                  component="p"
                                  className="text-sm text-red-500"
                                />
                              </div>

                              {/* Friends list */}
                              <div className="p-4 bg-brand-gray-300 rounded-2xl">
                                <p className="font-semibold mb-3">
                                  Friends you’ve added
                                </p>

                                {/* Friends list */}
                                <div className="flex justify-between items-center">
                                  <div className="flex gap-2 items-center">
                                    <div className="w-8 md:w-12 h-8 md:h-12 rounded-full overflow-hidden">
                                      <Image
                                        src={Avatar}
                                        alt="logo"
                                        width={200}
                                        height={200}
                                        className="w-full h-full object-cover"
                                      />
                                    </div>
                                    <div className="">
                                      <p className="font-semibold">Salome</p>
                                      <p className="text-brand-gray-400">
                                        salome357@gmail.com
                                      </p>
                                    </div>
                                  </div>

                                  <button>
                                    <RedCancelIcon />
                                  </button>
                                </div>
                              </div>
                              <div className="">
                                <button
                                  type="submit"
                                  disabled={formik.isSubmitting}
                                  className="block w-full bg-primary text-white rounded-[5px] py-[14px] font-semibold relative overflow-hidden"
                                >
                                  {formik.isSubmitting && (
                                    <div className="absolute w-full h-full inset-0 flex items-center justify-center bg-inherit">
                                      <ClipLoader
                                        color="white"
                                        size={23}
                                        cssOverride={override}
                                      />
                                    </div>
                                  )}
                                  Create group
                                </button>
                              </div>
                            </div>
                          </Form>
                        );
                      }}
                    </Formik>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
