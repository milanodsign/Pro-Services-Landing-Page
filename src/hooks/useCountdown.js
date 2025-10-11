import { useState, useEffect, useRef } from "react";

const useCountdown = (initialTargetDate) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  const targetDateRef = useRef(initialTargetDate);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const target = targetDateRef.current;
      const difference = target - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // Cuando llega a cero, reiniciar a 24 horas
        const newTargetDate = new Date(
          Date.now() + 24 * 60 * 60 * 1000
        ).getTime();
        const newDifference = newTargetDate - now;

        const days = Math.floor(newDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (newDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (newDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((newDifference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // Actualizar la fecha objetivo para el próximo ciclo
        targetDateRef.current = newTargetDate;
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [initialTargetDate]);

  return timeLeft;
};

export default useCountdown;
