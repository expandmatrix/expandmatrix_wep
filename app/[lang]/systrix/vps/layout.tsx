import styles from './systrix-theme.module.css';
export default function SystrixLayout({ children }: { children: React.ReactNode }) {
  return <div className={styles['systrix-theme']}>{children}</div>;
}
