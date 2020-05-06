import React from "react";
//* Components
import Header from "../Utils/Header";
import Navigation from "../Utils/Navigation";
import Footer from "../Utils/Footer";

export default function InquirySurveyForm() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="inquiry-survey-form">
        <div className="content">
          <h1>InquirySurveyForm</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}
