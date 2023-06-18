import React from 'react';
import { CrossIcon } from '../icons/cross-icon';
import styles from './add-category-modal.module.scss';
import { Button, variants } from '../button/button';

export const AddCategoryModal = ({ onClose }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Создание категории</h1>
        <button onClick={onClose} className={styles.crossIconContainer}>
          <CrossIcon />
        </button>

        <div>
          <Button variant="filled">Создать</Button>
          <Button variant="outlined" onClick={onClose}>Закрыть</Button>
        </div>
      </div>
    </div>
  );
};
