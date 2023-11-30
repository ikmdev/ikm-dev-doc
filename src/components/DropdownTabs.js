import React, { useState } from 'react';
import styles from './DropdownTabs.module.css';

const DropdownTabs = ({ tabs }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState(tabs[0].label);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectTab = (tab) => {
    setSelectedTab(tab.label);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn} onClick={toggleDropdown}>
        {selectedTab}
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
          {tabs.map(tab => (
            <a key={tab.label} onClick={() => selectTab(tab)}>
              {tab.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownTabs;
