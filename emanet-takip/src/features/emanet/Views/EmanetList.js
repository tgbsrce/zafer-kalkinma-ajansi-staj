import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addValue, deleteValue, getList } from "../Slices/emanetSlice";
import Table from "react-bootstrap/Table";

export default function EmanetList() {
  const itemList = useSelector(state=>state.emanet);
  console.log(itemList);
  const dispatch = useDispatch();
  return (
    <>           
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Personel Adı</th>
              <th>Malzeme Adı</th>
              <th>Tarih</th>
            </tr>
          </thead>
          <tbody>
            {itemList.value &&
              itemList.value.map((item, key) => {
                return (
                  <tr key={item.Id}>                   
                    <td>{item.PersonName}</td>
                    <td>{item.ItemName}</td>
                    <td>{item.CreateTime}</td>                    
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </>   
  );
}
