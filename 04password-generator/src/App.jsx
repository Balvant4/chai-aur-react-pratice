import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(6);
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallwoed, setCharallwoed] = useState(false);
  const [password, setPassword] = useState("");

  // ref hook
  const passwordRef = useRef(null);

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqurstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYZ";

    if (numberallowed) str += "1234567890";
    if (charallwoed) str += "<>,.~!@#$%^&*()_+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberallowed, charallwoed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordgenerator();
  }, [length, numberallowed, charallwoed, passwordgenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg my-8 bg-gray-800 text-orange-500">
        <h1 className=" text-2xl text-white text-center">Password Generator</h1>
        <div className=" flex shadow rounded-lg overflow-hidden my-5">
          <input
            type="text"
            placeholder="password"
            className=" outline-none w-full py-1 px-3"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" bg-green-600 px-3 py-2 font-serif font-bold"
          >
            Copy
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className=" cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={charallwoed}
              id="characterInput"
              onChange={() => {
                (prev) => !prev;
              }}
            />
            Characters
          </div>
          <div>
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                setNumberallowed((prev) => !prev);
              }}
            />
            Number
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
