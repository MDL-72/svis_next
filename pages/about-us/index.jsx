import styles from "../../styles/about-us.module.scss";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
const HomeArticleModal = dynamic(() => import("../../components/homeArticleModalStandard/homeArticleModal"));

const dataAboutusPage = [
  {
    id: 1,
    imageArticle: "hero2",
    imageSizeHeigth: 1000,
    contentTitle: "SVIS History",
    contentText:
      "Spring of Virtue Integrated School was founded in 2008 by a group of parents and educators. It was originally called Spring of Virtue Learning Center, but in 2012, Editha Liberato decided to change the name to Spring of Virtue Integrated School. This new name was chosen because she wanted the school to be a place where students could develop their own virtues, such as honesty and courage, rather than just learning about them from books or lectures.",
    contentText1:
      "Spring of Virtue was founded with the mission of providing an environment for children to grow up as virtuous citizens. Mrs. Liberato believed that this could be done through integrating traditional education with modern studies in order to make learning more relevant and engaging for students. They wanted their school to focus on creating a positive environment for students so they would not feel pressured or judged by others when they made mistakes or did something wrong—a belief which continues today under current leadership as well as past leaders.",
    contentText2:
      "The school opened its doors with one classroom at first, but quickly grew into two classrooms within a few years thanks to generous donations from local businesses and individuals who believed in its mission: Rising above our differences to create a community where everyone can thrive.",
  },
  {
    id: 2,
    imageArticle: "team",
    imageSizeHeigth: 400,
    contentTitle: "SVIS Mission",
    leftSideText: true,
    slideDirection: "right",
    contentText:
      "The mission of Spring of Virtue Integrated School is to provide a learner-focused and God-centered private school. Designed to promote our learners' total development, providing the opportunity to grow intellectually, emotionally, socially, environmentally conscious, spiritually upright and responsible citizens.",
  },
  {
    id: 3,
    imageArticle: "graduates",
    imageSizeHeigth: 400,
    contentTitle: "SVIS Vision",
    leftSideText: false,
    slideDirection: "left",
    contentText:
      "Spring of Virtue Integrated School will be a superior private school providing an academic curriculum and promoting values formation and spiritual growth of the next generation of leaders, unleashing their full potential to prepare them to be responsible citizens of the society and global workforce.",
  },
  {
    id: 4,
    imageArticle: false,
    contentTitle: "SVIS Facilities",
    leftSideText: true,
    slideDirection: "right",
    contentText:
      "Our goal is to create an environment that allows for optimal learning. We believe that students can learn best when they are surrounded by their peers and the resources needed to succeed. We also believe that students deserve a space in which they can be comfortable, safe, and inspired to learn.",
    carouselImages: ["computerlab", "library", "sciencelab"],
  },
  {
    id: 5,
    imageArticle: false,
    contentTitle: "SVIS Faculties",
    leftSideText: false,
    slideDirection: "left",
    contentText:
      "SVIS is a school with a difference. With experienced and highly-qualified faculties, we offer a unique learning experience that helps our students to grow and succeed. Our faculties are dedicated to their students and are always available to help them with their studies.",
    contentText1:
      "We believe that our students should have the best possible education, and we are committed to providing them with the resources they need to succeed.",
    carouselImages: ["faculty1", "faculty2", "faculty3", "team", "teamstaff"],
  },
];

export default function AboutPage(props) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["about__cont"]}>
      <div className={styles["about__content__cont"]}>
        {props.aboutPageData?.map((item) => {
          return (
            <HomeArticleModal
              key={item.id}
              imageArticle={item.imageArticle}
              contentTitle={item.contentTitle}
              contentText={item.contentText}
              contentText1={item.contentText1}
              contentText2={item.contentText2}
              leftSideText={item.leftSideText}
              carouselImages={item.carouselImages}
              slideDirection={item.slideDirection}
              imageSizeHeigth={item.imageSizeHeigth}
            />
          );
        })}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      aboutPageData: dataAboutusPage,
    },
  };
}
