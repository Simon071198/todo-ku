import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Fab } from '@mui/material';
import { Zoom } from '@mui/material';

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: '',
    content: '',
  });

  const [isExpended, setExpanded] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputText((prevItems) => {
      return {
        ...prevItems,
        [name]: value,
      };
    });
  }

  function submitItem(e) {
    props.onAdd(inputText);
    setInputText({
      title: '',
      content: '',
    });
    e.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className='create-note'>
        {isExpended && (
          <input
            onChange={handleChange}
            value={inputText.title}
            name='title'
            placeholder='Title'
          />
        )}

        <textarea
          onClick={expand}
          onChange={handleChange}
          value={inputText.content}
          name='content'
          placeholder='Take a note...'
          rows={isExpended ? 3 : 1}
        />

        <Zoom in={isExpended}>
          <Fab onClick={submitItem}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
