
import { count, increment } from '@/store/Slices/CounterSlices';
import styles from '@/styles/Home.module.css'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect, useState} from 'react'; 
import axios from 'axios';

export default function Home() {
  const dispatch = useDispatch();
  const counter = useSelector(count);
  
  const [service, setService] = useState ([])
  useEffect(() => {
    axios.get('https://us-central1-analytics-d2e71.cloudfunctions.net/login').then(response => setService(response.data))
  }, []);

    console.log(service);

  return (
    <>
      <div className= {styles.counterContainer}>
        <h2 > Counter: {counter}</h2>
        <div className={styles.buttonContainer}>
          <button onClick={() => dispatch(increment(1))}> Counter </button>
        </div>
      </div>
      <div className= {styles.serviceContainer}>
        <h2> message : {service.message}</h2>
      </div>
    </>
  )
}
