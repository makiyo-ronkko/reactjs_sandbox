import React, { useState } from 'react';
import Content from './Content/Content';
import Button from './Button/Button';

const App = () => {
  const [likecounter, setLikeCounter] = useState(0);
  const [dislikecounter, setDislikeCounter] = useState(0);

  const addHandler = () => setLikeCounter(likecounter + 1);
  const removeHandler = () => setDislikeCounter(dislikecounter + 1);
  const resetHandler = () => [setLikeCounter(0), setDislikeCounter(0)];

  return (
    <div>
      <div className="button-container">
        <Button click={addHandler} text="Like" />

        <Button click={removeHandler} text="Dislike" />
        <Button click={resetHandler} text="Reset" />
      </div>
      <div className="display-container">
        <Content likecounter={likecounter} dislikecounter={dislikecounter} />
      </div>
    </div>
  );
}

export default App;
