"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 700);
    return () => clearTimeout(t);
  }, []);
  return (
    <div id="loader" className={done ? "done" : ""}>
      <div className="loader-mark">
        <div className="loader-ring" />
        <span>LOADING</span>
      </div>
    </div>
  );
}



