import React, { useState } from 'react';
import styles from './header.module.scss';
import { AddCategoryModal } from '../add-category-modal/add-category-modal';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const hanldeModalOpen = () => {
    setIsOpen(true);
  };

  const hanldeModalClose = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>ToDo List</div>
      <div className={styles.menu}>Категории</div>
      <div className={styles.addCategory} onClick={hanldeModalOpen}>
        Добавить категорию
      </div>

      {isOpen && <AddCategoryModal onClose={hanldeModalClose}  />}
    </header>
  );
};
