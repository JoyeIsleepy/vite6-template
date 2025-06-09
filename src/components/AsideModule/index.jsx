import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export default function index({ children, gridAutoRows, extraName = "" }) {
  return (
    <div
      style={gridAutoRows ? { gridAutoRows } : {}}
      className={classNames(styles.asideModule, styles[extraName])}
    >
      {children}
    </div>
  );
}
