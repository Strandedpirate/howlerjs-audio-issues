import "./App.css";

import { useState } from "react";

import TypingProviderHTML5 from "./components/TypingProviderHTML5";
import TypingProviderWebAudioApi from "./components/TypingProviderWebAudioApi";

function App() {
  const [webaudioCount, setWebaudioCount] = useState(0);
  const [html5Count, setHtml5Count] = useState(0);

  return (
    <div className="App">
      <p>
        The root cause of the audio cutting out was that I was calling `new Howl()` inside my react component's
        function. Since the typing re-rendered the component, the browser window eventually ran out of memory newing up
        all those instances.Once I moved the new up to the module level the bug went away.
      </p>
      <TypingProviderWebAudioApi>
        <h2>WebAudioApi</h2>
        <p>Type in the box. After approximately ~160 characters the audio will cut out and cease to function.</p>
        <textarea cols={80} rows={6} onKeyUp={() => setWebaudioCount(webaudioCount + 1)}></textarea>
        <p>
          Type Count: <code>{webaudioCount}</code>
        </p>
      </TypingProviderWebAudioApi>
      <br />
      <TypingProviderHTML5>
        <h2>HTML5</h2>
        <p>Type in the box. No issues with HTML5 audio.</p>
        <textarea cols={80} rows={6} onKeyUp={() => setHtml5Count(html5Count + 1)}></textarea>
        <p>
          Type Count: <code>{html5Count}</code>
        </p>
      </TypingProviderHTML5>
    </div>
  );
}

export default App;
