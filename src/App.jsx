import { useRef } from "react";

const App = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const submitRef = useRef(null);

  const handleNext = (currentRef, nextRef) => {
    if (nextRef.current) {
      nextRef.current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Hello");
    console.log(nameRef.current);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>name : </label>
          <input ref={nameRef} type="text" />
          <button type="button" onClick={() => handleNext(nameRef, emailRef)}>
            next
          </button>
        </div>

        <div>
          <label> email : </label>
          <input ref={emailRef} type="text" />
          <button type="button" onClick={() => handleNext(nameRef, emailRef)}>
            next
          </button>
        </div>

        <div>
          <label>password : </label>
          <input ref={passwordRef} type="text" />
          <button type="button" onClick={() => handleNext(nameRef, emailRef)}>
            next
          </button>
        </div>

        <button ref={submitRef} type="submit"></button>
      </form>
    </div>
  );
};

export default App;
