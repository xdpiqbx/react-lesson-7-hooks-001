// import { useEffect, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import styles from './SignupForm.module.css';

// const useLocalStorage = (key, defaultValue) => {
//   const [state, setState] = useState( () => {
//     return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue
//   })

//   useEffect( () => {
//     window.localStorage.setItem(key, JSON.stringify(state))
//   }, [key, state])

//   return [state, setState]
// }

export default function SignupForm() {
  // Так интерпретатор JS будет обращатся к localStorage постоянно
  // const [email, setEmail] = useState(JSON.parse(window.localStorage.getItem('email')) ?? '')
  // const [password, setPassword] = useState(JSON.parse(window.localStorage.getItem('password')) ?? '')
  
  //Лучше воспользоватся lazy state initialization
  const [email, setEmail] = useLocalStorage('email', '')
  const [password, setPassword] = useLocalStorage('password', '')

  const handleChange = event => {
    switch(event.target.name){
      case 'email':
        setEmail(event.target.value)
        break;
      case 'password':
        setPassword(event.target.value)
        break;
      default:
        break;
    }
  }

  return (
    <form className={styles.form} autoComplete="off">
      <label className={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label className={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}