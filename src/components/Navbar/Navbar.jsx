import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import logo from './assets/logo2.png';
import styles from './index.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavbarHome() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={styles.s_navbar}>
            <Container>
                <div className={styles.navbar}>
                    <div className={styles.imgDiv}>
                        <img
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="50"
                            className={styles.imgDiv__img}
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className={styles.hamburger} onClick={toggleMenu}>
                        {menuOpen ? (
                            <AiOutlineClose size={30} color="white" />
                        ) : (
                            <AiOutlineMenu size={30} color="white" />
                        )}
                    </div>
                    <div
                        className={`${styles.links} ${menuOpen ? styles.linksActive : ''}`}
                    >
                        <a href="#home" className={styles.items}>inicio</a>
                        <a href="#infos" className={styles.items}>atuações</a>
                        <a href="#servicos" className={styles.items}>serviços</a>
                        <a href="#sobre" className={styles.items}>sobre</a>
                        <a href="#postagens" className={styles.items}>postagens</a>
                        <a href="#contato" className={styles.items}>contato</a>
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default NavbarHome;
