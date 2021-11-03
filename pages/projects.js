import Layout from "../components/Layout";
import {projects} from '../profile';
import Link from "next/dist/client/link";
import Classnames from "classnames";

const PostCard = ({ project, dark }) => (
  <div className="col-md-4">
    <div className="card bg-dark text-light h-100 pb-1">
      <div className="overflow">
        <img src={project.image} className="card-img-top"/>
      </div>
      <div className="card-body">
        <h1 className="text-light">{project.name}</h1>
        <p className="card-text">{project.description}</p>
        <Link href={project.link}>
          <button className={Classnames('btn', 'btn-outline-light', {'btn-primary': dark, 'btn-light': !dark})}>Try it</button>
        </Link>
      </div>
    </div>
  </div>
)

const Projects = () => (
  <Layout footer={false} title="Projects" dark>
    <div className="row">
      {projects.map((project, index) => (
        <PostCard key={index} project={project} />
      ))}
    </div>
  </Layout>
);

export default Projects;