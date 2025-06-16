import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f4f0fb'
        }}>
            <header style={{
                padding: '15px 30px',
                backgroundColor: '#6a0dad',
                color: '#fff',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <h1 style={{ margin: 0, fontSize: '1.5rem' }}>Mi Sitio Karime Alejandra</h1>
                <nav>
                    <Link to="/" style={linkStyle}>Inicio</Link>
                    <Link to="/about" style={linkStyle}>Acerca de</Link>
                </nav>
            </header>

            <main style={{
                flex: 1,
                padding: '30px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <img
                    src="https://cdn.agenciasinc.es/var/ezwebin_site/storage/images/noticias/a-falta-de-un-ciervo-buenas-son-las-nutrias-segun-los-lobos-de-alaska/10388306-1-esl-MX/A-falta-de-un-ciervo-buenas-son-las-nutrias-segun-los-lobos-de-Alaska.jpg"
                    alt="Imagen Central"
                    style={{ marginBottom: '10px', borderRadius: '5px' }}
                />
                <Outlet />
            </main>

            <footer style={{
                padding: '15px 30px',
                backgroundColor: '#6a0dad',
                color: '#fff',
                textAlign: 'center'
            }}>
                <p style={{ margin: 0 }}>Derechos Reservados© 2025</p>
            </footer>
        </div>
    );
};

const linkStyle = {
    color: '#fff',
    marginLeft: '20px',
    textDecoration: 'none',
    fontSize: '1rem'
};

export default Layout;
