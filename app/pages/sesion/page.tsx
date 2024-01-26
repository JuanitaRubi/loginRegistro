import Link from 'next/link';
import styles from "@/styles/styles.module.css"
import Footer from '@/components/Footer';

export default function sesion(){
  return(
    <div className={styles.container}>

    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navbarItem}>
            <a href="/pages/ayuda" className={styles.navLink}>Ayuda</a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/pages/sesion" className={styles.navLink}>Sesion</a>
          </li>
        </ul>
    </nav>

    {/*contenido de pagina*/ }
    <div className={styles.container}>
        <h1>Página de Sesión</h1>

        {/* Formulario de inicio de sesión / registro */}
        <form>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />

          <button type="submit">Iniciar Sesión</button>
        </form>
        </div>

    {/*Footer */}
    <Footer/>

    </div>
  )
}
