import React, { useState, useEffect, memo } from "react";
// import PageTabs from "./PageTabs";
import styles from "./index.module.scss";

export default memo(function index({ left, center, right, mapCom }) {
  return (
    <div className={styles.layoutBox}>
      <div className={styles.headBg}>
        {/* <div>{time}</div> */}
        <div className={styles.mainTitle}>容县沙田柚数字驾驶舱</div>
        <div>技术支持：超级码科技股份</div>
        {/* <img
          className={styles.moveImg}
          src={`/dataScreen/image/common/head_bg.png`}
        /> */}
      </div>
      <div className={styles.content}>
        <div className={styles.leftBox}>{left}</div>
        <div className={styles.centerBox}>{center}</div>
        <div className={styles.rightBox}>{right}</div>
      </div>
      <div className={styles.footBg}></div>
      {/* <PageTabs /> */}
      {mapCom}
    </div>
  );
});
