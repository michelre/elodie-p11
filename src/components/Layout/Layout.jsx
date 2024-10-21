import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Layout = () => {
    return <>
        <header>
            <div className="container">
                <div className="header-container">
                    <section className="logo"> 
                        <Link to="/">
                            <img src="/src/assets/LOGO.svg" alt="logo kasa" />
                        </Link>                        
                    </section>
                    <nav className="nav">
                        <ul>
                            <li><a href="/">Accueil</a></li>
                            <li><a href="/about">A propos</a></li>
                        </ul>
                    </nav>
                </div>                
            </div>
        </header>

        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>        

        <footer>
            <div className="container">
                <section>
                    <img src="/src/assets/logoBW.svg" alt="logo noir et blanc kasa" />
                </section>
                <section>
                    <p>© 2020 Kasa. All rights reserved</p>
                </section>
            </div>            
        </footer>
    </>
}

export default Layout;