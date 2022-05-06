import { Button, Form } from "react-bootstrap";

const NoteForm = ({addNote, getValue, getTitle}) => {
    // const [value, setValue] = useState('');

    // const getValue = (text) =>{
    //     setValue(text.target.value);
    // }
    

  return (

    <>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Konu :</Form.Label>
            <Form.Control onChange={(e)=>getTitle(e)} type="email"/>
            <Form.Label>Notunuzu Giriniz :</Form.Label>
            <Form.Control onChange={(e)=>getValue(e)} type="email"/>
        </Form.Group>
        <Button variant="warning" onClick={()=>addNote()}>Ekle</Button>

    </>

    );
}; 

export default NoteForm;
