import { useState } from 'react';
import styles from './ColorPicker.module.css';

export default function ColorPicker ({ options }) {
  
  const [activeOptionIdx, setActiveOptionIdx] = useState(0)

  const {label} = options[activeOptionIdx]

  const makeOptionClassName = index => {
    return index === activeOptionIdx
      ? styles.activeOption
      : styles.option;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Color Picker</h2>
      <p>Выбран цвет: {label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            aria-label={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  )
}