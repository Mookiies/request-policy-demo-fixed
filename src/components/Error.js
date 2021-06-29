import React from "react";

export const Error = props => (
  <>
    <h4>Error</h4>
    <p>Something went wrong</p>
    <p>Message: {props.children}</p>
  </>
);

Error.displayName = "Error";
