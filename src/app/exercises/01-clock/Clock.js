"use client";
import React from "react";
import format from "date-fns/format";
import Spinner from "../../../components/Spinner/Spinner";

function Clock() {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 50);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return (
    <p className="clock">
      {time === 0 ? <Spinner /> : format(time, "hh:mm:ss.S a")}
    </p>
  );
}

export default Clock;
