import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  className = "",
  disabled = false,
  ...rest
}) {
  const classes = [
    styles["btn"],
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    disabled ? styles["btn--disabled"] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

    return (
        <button className={classes} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(["primary", "secondary", "ghost"]),
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
}
