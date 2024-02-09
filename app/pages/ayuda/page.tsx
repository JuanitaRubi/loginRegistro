import Link from 'next/link';
import styles from "@/public/styles/styles.module.css"
import Footer from '@/components/Footer';

export default function ayuda(){
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
      <h1>Pagina de Ayuda</h1>
      <img src='./components/images/computadora.png' />

    </div>

    {/*Footer */}
    <Footer/>

    </div>
  )
}
