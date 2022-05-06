
import {Col, Container, Row} from 'react-bootstrap'
import NoteForm from './components/note-form';
import Notes from './components/notes';
import {useEffect, useState} from 'react';
import axios from 'axios'

function App() {
  const [notes, setNotes] = useState([]);
  const [counter, setCounter] = useState(0);


  
  useEffect( ()=> {
    loadNotes();
  }, [])

  const loadNotes = () => { 
    axios("https://jsonplaceholder.typicode.com/posts")
    .then(resp=> setNotes(resp.data));
   }    

   const removeNote = (id)=>{
       const arr = notes.filter((item)=> item.id !==id);
       setNotes(arr);
   }


   let value = "";
   let title = "";

    const getValue = (text) =>{
      value = text.target.value;
  }
  const getTitle = (text) =>{
    title = text.target.value;
}

   const addNote = async ()=>{
    

    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        body: value,
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
})

  
  .then((response) => {
    console.log(response.status);
    if(response.status !== 201){
      return
    }else{
      return response.json();
    }
  })
  .then((json) => setNotes(notes=>{
    json.id += counter;
    // console.log(json.id);
    setCounter(counter+1);
    // console.log(counter);
    
    return [json, ...notes]

  }))
  .catch((err) =>{
    console.log(err);
  })
   }


  return (
    <Container>
      <Row>
        <Col md={3}>
          <NoteForm addNote={addNote} getValue={getValue} getTitle={getTitle}/>
        </Col>
        <Col>
          <Notes data={notes} removeNote={removeNote}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
