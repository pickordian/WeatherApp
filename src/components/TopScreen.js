import React,{useState} from 'react'
import OtherDays from './OtherDays'
import TempUnit from './TempUnit'
import '../style/TopScreen.css'
function TopScreen(props) {
  const [display, setDisplay] = useState([{ backgroundColor: "gray" },
    { backgroundColor: "gray" },
    { backgroundColor: "gray" },
    { backgroundColor: "gray" },
    { backgroundColor: "gray" },
    { backgroundColor: "gray" },
    { backgroundColor: "gray" }]);
  return (
    <div className='TopScreen'>
      <div className='Otherdays-containter'>
        <OtherDays data={props.data[0]} setMainday={props.setMainday} display={display[0]} setDisplay={setDisplay} index={0} />
        <OtherDays data={props.data[1]} setMainday={props.setMainday} display={display[1]} setDisplay={setDisplay} index={1} />
        <OtherDays data={props.data[2]} setMainday={props.setMainday} display={display[2]} setDisplay={setDisplay} index={2} />
        <OtherDays data={props.data[3]} setMainday={props.setMainday} display={display[3]} setDisplay={setDisplay} index={3} />
        <OtherDays data={props.data[4]} setMainday={props.setMainday} display={display[4]} setDisplay={setDisplay} index={4} />
        <OtherDays data={props.data[5]} setMainday={props.setMainday} display={display[5]} setDisplay={setDisplay} index={5} />
        <OtherDays data={props.data[6]} setMainday={props.setMainday} display={display[6]} setDisplay={setDisplay} index={6} />
      </div>
      <TempUnit setAmerican={props.setAmerican} />
    </div>
  )
}
export default TopScreen