import { Link } from "react-router-dom"

const Brand = () => {
  return (
    <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <h2 className="nav__brand__heading">
                R<span className="alternate__heading__text">E</span>N
                <span className="alternate__heading__text">T</span>
              </h2>
            </Link>
          </div>
  )
}

export default Brand
