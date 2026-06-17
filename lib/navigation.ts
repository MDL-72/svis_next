export type NavItem = {
  id: number;
  path: string;
  menuName: string;
};

export const menuList: NavItem[] = [
  { id: 1, path: "/", menuName: "Home" },
  { id: 2, path: "/about-us", menuName: "About us" },
  { id: 3, path: "/contact-us", menuName: "Contact us" },
];
