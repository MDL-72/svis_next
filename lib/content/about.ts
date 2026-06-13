export type AboutSection = {
  id: number;
  title: string;
  paragraphs: string[];
  layout: "text-left" | "text-right";
  asset?: { type: "image"; src: string; alt: string; priority?: boolean };
  carousel?: { src: string; alt: string }[];
};

export const aboutHeroContent = {
  lines: ["About", "Spring of Virtue Integrated School"],
  subtitle:
    "A God-centered community where students grow in virtue, wisdom, and excellence.",
};

export const aboutSections: AboutSection[] = [
  {
    id: 1,
    title: "SVIS History",
    layout: "text-right",
    paragraphs: [
      "Spring of Virtue Integrated School was founded in 2008 by a group of parents and educators. It was originally called Spring of Virtue Learning Center, but in 2012, Editha Liberato decided to change the name to Spring of Virtue Integrated School. This new name was chosen because she wanted the school to be a place where students could develop their own virtues, such as honesty and courage, rather than just learning about them from books or lectures.",
      "Spring of Virtue was founded with the mission of providing an environment for children to grow up as virtuous citizens. Mrs. Liberato believed that this could be done through integrating traditional education with modern studies in order to make learning more relevant and engaging for students. They wanted their school to focus on creating a positive environment for students so they would not feel pressured or judged by others when they made mistakes or did something wrong—a belief which continues today under current leadership as well as past leaders.",
      "The school opened its doors with one classroom at first, but quickly grew into two classrooms within a few years thanks to generous donations from local businesses and individuals who believed in its mission: Rising above our differences to create a community where everyone can thrive.",
    ],
    asset: {
      type: "image",
      src: "/hero2.webp",
      alt: "Spring of Virtue Integrated School history",
      priority: true,
    },
  },
  {
    id: 2,
    title: "SVIS Mission",
    layout: "text-left",
    paragraphs: [
      "The mission of Spring of Virtue Integrated School is to provide a learner-focused and God-centered private school. Designed to promote our learners' total development, providing the opportunity to grow intellectually, emotionally, socially, environmentally conscious, spiritually upright and responsible citizens.",
    ],
    asset: {
      type: "image",
      src: "/team.webp",
      alt: "SVIS team",
    },
  },
  {
    id: 3,
    title: "SVIS Vision",
    layout: "text-right",
    paragraphs: [
      "Spring of Virtue Integrated School will be a superior private school providing an academic curriculum and promoting values formation and spiritual growth of the next generation of leaders, unleashing their full potential to prepare them to be responsible citizens of the society and global workforce.",
    ],
    asset: {
      type: "image",
      src: "/graduates.webp",
      alt: "SVIS graduates",
    },
  },
  {
    id: 4,
    title: "SVIS Facilities",
    layout: "text-left",
    paragraphs: [
      "Our goal is to create an environment that allows for optimal learning. We believe that students can learn best when they are surrounded by their peers and the resources needed to succeed. We also believe that students deserve a space in which they can be comfortable, safe, and inspired to learn.",
    ],
    carousel: [
      { src: "/computerlab.webp", alt: "SVIS computer lab" },
      { src: "/library.webp", alt: "SVIS library" },
      { src: "/sciencelab.webp", alt: "SVIS science lab" },
    ],
  },
  {
    id: 5,
    title: "SVIS Faculties",
    layout: "text-right",
    paragraphs: [
      "SVIS is a school with a difference. With experienced and highly-qualified faculties, we offer a unique learning experience that helps our students to grow and succeed. Our faculties are dedicated to their students and are always available to help them with their studies.",
      "We believe that our students should have the best possible education, and we are committed to providing them with the resources they need to succeed.",
    ],
    carousel: [
      { src: "/faculty1.webp", alt: "SVIS faculty" },
      { src: "/faculty2.webp", alt: "SVIS faculty" },
      { src: "/faculty3.webp", alt: "SVIS faculty" },
      { src: "/team.webp", alt: "SVIS team" },
      { src: "/teamstaff.webp", alt: "SVIS staff" },
    ],
  },
];
