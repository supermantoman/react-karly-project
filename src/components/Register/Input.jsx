import React from 'react';
import styles from '@/components/Register/Input.module.css';

export function Input({
  title,
  placeholder,
  labelClassName,
  inputClassName,
  type,
  onChange,
}) {
  return (
    <>
      <label className={styles[labelClassName]}>{title}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        onChange={onChange}
        className={styles['register-input']}
        value={value}
        {...input}
      />
    </>
  );
}
