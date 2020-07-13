import React from 'react';
import Card from './components/hobbies'
import './App.css';

function App() {
  return (
    <div className="App">
      <Card 
      hobby = "Programming"
      img = "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      details = "Using the power of programming to solve problems"
      
      />
      <Card 
      hobby = "Basketball"
      img = "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60"
      details = "Breaking ankles and getting buckets"
      
      />
      <Card 
      hobby = "Languages"
      img = "https://images.unsplash.com/photo-1571498664957-fde285d79857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
      details = "Learning different cultures and bad words used all over the world"
      
      />
      
    </div>
  );
}

export default App;
