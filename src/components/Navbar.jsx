import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link"href=""><NavLink to ='/'>
            Home
        </NavLink>
          </a>
          </li>
          <li class="nav-item">
          <a class="nav-link"href=""><NavLink to ='/about'>
           About
        </NavLink></a>
          </li>
          <li class="nav-item">
         <a class="nav-link" href=""> <NavLink to ='/newsletter'>
           newsletter
        </NavLink></a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
  )
}
export default Navbar