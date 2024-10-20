import { Outlet } from "react-router-dom";

const Layout = () => {
    return <>
        <header>
            <section className="logo"> 
             <img src="src/assets/LOGO.svg" alt="logo kasa" />
            </section>
            <nav className="nav">
                <ul>
                    <li><a href="/">Accueil</a></li>
                    <li><a href="/about">A propos</a></li>
                </ul>
            </nav>
        </header>
        <Outlet />

        <footer>
            <section>
                <img src="/src/assets/logoBW.svg" alt="logo noir et blanc kasa" />
            </section>
            <section>
                <p>© 2020 Kasa. All rights reserved</p>
            </section>
        </footer>
    </>
}

export default Layout;