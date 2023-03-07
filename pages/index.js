
import { count, increment } from '@/store/Slices/CounterSlices';
import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'


export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(count);

  return (
    <>
      <div className= {styles.counterContainer}>
        <h2 > Counter: {counter}</h2>
        <div className={styles.buttonContainer}>
          <button onClick={() => dispatch(increment(1))}> Counter </button>
        </div>
      </div>
    </>
  )
}
