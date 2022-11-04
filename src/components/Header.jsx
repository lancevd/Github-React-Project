import React from 'react'

const Header = () => {
  return (
    <header className='pt-2 pb-5' >
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand">Repositories</a>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </nav>
    </header>
  )
}

export default Header