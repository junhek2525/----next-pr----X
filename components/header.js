import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function Header(){
    return(
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/' className={styles.nav_logo}>
                <Image src='/logo.png' width={64} height={64}></Image>
                <spen>portfolio</spen>
                </Link> 
                <div className={styles.navmenu}>
                    <ul className={styles.navlist}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/about-me'>Projects</Link></li>
                        <li><Link href='https://open.kakao.com/o/sUm8GxOg'>Contact</Link></li>
                    </ul>
                </div>
            </nav>
            {/* <h1>헤더입니다.</h1> */}
        </div>
    )
}