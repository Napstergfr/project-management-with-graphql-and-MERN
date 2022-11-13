import logo from './assests/logo.png';

export default function Header() {
  return (
    <nav className='navbar bg-light mb-4 p-0'>
        <div className="container">
            <a className="navbar-brand" href="/">
                <div className="d-flex">
                    <img src={logo} className="mr-2" alt="Logo" />
                    <div>ProjectMGMNT</div>
                </div>  
            </a>
        </div>
    </nav>
  )
}
