import logo from './logo.svg';
import './App.css';
import { Button } from './components/timerButtons';
import{useState} from "react"

function App() {
  let [count, setCount] = useState(0);
  let [timerId, setTimerId] = useState(0);
  let [seconds, setSeconds] = useState("0" + 0);
  let [minutes, setMinutes] = useState("0" + 0);
  let [hours, setHours] = useState("0" + 0);

let start = () => {

        setTimerId( setInterval( () => {
          count++;
          seconds = count % 60;
          minutes = parseInt((count/60) % 60);
          hours = parseInt(count/3600);

          if(seconds < 10){
            seconds = "0" + seconds;
          }
          if(minutes < 10){
            minutes = "0" + minutes;
          }
          if(hours < 10){
            hours = "0" + hours;
          }

         setCount(count);
         setSeconds(seconds);
         setMinutes(minutes);
         setHours(hours);
        } ,1000));
        
}

let stop = () => {
  clearInterval(timerId);
}

let reset = () => {
        clearInterval(timerId);
        setCount(0);
        setSeconds("0" + 0);
        setMinutes("0" + 0);
        setHours("0" + 0);
}
  return (
    <>
      <span> {hours} : {minutes} : {seconds} </span>
      <Button text = "Start" callBack = {start} ></Button>
      <Button text = "Pause" callBack = {stop} ></Button>
      <Button text = "Reset" callBack = {reset} ></Button>
    </>
  );
}

export default App;
