import React, { useState, useEffect, useContext } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import DarkModeContext from "../contexts/darkMode";

const CopyEmailBtn = () => {
  const [copySuccessMessage, setCopySuccessMessage] = useState(false);

  const email = "fujitaniyoshilynp@gmail.com";
  const { dark } = useContext(DarkModeContext);
  // useEffect(() => {
  //   if (copySuccessMessage) {
  //     const timer = setTimeout(() => {
  //       setCopySuccessMessage(false);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [copySuccessMessage]);

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopySuccessMessage(true);
    toast.success("Email saved to clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: dark ? "dark" : "light",
    });
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className="text-sm"
      />
      <button onClick={copyEmail} className="">
        <div className="flex items-center text-md ">
          <MdOutlineEmail />
        </div>
      </button>
    </>
  );
};

export default CopyEmailBtn;
