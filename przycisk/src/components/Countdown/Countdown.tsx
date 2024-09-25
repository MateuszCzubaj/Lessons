import { useEffect, useState } from "react";

const Countdown = () => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    while (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  return <div>{seconds}</div>;
};

export default Countdown;
