import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
const MovieAdd = ({ movies, setMovies }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const addmovie = () => {
    if (title==="" || posterURL=== "" || description==="" || rating===0 ) 
    {alert ("Please fill in all fields!")} else 
    {setMovies([...movies,{title,posterURL,description,rating,id: Math.random,}])
      setTitle("")
      setPosterURL("")
      setDescription("")
      setRating(0)
      handleClose()}
    }
  return (
    <div className="d-flex justify-content-end">
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie title</Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Enter movie title"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie image</Form.Label>
              <Form.Control
                onChange={(e) => setPosterURL(e.target.value)}
                type="text"
                placeholder="Enter movie image"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie description</Form.Label>
              <Form.Control
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                placeholder="Enter movie description"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Movie rating</Form.Label>
              <Form.Control
                onChange={(e) => setRating(e.target.value)}
                type="number"
                placeholder="Enter movie rating"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={addmovie}>save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default MovieAdd;
