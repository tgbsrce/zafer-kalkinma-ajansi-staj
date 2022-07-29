import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValue, deleteValue, getList } from "../Slices/PlanBiSlice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function PlanBiForm(props) {
  const dispatch = useDispatch();
  function createGuid() {
    function S4() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (
      S4() +
      S4() +
      "-" +
      S4() +
      "-4" +
      S4().substr(0, 3) +
      "-" +
      S4() +
      "-" +
      S4() +
      S4() +
      S4()
    ).toLowerCase();
  }
  const intialItem = {
    Id: createGuid(),
    IpAdress:"",
    ServerName:"",
    PersonName: "",
    UserName:"",
    Password:"",
    Description:"",
    
  };
  const [planbiState, setPlanbiState] = useState(intialItem);
  const handleChange = (event) => {
    setPlanbiState({ ...planbiState, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addValue(planbiState));
    console.log(planbiState);
    setPlanbiState(intialItem);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>IP / Adresi:</Form.Label>
          <Form.Control
            placeholder="Lütfen ip/adres giriniz."
            name="IpAdress"
            onChange={handleChange}
            value={planbiState.IpAdress}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Sunucu Adı:</Form.Label>
          <Form.Control
            placeholder="Lütfen sunucu adını giriniz."
            name="ServerName"
            onChange={handleChange}
            value={planbiState.ServerName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Kullanıcı Adı:</Form.Label>
          <Form.Control
            placeholder="Lütfen kullanıcı adını giriniz."
            name="UserName"
            onChange={handleChange}
            value={planbiState.UserName}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Parola:</Form.Label>
          <Form.Control
            placeholder="Lütfen parolayı  giriniz."
            name="Password"
            onChange={handleChange}
            value={planbiState.Password}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Açıklama:</Form.Label>
          <Form.Control
            placeholder="Lütfen açıklama giriniz."
            name="Description"
            onChange={handleChange}
            value={planbiState.Description}
          />
        </Form.Group>
    
        <div className="planbi-footer">
          <Button variant="secondary" onClick={props.onHide}>
            Kapat
          </Button>
          <Button variant="primary" type="submit" className="ms-2">
            Kaydet
          </Button>
        </div>

      </Form>
    </>
  );
}
