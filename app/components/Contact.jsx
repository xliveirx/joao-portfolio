import React, { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { slideIn } from "./ui/motion";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onFormSubmitted = (event) => {
    event.preventDefault();
    console.log("Event submitted: ", { name, email, message });

    if (name === '' || email === '' || message === '') {
      toast.error("Please, fill all the blank fields.");
      return;
    }

    setIsLoading(true);

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_zmue4ub", "template_0q4ujoj", templateParams, "HVZBSZB2Tqxyh4BAv").then((response) => {
      console.log("EMAIL ENVIADO: ", response.status, response.text)
      toast.success("Email succesfully sent.")
      setEmail('');
      setName('');
      setMessage('');
    }, (err) => {
      console.log(err);
      toast.error("Something went wrong while sending the e-mail");
    })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div id="contact" className="text-center py-16 px-4">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >

        <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-accent text-white">
          Contact<span className="text-accent">.</span>
        </h2>
        <p className="mb-10 text-white">Fill the form below to contact me!</p>

        <div className="max-w-xl mx-auto bg-tertiary rounded-2xl shadow-xl p-8">
          <form className="space-y-6" onSubmit={(e) => onFormSubmitted(e)}>
            <div className="text-left">
              <label className="block mb-2 text-white font-medium">Your name:</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full border border-accent rounded-md p-3 bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>

            <div className="text-left">
              <label className="block mb-2 text-white font-medium">Your e-mail:</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                className="w-full border border-accent rounded-md p-3 bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div className="text-left">
              <label className="block mb-2 text-white font-medium">Your message:</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full border border-accent rounded-md p-3 bg-tertiary text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </div>

            <Button disabled={isLoading}
              type="submit"
              className={`w-full border p-3 transition-all duration-300 rounded-md ${isLoading
                ? 'bg-accent text-white cursor-wait border-none'
                : 'bg-transparent text-accent border-accent hover:cursor-pointer hover:bg-accent hover:text-white'}`} >
              {isLoading ? "Submiting..." : "Submit message"}
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
