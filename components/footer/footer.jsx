import React from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

// import mapPin_icon from "../../assets/image/map_pin.png";
// import telephone_icon from "../../assets/image/telephone.png";
// import mobile_icon from "../../assets/image/phone.png";
// import eMail_icon from "../../assets/image/email.png";
// import fb_icon from "../../assets/image/facebook.png";

export default function Footer() {
  return (
    <div className={styles["footer__cont"]}>
      <div className={styles["footer"]}>
        <div className={styles["footer__address__cont"]}>
          <Image src={"/map_pin.png"} alt="map_pin" height={25} width={100} />
          <span>
            Blk 25 Lot 1 Phase 2 Pinagsama Village,
            <br />
            Western Bicutan, Taguig City
          </span>
        </div>
        <div className={styles["footer__contacts__cont"]}>
          <div className={styles["footer__contacts__item"]}>
            <Image
              src={"/telephone.png"}
              alt="map_pin"
              height={25}
              width={100}
            />
            <span>02-85856240</span>
          </div>
          <div className={styles["footer__contacts__item"]}>
            <Image src={"/phone.png"} alt="map_pin" height={25} width={100} />
            <span>0949-560-9903 / 0917-838-9940</span>
          </div>
          <div className={styles["footer__contacts__item"]}>
            <Image src={"/email.png"} alt="map_pin" height={25} width={100} />
            <span>springofvirtue08@yahoo.com</span>
          </div>
        </div>
        <div className={styles["footer__social__cont"]}>
          <div className={styles["footer__social"]}>
            <span>Follow us on</span>
            <a
              href="https://www.facebook.com/SVISofficial"
              rel="noreferrer"
              target={"_blank"}
            >
              <Image
                src={"/facebook.png"}
                alt="SVIS Facebook icon"
                height={25}
                width={100}
              />
            </a>
          </div>
        </div>
      </div>
      <div className={styles["footer__copyright__cont"]}>
        <span>
          <small>
            &copy;2022 Spring of Virtue Integrated School, Inc. All rights
            reserved
          </small>
        </span>
      </div>
    </div>
  );
}
