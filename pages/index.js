import Layout from "../components/Layout"
import { skills, languages, experiences, projects } from "../profile"
import Image from "next/image"
import profilePic from "../public/profile.jpg"
import Link from "next/link"

const Index = () => (
  <Layout>
    {/** Header Card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-4">
              <Image
                src={profilePic}
                alt="profilePhoto"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h1 className="text-light">Emanuel Romero López</h1>
              <h3 className="text-light">Backend Developer</h3>
              <p>
                I am a Backend Developer with a passion for learning new stuff.
                I am currently working as a Backend Developer at Meraki Team.
                I am proactively looking for new opportunities to learn and grow.
                For any questions, please hit the button below.
              </p>
              <Link href="/contact">
                <a className="btn btn-outline-light btn-primary">
                Contact me
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/** Second Section */}
    <div className="row py-2">
      <div className="col-md-3">
        <div className="card bg-dark">
          <div className="card-body">
            <h1 className="text-light">Languages</h1>
            {languages.map((language, index) => {
              return (
                <div className="py-3">
                  <h5 className="fw-bold text-light">{language.name}</h5>
                  <div key={index}>
                    <h6 className="fw-lighter text-light">{language.level}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-3 pb-4">
        <div className="card bg-dark">
          <div className="card-body">
            <h1 className="text-light">Skills</h1>
            {skills.map((skill, index) => {
              return (
                <div className="py-1">
                  <h5 className="fw-bold text-light"><i className={skill.icon}></i>  {skill.name}</h5>
                  <div className="progress" key={index}>
                    <div
                      className="progress-bar progress-bar-striped progress-bar-animated"
                      role="progressbar"
                      style={{ width: skill.percentage }}
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card bg-dark">
          <div className="card-body">
            <h1 className="text-light">Experience</h1>
            <ul>
              {experiences.map(
                ({ company, position, from, description, to }, index) => (
                  <li key={index}>
                    <h3 className="fw-bold text-light">
                      {position} at {company}
                    </h3>
                    <h5 className="fw-lighter text-light">
                      {from}-{to}
                    </h5>
                    <p className="text-light">{description}</p>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/** Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark text-light">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>
            {projects.map(({ name, description, link, image }, index) => (
              <div className="col-md-4" key={index}>
                <div className="card bg-dark text-light h-100 pb-1">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt="portfolio"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body bg-primary">
                    <h3 className="text-light">{name}</h3>
                    <p className="text-light">{description}</p>
                    <Link href="/projects">
                      <a className="btn btn-outline-light btn-dark">
                        Know More
                      </a>
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/portfolio">
              <a className="btn btn-outline-light btn-primary">More Projects</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);



export default Index