import React, { useEffect, useState } from "react";
import styled from "styled-components";
const TimelineStyled = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    font-size: 2rem;
    font-weight: 500;
  }
`;

function TimeLine() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (second < 60) {
        setSecond(second + 1);
        return;
      }
      setMinute(minute + 1);
      setSecond(0);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div>
      <TimelineStyled>
  <p>Time: {minute}: {second}</p>
        <p>Flip:12</p>
      </TimelineStyled>
    </div>
  );
}

export default TimeLine;
