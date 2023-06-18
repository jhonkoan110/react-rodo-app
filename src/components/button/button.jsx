import React from 'react';
import cn from 'classnames';
import styles from './button.module.scss';

export const variants = {
  filled: styles.filled,
  outlined: styles.outlined,
  default: styles.default,
};

export const Button = ({ variant = 'default', children }) => {
  const className = variants[variant];

  return <button className={cn(styles.button, className)}>{children}</button>;
};
