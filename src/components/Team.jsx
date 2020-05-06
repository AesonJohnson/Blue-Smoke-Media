import React from "react";
//* Components
import Header from "./Utils/Header";
import Navigation from "./Utils/Navigation";
import Footer from "./Utils/Footer";
//* Data
import team from "../data/team";
//* Images
import globe from "../images/globe.jpg";

export default function Team() {
  return (
    <>
      <Header />
      <Navigation />
      <div className="team">
        <section className="team-top">
          <h1>Meet Our Team</h1>
          <p>
            <span>Blue Smoke Digital and Printed Media,</span> a company founded
            in 2019, was formed by a cooperative interaction of talented
            individuals from a variety of disciplines, all with over 35 years of
            programming, graphic design, search engine optimization, and sales
            experience. Each <span>Blue Smoke Media</span> team member is a
            graduate of <a href="https://lambdaschool.com/">LambdaSchool.com</a>
          </p>
        </section>
        <section className="team-middle">
          <div>
            <img src={globe} alt="alternation" />
            <p>
              The <span>Blue Smoke Media</span> design staff consists of graphic
              designers, web designers, logo designers, and usability experts
              versed in the latest up to date design standards.
            </p>
          </div>
          <div>
            <img src={globe} alt="alternation" />
            {/* //todo fix this paragraph ADD COMPUTER SCIENCE SOMEWHERE} */}
            <p>
              The <span>Blue Smoke Media</span> Full-Stack developers are
              proficient in the following languages: HTML5 • CSS3 • SASS •
              Tailwind • Bootstrap • JSON • Javascript • React • Redux • NodeJS
              • Express • REST • SQL • SQLite • Postgres • UI/UX • Github •
              Testing (Jest • Cypress)
            </p>
          </div>
          <div>
            <img src={globe} alt="alternation" />
            <p>
              "The <span>Blue Smoke Media</span> marketing staff consists of
              search engine optimization (SEO) specialists, copywriters,
              corporate branding specialists, publicists, and marketing
              experts.",
            </p>
          </div>
          <div>
            <img src={globe} alt="alternation" />
            <p>
              <span> Blue Smoke Digital and Printed Media,</span> enjoys a
              growing roster of local, regional and national clients ranging
              from one - person companies, small and medium sized business to
              non - profit organizations.
            </p>
          </div>
        </section>
        <section className="team-bottom">
          <p>
            At<span> Blue Smoke Digital and Printed Media,</span> our product is
            built on appealing, solid websites and graphic design, that
            represents the client while appealing to their customers. We will
            always remember that we are a service company. Each and every
            customer is valued as We will work to earn our customers’ trust and
            loyalty. And more than simply responding to customer needs, we will
            work to anticipate them - With unquestionable honesty, fairness and
            respect.
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
        {"  "}-{"  "} {member.description}
      </p>
    </div>
  ));
}
