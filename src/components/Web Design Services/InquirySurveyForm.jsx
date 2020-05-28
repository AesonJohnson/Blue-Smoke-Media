import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";

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
      <Header />
      <Navigation />
      <div className="inquiryForm">
        <h2>Inquiry Form</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          et neque quae voluptatibus aut, voluptatem ducimus omnis repellat,
          aliquid totam nihil quidem, quam quia veniam earum vero facilis sunt?
          Dicta?
        </p>
        <form onSubmit={onSubmitHandler}>
          <label for="company">
            Company:
            <input
              type="text"
              name="company"
              id="company"
              value={data.company}
              onChange={onChangeHandler}
            />
          </label>
          <label for="fName">
            First Name:
            <input
              type="text"
              name="fName"
              id="fName"
              value={data.fName}
              onChange={onChangeHandler}
            />
          </label>
          <label for="lName">
            Last Name:
            <input
              type="text"
              name="lName"
              id="lName"
              value={data.lName}
              onChange={onChangeHandler}
            />
          </label>
          <label for="email">
            Email:
            <input
              name="email"
              id="email"
              value={data.email}
              onChange={onChangeHandler}
            />
          </label>
          <label for="phone">
            Contact Number:
            <input
              name="phone"
              id="phone"
              value={data.phone}
              onChange={onChangeHandler}
            />
          </label>
          <label for="website">
            Website URL:
            <input
              name="website"
              id="website"
              value={data.website}
              onChange={onChangeHandler}
            />
          </label>
          <label for="time">
            Best Time to be Reached:{" "}
            <input
              type="radio"
              name="time"
              className="radio"
              value="morning"
              onChange={onChangeHandler}
            />
            Morning
            <input
              type="radio"
              name="time"
              className="radio"
              value="afternoon"
              onChange={onChangeHandler}
            />
            Afternoon
            <input
              type="radio"
              name="time"
              className="radio"
              value="evening"
              onChange={onChangeHandler}
            />
            Evening
          </label>

          <p>Interested in:</p>
          <div className="interests">
            <label for="customWebDesign">
              <input
                name="customWebDesign"
                type="checkbox"
                checked={data.customWebDesign}
                onChange={onChangeHandler}
              />
              Custom Web Design
            </label>
            <label for="reDesignUpdate">
              <input
                name="reDesignUpdate"
                type="checkbox"
                checked={data.reDesignUpdate}
                onChange={onChangeHandler}
              />
              Re-Design And Update
            </label>
            <label for="eCommerce">
              <input
                name="eCommerce"
                type="checkbox"
                checked={data.eCommerce}
                onChange={onChangeHandler}
              />
              E-Commerce
            </label>
            <label for="adCopy">
              <input
                name="adCopy"
                type="checkbox"
                checked={data.adCopy}
                onChange={onChangeHandler}
              />
              Ad-Copy Writing
            </label>
            <label for="webMaintenance">
              <input
                name="webMaintenance"
                type="checkbox"
                checked={data.webMaintenance}
                onChange={onChangeHandler}
              />
              Website Maintenance
            </label>
            <label for="seo">
              <input
                Name="seo"
                type="checkbox"
                checked={data.seo}
                onChange={onChangeHandler}
              />
              Seo{" "}
            </label>
            <label for="printLogo">
              <input
                name="printLogo"
                type="checkbox"
                checked={data.printLogo}
                onChange={onChangeHandler}
              />
              Print Logo{" "}
            </label>
            <label for="webLogo">
              <input
                Name="webLogo"
                type="checkbox"
                checked={data.webLogo}
                onChange={onChangeHandler}
              />
              Web Logo
            </label>
            <label for="blog">
              <input
                Name="blog"
                type="checkbox"
                checked={data.blog}
                onChange={onChangeHandler}
              />
              Blog{" "}
            </label>
            <label for="printedMedia">
              <input
                name="printedMedia"
                type="checkbox"
                checked={data.printedMedia}
                onChange={onChangeHandler}
              />
              Printed Media{" "}
            </label>
          </div>
          <div className="actions">
            <input type="submit" />
            <input type="reset" value="Reset" onClick={resetHandler} />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
