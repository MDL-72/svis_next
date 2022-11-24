import styles from "../../styles/about-us.module.scss";
import HomeArticleModal from "../../components/homeArticleModalStandard/homeArticleModal";
export default function AboutPage() {
  return (
    <div className={styles["about__cont"]}>
      <div className={styles["about__content__cont"]}>
        <HomeArticleModal
          imageArticle={"hero2"}
          contentTitle="SVIS History"
          contentText="Spring of Virtue Integrated School was founded in 2008 by a group of parents and educators. It was originally called Spring of Virtue Learning Center, but in 2012, Editha Liberato decided to change the name to Spring of Virtue Integrated School. This new name was chosen because she wanted the school to be a place where students could develop their own virtues, such as honesty and courage, rather than just learning about them from books or lectures."
          contentText1="Spring of Virtue was founded with the mission of providing an environment for children to grow up as virtuous citizens. Mrs. Liberato believed that this could be done through integrating traditional education with modern studies in order to make learning more relevant and engaging for students. They wanted their school to focus on creating a positive environment for students so they would not feel pressured or judged by others when they made mistakes or did something wrong—a belief which continues today under current leadership as well as past leaders."
          contentText2="The school opened its doors with one classroom at first, but quickly grew into two classrooms within a few years thanks to generous donations from local businesses and individuals who believed in its mission: Rising above our differences to create a community where everyone can thrive."
        />
        <HomeArticleModal
          imageArticle={"team"}
          contentTitle="SVIS Mission"
          leftSideText={true}
          slideDirection="right"
          contentText="The mission of Spring of Virtue Integrated School is to provide a learner-focused and God-centered private school. Designed to promote our learners' total development, providing the opportunity to grow intellectually, emotionally, socially, environmentally conscious, spiritually upright and responsible citizens."
        />
        <HomeArticleModal
          imageArticle={"graduates"}
          contentTitle="SVIS Vision"
          // leftSideText={true}
          // slideDirection="right"
          contentText="Spring of Virtue Integrated School will be a superior private school providing an academic curriculum and promoting values formation and spiritual growth of the next generation of leaders, unleashing their full potential to prepare them to be responsible citizens of the society and global workforce."
        />{" "}
        <HomeArticleModal
          imageArticle={"graduates"}
          contentTitle="SVIS Facilities"
          leftSideText={true}
          slideDirection="right"
          contentText="Our goal is to create an environment that allows for optimal learning. We believe that students can learn best when they are surrounded by their peers and the resources needed to succeed. We also believe that students deserve a space in which they can be comfortable, safe, and inspired to learn."
        />
      </div>
    </div>
  );
}
