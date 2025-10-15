import { useEffect, useRef } from "react";
import "./index.css";

const App1 = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="">
      <h2 className="title">auto scroll example</h2>
      <div className="section top-section">
        <h3>scroll down automatically</h3>
      </div>

      <div ref={scrollRef} className="section target-section">
        <h2>you landed here !</h2>
      </div>

      <div className="section"> another section</div>
    </div>
  );
};

export default App1;
