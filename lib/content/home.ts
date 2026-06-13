export type HomeArticle = {
  id: number;
  bannerTitleLine1: string;
  bannerTitleLine2: string | null;
  articleAnimationJson: string;
  articleContentTitle: string;
  articleContentText: string;
  articleContentTextLine1: string | null;
  articleContentTextLine2: string | null;
  articleCta: boolean;
  articleCtaText: string;
  isArticleLeftSidedText: boolean;
  articleCtaPath: string;
  articleImageSlideDirection: "left" | "right";
};

export type Course = {
  id: number;
  image: string;
  title: string;
  title2?: string;
  title3: string;
  desc: string;
  desc2?: string;
};

export const enrollmentContent = {
  animationJson: "lottie-register",
  contentTitle: "Enrollment",
  contentLine1: "Is Now Ongoing",
  contentLine2: "for SY: 2025 - 2026",
  ctaText: "Be a SVISian now",
  ctaPath: "/contact-us",
};

export const homeArticles: HomeArticle[] = [
  {
    id: 1,
    bannerTitleLine1: "Why Choose",
    bannerTitleLine2: "Spring of Virtue Integrated School ?",
    articleAnimationJson: "lottie-teacher",
    articleContentTitle: "Spring of Virtue Integrated School",
    articleContentText:
      "Is a unique school that provides an extraordinary education for your child. Our teachers are highly skilled and experienced professionals who are passionate about their work. They use innovative teaching methods to engage your child and help them reach their full potential.",
    articleContentTextLine1: null,
    articleContentTextLine2: null,
    articleCta: true,
    articleCtaText: "Know more about SVIS",
    isArticleLeftSidedText: true,
    articleCtaPath: "/about-us",
    articleImageSlideDirection: "right",
  },
  {
    id: 2,
    bannerTitleLine1: "Scholarship Program",
    bannerTitleLine2: null,
    articleAnimationJson: "lottie-book",
    articleContentTitle: "SVIS in Partnership with TLC",
    articleContentText:
      "SVIS is partnered with TLC Scholarship Program, which offers scholarships in exchange for academic excellence and community involvement.",
    articleContentTextLine1:
      "As a member of TLC, you'll receive books, school uniforms, and an allowance—all free of charge!",
    articleContentTextLine2: null,
    articleCta: true,
    articleCtaText: "Apply now",
    isArticleLeftSidedText: false,
    articleCtaPath: "/contact-us",
    articleImageSlideDirection: "left",
  },
];

export const courses: Course[] = [
  {
    id: 1,
    image: "kindergarten",
    title: "Kindergarten I",
    title2: "&",
    title3: "Kindergarten II",
    desc: "It can be a big adjustment when kids head to the Kindergarten! We're here to help you feel confident that your child will have a great time in class.",
    desc2: "Start your child's journey with SVIS.",
  },
  {
    id: 2,
    image: "elementary",
    title: "Elementary",
    title3: "Grade 1 - Grade 6",
    desc: "All our children are precious, and their dreams are worth pursuing. See them reveal their true potential and bring out the best in themselves, through the pursuit of knowledge, wisdom, and courage.",
    desc2: "Give your child a head start by enrolling them at SVIS today.",
  },
  {
    id: 3,
    image: "highschool",
    title: "High School",
    title3: "Grade 7 - Grade 10",
    desc: "SVIS courses are designed to provide students with the skills and knowledge they need to succeed in college and their future careers. Our courses are taught by experienced and qualified teachers who are dedicated to helping students succeed.",
  },
];
