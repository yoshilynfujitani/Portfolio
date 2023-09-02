import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BadgeText from "../Components/BadgeText";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineMail } from "react-icons/ai";
import { MdAddCall } from "react-icons/md";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const gradienttextsm = `bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-clip-text text-md text-transparent`;
  const gradienttext = `inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-4xl text-transparent font-semibold lg:text-6xl lg:font-bold`;
  const sendEmail = (e) => {
    e.preventDefault();
    if (!name || !email || !message)
      return toast.error("❌ Complete the form below", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    emailjs
      .sendForm(
        "service_6g0co29",
        "template_jdtpct8",
        form.current,
        "plfFyTU62h2GHKKo9"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("📩 Your message has been sent!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("❌ There was an Error sending the message", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gradient-to-b from-[#110e11] to-[#030009] px-10 pt-32 lg:pl-[500px] lg:pr-96">
      <ToastContainer />
      <h1 className={gradienttext}>Contact Me</h1>
      <p className="text-gray-700 dark:text-slate-50 text-md py-4">
        Let's connect and make your ideas your reality
      </p>
      <div className="block space-y-4 md:flex md:space-x-4 md:space-y-0 ">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col space-y-5 w-full bg-gray-200 dark:bg-gradient-to-b from-[#131313] via-[#130e16] to-[#100814] py-10 px-10 shadow-md rounded-md"
        >
          <div className="w-full flex flex-col">
            <label className={gradienttextsm}>Name</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-b-2  rounded-md  py-1 px-4 bg-gray-300 dark:bg-slate-50 "
            />
          </div>
          <div className="w-full flex flex-col">
            {" "}
            <label className={gradienttextsm}>Email</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-b-2 rounded-md  py-1 px-4 bg-gray-300 dark:bg-slate-50"
            />
          </div>
          <div className="w-full flex flex-col">
            <label className={gradienttextsm}>Message</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-b-2 rounded-md py-1 px-4 bg-gray-300 dark:bg-slate-50"
            />
          </div>
          <button type="submit">
            <BadgeText props={"Send Message"} />
          </button>
        </form>
        <div className="border border-gray-400 w-full  rounded-md p-10 ">
          <div className="text-gray-300 pb-10">
            <h1 className={gradienttextsm}>I'd love to hear from you</h1>
            <p>
              Contact me with the following details below or the form, and I'll
              get back to you as soon as possible.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineMail className="text-gray-300" />
            <h1 className="text-gray-300">fujitaniyoshilyn@gmail.com</h1>
          </div>
          <div className="flex items-center gap-2">
            <MdAddCall className="text-gray-300" />
            <h1 className="text-gray-300">+63 9936430279</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
