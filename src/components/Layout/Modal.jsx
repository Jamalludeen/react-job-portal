import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";
import { Button } from "@mantine/core";

const Backdrop = (props) => {
  return <div onClick={props.onCloseCart} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div
        className={classes.content}
        style={{ maxHeight: "400px", overflowY: "auto" }}
      >
        {props.children}
      </div>
      <div className={classes.actions}>
        <Button onClick={props.onCloseCart} variant="filled" color="red">
          Close
        </Button>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseCart={props.onCloseCart}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
