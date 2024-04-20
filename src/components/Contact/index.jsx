'use client'

import styles from "./style.module.scss";
import Image from "next/image";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import Rounded from "../../common/RoundedButton";
import Magnetic from "../../common/Magnetic";

export default function Contact() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [-400, 100]);
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const rotate = useTransform(scrollYProgress, [0, 1], [200, 850]);
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/personal.jpeg`} />
            </div>
            <h2>Let&apos;s work</h2>
          </span>
          <h3>together</h3>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <Rounded backgroundColor={"greenyellow"} className={styles.button}>
              <p>Get in touch</p>
            </Rounded>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
              fill="white"
            />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <Rounded>
            <p>s.far.focus@gmail.com</p>
          </Rounded>
          <Rounded>
            <p>+91 7068835235</p>
          </Rounded>
        </div>
      </div>
    </div>
  );
}
