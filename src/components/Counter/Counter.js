import { useState, useEffect } from 'react';
import styles from './Counter.module.css';

export default function Counter (){
  const [counterA, setCounterA] = useState(0)
  const [counterB, setCounterB] = useState(0)

  const handleCounterAIncrement = () => {
    setCounterA(prevState => prevState + 1)
  }

  const handleCounterBIncrement = () => {
    setCounterB(prevState => prevState + 1)
  }

  /*
    useEffect - выполняется АСИНХРОННО !
    useEffect( () => { колбек }, [массив зависимостей] )
    useEffect - можно объявить больше одного

    - если нет воторого параметра будет вызываться постоянно
    useEffect( () => { ... } )

    - если передать пустой массив значит что useEffect не зависит не от чего,
    запустится при первом рендере и больше никогда
    useEffect( () => { ... }, [] )

    - если передать массив зависимостей то useEffect отработает первый раз - 100%
    и при каждом изменении состояния из массива
    useEffect( () => { ... }, [someState] )

    - из useEffect можно вернуть функцию очистки.
    функция которая будет вызвана при размонтировании компонента
    пример в Clock
    useEffect( () => { ... return () => {...} }, [...] )
  */

  useEffect(()=>{
    const totalClicks = counterA + counterB;
    document.title = `Всего кликнули ${totalClicks} раз`;
  }, [counterA, counterB])

  return (
    <>
      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterAIncrement}
      >
        Кликнули counterA {counterA} раз
      </button>

      <button
        className={styles.btn}
        type="button"
        onClick={handleCounterBIncrement}
      >
        Кликнули counterB {counterB} раз
      </button>
    </>
  );

}

// class OldCounter extends Component {
//   state = {
//     counterA: 0,
//     counterB: 0,
//   };
//   handleCounterAIncrement = () => {
//     this.setState(({ counterA }) => ({ counterA: counterA + 1 }));
//   };

//   handleCounterBIncrement = () => {
//     this.setState(({ counterB }) => ({ counterB: counterB + 1 }));
//   };

// componentDidMount() {
//   const { counterA, counterB } = this.state;
//   const totalClicks = counterA + counterB;

//   document.title = `Всего кликнули ${totalClicks} раз`;
// }

// componentDidUpdate(prevProps, prevState) {
//   const { counterA, counterB } = this.state;

//   if (prevState.counterA !== counterA || prevState.counterB !== counterB) {
//     const totalClicks = counterA + counterB;

//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }
// }

//   render() {
//     return (
//       <>
//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterAIncrement}
//         >
//           Кликнули counterA {this.state.counterA} раз
//         </button>

//         <button
//           className={styles.btn}
//           type="button"
//           onClick={this.handleCounterBIncrement}
//         >
//           Кликнули counterB {this.state.counterB} раз
//         </button>
//       </>
//     );
//   }
// }

// export default function Counter() {
//   const [counterA, setCounterA] = useState(0);
//   const [counterB, setCounterB] = useState(0);

//   const handleCounterAIncrement = () => {
//     setCounterA(state => state + 1);
//   };

//   const handleCounterBIncrement = () => {
//     setCounterB(state => state + 1);
//   };

//   useEffect(() => {
//     const totalClicks = counterA + counterB;
//     document.title = `Всего кликнули ${totalClicks} раз`;
//   }, [counterA, counterB]);

//   return (
//     <>
//       <button
//         className={styles.btn}
//         type="button"
//         onClick={handleCounterAIncrement}
//       >
//         Кликнули counterA {counterA} раз
//       </button>

//       <button
//         className={styles.btn}
//         type="button"
//         onClick={handleCounterBIncrement}
//       >
//         Кликнули counterB {counterB} раз
//       </button>
//     </>
//   );
// }
