import React, { useRef, useState } from "react";
import Title from "./Title";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate inputs
    const errors = {};
    const formElements = form.current.elements;
    for (let i = 0; i < formElements.length - 1; i++) {
      const input = formElements[i];
      if (input.type !== "submit" && input.value.trim() === "") {
        errors[input.name] = "Please fill out the form";
      }
    }

    if (Object.keys(errors).length > 0) {
      setInputErrors(errors);
      return;
    }

    emailjs
      .sendForm(
        "service_09wixud",
        "template_tgr7q1g",
        form.current,
        "iM6RSbZNa5i62ngwX"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          setIsMessageSent(true);
          setInputErrors({});

          // Reset the message after a few seconds (optional)
          setTimeout(() => {
            setIsMessageSent(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-center items-center">
        <form
          id="form"
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col w-full md:w-7/12"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="to_email"
            placeholder="Name"
            className={`p-2 bg-transparent border-2 rounded-md focus:outline-none ${
              inputErrors.to_email ? "border-red-500 mb-2" : ""
            }`}
          />
          {inputErrors.to_email && (
            <div className="text-red-500 text-xs">{inputErrors.to_email}</div>
          )}
          <input
            type="email"
            name="from_name"
            placeholder="Email"
            className={`my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none ${
              inputErrors.from_name ? "border-red-500" : ""
            }`}
          />
          {inputErrors.from_name && (
            <div className="text-red-500 text-xs mb-2">
              {inputErrors.from_name}
            </div>
          )}
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className={`p-2 mb-2 bg-transparent border-2 rounded-md focus:outline-none ${
              inputErrors.message ? "border-red-500" : ""
            }`}
          />
          {inputErrors.message && (
            <div className="text-red-500 text-xs mb-2">
              {inputErrors.message}
            </div>
          )}
          <input
            type="submit"
            value="Send"
            className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md hover:stroke-white hover:cursor-pointer"
          />
        </form>
      </div>
      {isMessageSent && (
        <div className="mt-4 text-green-600 text-center">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
