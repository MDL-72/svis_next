import styles from "./navigation.module.scss";
import Link from "next/link";
import SiteLogo from "@/components/layout/site-logo";

export default function Mobilenav(props) {
  const { menuList } = props;
  return (
    <>
      <div className={styles.mobile__menu__logo__cont}>
        <SiteLogo className="h-full w-full" />
      </div>
      <div className={styles.mobile__menu}>
        {menuList.map((item) => {
          return (
            <Link
              key={item.id}
              href={item.path}
              className={styles.mobile__menu__item}
              //   onClick={() => setMobileMenu(!mobileMenu)}
            >
              {item.menuName}
            </Link>
          );
        })}
      </div>
    </>
  );
}
