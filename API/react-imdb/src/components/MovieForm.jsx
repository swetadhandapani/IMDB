import axios from "axios";
import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export default function MovieForm({ isUpdate }) {
  const [formData, setFormData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const setTimeOut = () => {
    setTimeout(() => {
      setSuccess(false);
      setError(false);
    }, 5000);
  };

  const handleSubmit = () => {
    if (isUpdate) {
      // Update movie
      axios
        .put(`http://localhost:3000/api/movie/${id}`, formData)
        .then((res) => {
          setSuccess(true);
          setFormData({});
          setId("");
          setTimeOut();
        })
        .catch((err) => {
          setError(true);
          console.log(err);
          setTimeOut();
        });
    } else {
      // Create new movie
      axios
        .post(`http://localhost:3000/api/movie/`, formData)
        .then((res) => {
          setSuccess(true);
          setFormData({});
          setTimeOut();
        })
        .catch((err) => {
          setError(true);
          console.log(err);
          setTimeOut();
        });
    }
  };

  return (
    <div>
      {success &&
        (isUpdate ? (
          <Alert variant="success">Movie Updated Successfully</Alert>
        ) : (
          <Alert variant="success">Movie Added Successfully</Alert>
        ))}

      {error &&
        (isUpdate ? (
          <Alert variant="danger">Unable to Update Movie</Alert>
        ) : (
          <Alert variant="danger">Unable to Add Movie</Alert>
        ))}

      {isUpdate && (
        <Form.Group>
          <Form.Label>Id</Form.Label>
          <Form.Control
            type="text"
            name="id"
            value={formData.id}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>
      )}
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Year</Form.Label>
        <Form.Control
          type="text"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
      </Form.Group>
      {
        <Button variant="primary" onClick={handleSubmit}>
          {isUpdate ? "Update" : "Add"}
        </Button>
      }
    </div>
  );
}
