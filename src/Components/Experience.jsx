import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

// Counter animation component
const Counter = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const duration = 4000;
  const steps = 80;
  const increment = target / steps;

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(Math.ceil(current));
    }, duration / steps);

    return () => clearInterval(interval);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div
      className="mt-20 px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
      ref={ref}
    >
      {/* Case Success */}
      <div className="bg-[#F5F7FA] w-full sm:w-60 flex flex-col items-center justify-center px-4 py-6 rounded-xl text-2xl shadow-md pB">
        {inView ? <Counter target={98} suffix="%" /> : <span>0%</span>}
        <span className="text-center text-lg mt-2 pB">Case Success</span>
      </div>

      {/* Years Experience */}
      <div className="bg-[#F5F7FA] w-full sm:w-60 flex items-center justify-center px-4 py-6 rounded-xl text-2xl shadow-md gap-3 pB">
        {inView ? <Counter target={20} suffix="+" /> : <span>0+</span>}
        <div className="flex flex-col text-lg pB">
          <span>Years</span>
          <span>Experience</span>
        </div>
      </div>

      {/* Happy Clients */}
      <div className="bg-[#F5F7FA] w-full sm:w-60 flex flex-col items-center justify-center px-4 py-6 rounded-xl text-2xl shadow-md pB">
        {inView ? <Counter target={550} suffix="+" /> : <span className="pB">0</span>}
        <span className="text-center text-lg mt-2 pB">Happy Clients</span>
      </div>
    </div>
  );
};

export default Experience;
