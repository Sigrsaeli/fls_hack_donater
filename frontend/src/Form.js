import React, { Component, PropTypes } from "react";

import CSRFToken from "./Csrftoken";

class aForm extends Component {
  render() {
    return (
      <form action="/endpoint" method="post">
        <CSRFToken />
        <button type="submit">Send</button>
      </form>
    );
  }
}

export default aForm;
