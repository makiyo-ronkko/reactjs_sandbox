import React, { useState } from 'react';
import Content from './Content/Content';
import Button from './Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";


const App = () => {
  const [likecounter, setLikeCounter] = useState(0);
  const [dislikecounter, setDislikeCounter] = useState(0);

  const addHandler = () => setLikeCounter(likecounter + 1);
  const removeHandler = () => setDislikeCounter(dislikecounter + 1);
  const resetHandler = () => {
    setLikeCounter(0);
    setDislikeCounter(0)
  };

  return (
    <div className="main-container">
      <div className="button-container">
        <Button clickHandler={addHandler} text="Like">
          <FontAwesomeIcon icon={faThumbsUp} />
        </Button>
        <Button clickHandler={removeHandler} text="Dislike">
          <FontAwesomeIcon icon={faThumbsDown} />
        </Button>
        <Button clickHandler={resetHandler} text="Reset" />
      </div>
      <div>
        <Content likecounter={likecounter} dislikecounter={dislikecounter} />
      </div>
    </div>
  );
}

export default App;
