import React from "react";
//* Components
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
//* Data
import { middleInfo, team } from "../data/team";

export default function Team() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="team">
        <section className="team-top">
          <h2>Meet the team</h2>
          <p>
            Blue Smoke Digital and Printed Media, a company founded in 2019, was
            formed by a cooperative interaction of talented individuals from a
            variety of disciplines, all with over 35 years of marketing, design,
            search engine optimization and sales experience. Each Blue Smoke
            team member is a graduate of LambdaSchool.com
          </p>
        </section>
        <section className="team-middle">{mapper(middleInfo)}</section>
        <section className="team-bottom">
          <p>
            “At Blue Smoke Digital and Printed Media, our product is built on
            appealing, solid websites and graphic design, that represents the
            client while appealing to their customers. We will always remember
            that we are a service company. Each and every customer is valued as
            We will work to earn our customers’ trust and loyalty. And more than
            simply responding to customer needs, we will work to anticipate them
            - With unquestionable honesty, fairness and respect.”
          </p>
          {teamMembers(team)}
        </section>
      </div>
      <Footer />
    </>
  );
}

function teamMembers(team) {
  return team.map((member) => (
    <div className="member">
      <img src={member.img} alt="profile img" />
      <p>
        <span>{member.name}</span>
        {"  "}
        {member.description}
      </p>
    </div>
  ));
}

function mapper(data) {
  return data.map((e) => <p>{e}</p>);
}
