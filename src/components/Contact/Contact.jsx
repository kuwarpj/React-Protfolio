import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
import Phone from "../../img/linkedin.png";
import message from "../../img/instagram.png";
import address from "../../img/github.png";
import { useForm } from "react-hook-form";
const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const handleSubmit = (e) => {
    emailjs
      .sendForm(
        "service_z282zsk",
        "template_n23pz7y",
        formRef.current,
        "tvmbTXr1yCZ-WnUMZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    toast.success("Your message has been sent!", {
      position: "top-right",
      theme: "colored",
    });

    setName("");
    setSubject("");
    setEmail("");
    setMessages("");
  };

  return (
    <>
      <div className="section-title">
        <h2>Contact us</h2>
        <div className="new1"></div>
        <div className="new2"></div>
      </div>

      <div className="container">
        <div className="content">
          <div className="left-side">
            <a href="https://github.com/kuwarpj" target="_blank">
              <div className="address details">
                <img src={address} alt="" className="c-img"></img>
                <div className="topic">Github</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/kuwarparasarjha/"
              target="_blank"
            >
              <div className="phone details">
                <img src={Phone} alt="" className="c-img"></img>
                <div className="topic">Linkedin</div>
              </div>
            </a>

            <a href="https://www.instagram.com/kuwar_2500/" target="_blank">
              <div className="email details">
                <img src={message} alt="" className="c-img"></img>
                <div className="topic">Instagram</div>
              </div>
            </a>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p className="c-paragraph">
              Wheather you have a question, want to start a project or simply
              want to connect. Feel free to send me a message in the contact
              form
            </p>
            <form ref={formRef}>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="input-box">
                <input
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="input-box message-box">
                <input
                  type="text"
                  placeholder="Message"
                  name="user_message"
                  onChange={(e) => setMessages(e.target.value)}
                  value={messages}
                />
              </div>
              <div className="c-button">
                <input
                  type="button"
                  value="Send Now"
                  onClick={() => {
                    handleSubmit();
                  }}
                />
                <div className="message">
                  {done && (
                    <ToastContainer
                    // toastStyle={{ backgroundColor: "lightgreen" , color:"white"}}
                    />
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
