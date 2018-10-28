import React, { Component } from "react";
import { API } from "./Api";

function authorize() {
  const formData = new FormData();
  formData.append("username", "Nikita");
  formData.append("email", "n1ikita@mail.ru");
  formData.append("password", "1");
  fetch(API.LOG_IN, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: formData
  }).then(response => response.json());
}
