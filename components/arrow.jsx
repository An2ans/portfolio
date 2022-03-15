import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/arrow.module.css";

const Arrow = (props) => {
  const [width, setWidth] = useState(0);

  const handleMouseIn = (e) => {
    if (width > 640) {
      const indication = e.target.firstChild;
      indication != undefined ? (indication.style.opacity = 1) : {};
    }
  };
  const handleMouseOut = (e) => {
    if (width > 640) {
      const indication = e.target.firstChild;
      indication != undefined ? (indication.style.opacity = 0) : {};
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <div
      className={styles.arrowContainer}
      onMouseEnter={handleMouseIn}
      onMouseLeave={handleMouseOut}
    >
      <p>To {props.direction}</p>
      <Link href={props.href} passHref>
        <i className={`fas fa-angle-double-${props.arrow}`}></i>
      </Link>
    </div>
  );
};

export default Arrow;
