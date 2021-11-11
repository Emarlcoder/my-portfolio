import Link from 'next/link'

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    <Link href="/">
    <a className="navbar-brand fw-bold">Emanuel Romero López</a>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link href="/">
            <a className="nav-link fw-bold">Home
              <span className="visually-hidden">(current)</span>
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/projects">
            <a className="nav-link fw-bold">Projets</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">
            <a className="nav-link fw-bold">Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
)

export default Navbar