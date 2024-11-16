import React, { useRef, useEffect } from "react";

export default function ValueDisplay({ value }) {
  const previousValue = useRef("");

  useEffect(() => {
    previousValue.current = value;
  }, [value]);

  return (
    <div>
      <p>Current Value: {value}</p>
      <p>Previous Value: {previousValue.current}</p>
    </div>
  );
}

