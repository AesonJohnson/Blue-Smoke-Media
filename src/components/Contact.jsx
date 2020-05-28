import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "emailjs-com";

export default function Contact() {
  // const [data, setData] = useState({
  //   company: "",
  //   email: "",
  //   message: "",
  // });

  // const onChangeHandler = (evt) => {
  //   setData({
  //     ...data,
  //     [evt.target.name]: evt.target.{null}
  //   });
  // };

  // const onSubmitHandler = (evt) => {
  //   evt.preventDefault();

  //   const templateParams = {
  //     reply_to: data.email,
  //     subject: "Portfolio Contact",
  //     to_name: "Braden",
  //     from_name: data.name,
  //     message_html: data.message,
  //   };

  //   emailjs.send(
  //     "gmail",
  //     "template_SswCjIcl",
  //     templateParams,
  //     "user_vhx6Zrv5irvL2nLhnctr5"
  //   );

  //   resetHandler();
  // };

  // const resetHandler = () => {
  //   setData({
  //     name: "",
  //     email: "",
  //     message: "",
  //   });
  // };

  return (
    <div className="contact clicker">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae et
        neque quae voluptatibus aut, voluptatem ducimus omnis repellat, aliquid
        totam nihil quidem, quam quia veniam earum vero facilis sunt? Dicta?
      </p>
      <form onSubmit={null}>
        <label for="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          value={null}
          onChange={null}
        />

        <label for="fName">First Name</label>
        <input
          type="text"
          name="fName"
          id="fName"
          value={null}
          onChange={null}
        />
        <label for="lName">Last Name</label>
        <input
          type="text"
          name="lName"
          id="lName"
          value={null}
          onChange={null}
        />

        <label for="email">Email</label>
        <textarea
          name="email"
          id="email"
          rows="6"
          value={null}
          onChange={null}
        />
        <label for="phone">Contact Number</label>
        <textarea
          name="phone"
          id="phone"
          rows="6"
          value={null}
          onChange={null}
        />
        <label for="website">Website URL</label>
        <textarea
          name="website"
          id="website"
          rows="6"
          value={null}
          onChange={null}
        />
        <div className="actions">
          <input type="submit" value={null} />
          <input type="reset" value={null} />
        </div>
      </form>
    </div>
  );
}
