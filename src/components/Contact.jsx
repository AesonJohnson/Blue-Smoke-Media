import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import Header from "./Utils/Header";
import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";

export default function Contact() {
  const [data, setData] = useState({
    company: "",
    fName: "",
    lName: "",
    email: "",
    phone: "",
    website: "",
    time: "",
    customWebDesign: false,
    reDesignUpdate: false,
    eCommerce: false,
    adCopy: false,
    webMaintenance: false,
    seo: false,
    printLogo: false,
    webLogo: false,
    blog: false,
    printedMedia: false,
  });

  const onChangeHandler = (evt) => {
    if (evt.target.type === "checkbox") {
      setData({
        ...data,
        [evt.target.name]: !data[evt.target.name],
      });
    } else {
      setData({
        ...data,
        [evt.target.name]: evt.target.value,
      });
    }
  };

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(data);
    // const templateParams = {
    //   reply_to: data.email,
    //   subject: "Portfolio Contact",
    //   to_name: "Braden",
    //   from_name: data.name,
    //   message_html: data.message,
    // };

    //   emailjs.send(
    //     "gmail",
    //     "template_SswCjIcl",
    //     templateParams,
    //     "user_vhx6Zrv5irvL2nLhnctr5"
    //   );

    resetHandler();
  };

  const resetHandler = () => {
    setData({
      company: "",
      fName: "",
      lName: "",
      email: "",
      phone: "",
      website: "",
      time: "",
      customWebDesign: false,
      reDesignUpdate: false,
      eCommerce: false,
      adCopy: false,
      webMaintenance: false,
      seo: false,
      printLogo: false,
      webLogo: false,
      blog: false,
      printedMedia: false,
    });
  };

  return (
    <>
      {/* <Header /> */}
      {/* <Navigation /> */}{" "}
      <div className="contact">
        <h2>Contact</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          et neque quae voluptatibus aut, voluptatem ducimus omnis repellat,
          aliquid totam nihil quidem, quam quia veniam earum vero facilis sunt?
          Dicta?
        </p>
      </div>
      {/* <Footer /> */}
    </>
  );
}
