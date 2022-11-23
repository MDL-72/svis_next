import styles from "./navigation.module.scss";
import Link from "next/link";

export default function Mobilenav(props) {
  const { menuList } = props;
  return (
    <>
      <div className={styles.mobile__menu__logo__cont}>
        <img src={"/logo.png"} alt="" />
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
