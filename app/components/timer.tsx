'use client';

import { useEffect, useState } from 'react';

interface TimeCount {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (expiry: string): TimeCount => {
  let days = '0';
  let hours = '0';
  let minutes = '0';
  let seconds = '0';

  const difference = new Date(expiry).getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days, hours, minutes, seconds };
  }

  const dys = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hrs = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const mnt = Math.floor((difference / (1000 * 60)) % 60);
  const snd = Math.floor((difference / 1000) % 60);

  days = dys < 10 ? `0${dys}` : dys.toString();
  hours = hrs < 10 ? `0${hrs}` : hrs.toString();
  minutes = mnt < 10 ? `0${mnt}` : mnt.toString();
  seconds = snd < 10 ? `0${snd}` : snd.toString();

  return { days, hours, minutes, seconds };
};

const Timer = ({ launchDate }: { launchDate: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeCount>(getTimeLeft(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(launchDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [launchDate]);

  return (
    <div className="flex flex-wrap justify-center lg:justify-start mt-6 gap-3 sm:gap-4">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
      ].map((item) => (
        <span
          key={item.label}
          className="flex flex-col justify-center items-center bg-black text-yellow-500 
                     text-2xl sm:text-3xl lg:text-5xl w-24 sm:w-28 lg:w-36 py-2 sm:py-3 
                     shadow-lg rounded-lg"
        >
          {item.value}
          <small className="text-[10px] sm:text-xs lg:text-sm uppercase font-semibold text-white">
            {item.label}
          </small>
        </span>
      ))}
    </div>
  );
};

export default Timer;
