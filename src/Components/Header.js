import React from 'react'


const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary my-2 shadow-5-strong mx-1 rounded">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
     <div>
      <button className="btn btn-sm btn-primary mx-1" >Refresh</button>
      <button className="btn btn-sm btn-danger mx-1" >Deleted</button>
      <button className="btn btn-sm btn-success mx-1" data-mdb-toggle="modal" data-mdb-target="#AddTodoModal" >Add ToDo</button>
     </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header


Header.defaultProps = {
  title : "Hello"
}

