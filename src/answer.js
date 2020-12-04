import React, { useState, useEffect } from "react";

const Answer = (props) => {
  // const [time, setTime] = useState(null);
  const [date, setDate] = useState(null);
  const [seconds, setSeconds] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)

  useEffect(() => {
    const timer = setInterval(() => dateAndTime(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, [])

  const dateAndTime = () => {
    setDate(new Date().toLocaleDateString())
    // setTime(new Date().toLocaleTimeString())
    setHours(new Date().getHours())
    setMinutes(new Date().getMinutes())
    setSeconds(new Date().getSeconds())
  }

  const { input } = props

  return (
    <div>
      {typeof input === "object" ? (
        <div>
          <h3>List of Array Elements</h3>
          <>
            {input.map((input) => (
              <div>{input}</div>
            ))}
          </>
        </div>
      ) : (
        input
      )}
      {input === undefined || input === false ? (
        <div>
          <h3>Today's Date: {date}</h3>
          {seconds % 2 === 0 ?  
            <h3>Current Time: <div>{hours}:{minutes}:{seconds}</div></h3> 
          : 
            <h3>Current Time: <div className='time'>{hours}:{minutes}:{seconds}</div></h3> 
          }
        </div>
      ) : 
      null
      }
    </div>
  )
}

export default Answer