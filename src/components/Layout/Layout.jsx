import NavBar from './NavBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <header>
                <NavBar />
            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                <p>@copy; 2023 BlogApp. All right reserved.</p>
            </footer>
        </div>
    );
}
export default Layout;