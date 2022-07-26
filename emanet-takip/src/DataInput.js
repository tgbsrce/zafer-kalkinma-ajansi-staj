import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class DataInput extends Component {
  render() {
    return (
      <>
        <Form>
          <Form.Group className="mb-3 mt-5">
            <Form.Label>Emaneti alan kişi:</Form.Label>
            <Form.Control placeholder="Lütfen adınızı giriniz." />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Emanet alınan malzeme:</Form.Label>
            <Form.Control placeholder="Emanet aldığınız malzemeyi giriniz." />
          </Form.Group>

          <Button variant="secondary" type="submit">
            Kaydet
          </Button>
        </Form>
      </>
    );
  }
}
