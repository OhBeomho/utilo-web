import { ParentProps } from "solid-js";
import styles from "./Layout.module.css";

function Layout({ children }: ParentProps) {
    return (
        <div class={styles.container}>
            <nav class={styles.navbar}>
                <a href="/" class={styles.brand}>
                    UTIL<span style={{ color: "rgb(0, 150, 255)" }}>O</span>
                </a>
            </nav>
            <main class={styles.main}>{children}</main>
        </div>
    );
}

export default Layout;
