'use client';
import { useState } from 'react';
import styles from './page.module.scss';

export default function Page() {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <main className="flex min-h-screen">
      <div className={styles.grid}>
        <div className={styles.left}></div>
        <div className={styles.center}></div>
        <div className={styles.right}></div>
      </div>
    </main>
  );
}

// https://css-tricks.com/animating-css-grid-how-to-examples/
// https://jsfiddle.net/n630k7we/2/
