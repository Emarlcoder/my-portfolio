import Layout from "../components/Layout"
import Error from "./_error"
import Classnames from "classnames";

const GitHub = ({user, statusCode, dark}) => {

  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout footer={false}>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center bg-dark text-light">
            <h1 className="text-light">{user.name}</h1>
            <div className="overflow h-50">
              <img src={user.avatar_url} alt="avatar" className="card-image-top"/>
            </div>
            <p className="lead">{user.bio}</p>
            <p><i className="cil-briefcase"></i> {user.company}</p>
            <p><i className="cil-location-pin"></i> {user.location}</p>
            <div className="list-group">
              <a href={user.html_url} target="_blank" className={Classnames('btn', {'btn-primary': dark, 'btn-light': !dark})}>
                <i className="fa fa-user"></i> Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(ctx) {

  const res = await fetch('https://api.github.com/users/Emarlcoder')
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  return {
    props: {
      user: data,
      statusCode
    },
  }
}

export default GitHub