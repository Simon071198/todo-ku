import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
// import notes from './notes';
import CreateArea from './components/CreateArea';

function App() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    console.log(newItem);
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
  }

  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addItem} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          onDelete={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;

// CHALLENGE:
// 1. Implement the add note functionality
// - Create a constant that keeps track of the title and content
// - Pass the new note back to the App
// - Add new note to an array
// - Take array and render seperate Note components for each item

// 2. Implement the delete note functionality
// - Callback from the Note component to trigger a delete function
// - Use the filter function to filter out the item that needs deletion
// - Pass a id over to the Note component, pass it back to the App when deleting
