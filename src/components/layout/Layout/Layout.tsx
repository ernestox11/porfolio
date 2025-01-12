import { PropsWithChildren } from 'react';
import styles from './Layout.module.scss';

type LayoutProps = PropsWithChildren;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.layout}>
      <header className={styles.header} role="banner">
        Header
      </header>

      <main className={styles.main} role="main" id="main-content">
        {children}
      </main>

      <footer className={styles.footer} role="contentinfo">
        Footer
      </footer>
    </div>
  );
}
