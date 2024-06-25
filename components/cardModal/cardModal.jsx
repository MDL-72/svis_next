import React from "react";
import styles from "./cardModal.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export default function CardModal(props) {
  const { imageCard, imageTitle, imageDescription } = props;
  const router = useRouter();

  const courseData = [
    {
      id: 1,
      image: "kindergarten",
      title: "Kindergarten I",
      title2: "&",
      title3: "Kindergarten II",
      desc: "It can be a big adjustment when kids head to the Kindergarten! We're here to help you feel confident that your child will have a great time in class. ",
      desc2: "Start your child's journey with SVIS.",
    },
    {
      id: 2,
      image: "elementary",
      title: "Elementary",
      //   title2: "Grade 1 to Grade 6",
      title3: "Grade 1 - Grade 6",
      desc: "All our children are precious, and their dreams are worth pursuing. See them reveal their true potential and bring out the best in themselves, through the pursuit of knowledge, wisdom, and courage.",
      desc2: "Give your child a head start by enrolling them at SVIS today.",
    },
    {
      id: 3,
      image: "highschool",
      title: "High School",
      //   title2: "&",
      title3: "Grade 7 - Grade 10",
      desc: "SVIS courses are designed to provide students with the skills and knowledge they need to succeed in college and their future careers. Our courses are taught by experienced and qualified teachers who are dedicated to helping students succeed.",
    },
  ];

  return (
    <div className={styles["modal__card__cont"]}>
      {courseData.map((item) => {
        return (
          <div className={styles["modal__card__content__cont"]} key={item.title}>
            <div className={styles["modal__card__content"]}>
              <Image src={`/${item.image}.webp`} alt={`SVIS ${item.image} course icon`} height={200} width={200} />
              <p className={styles["modal__card__title__content"]}>
                {item.title}
                <br />
                {item.title2} <br /> {item.title3}
              </p>
            </div>
            <div className={styles["modal__card__content--back"]}>
              <p>{item.desc}</p>
              <p>{item.desc2}</p>
              <button onClick={() => router.push("contact-us")} className={styles["modal__card__content__cta"]}>
                Inquire Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
