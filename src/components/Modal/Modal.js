import { Link } from "react-router-dom";
import React from "react";
import styled from "styled-components";
import Thanks from "../../Images/thanks.gif";

const StyledModal = styled.div`
  width: 90vw;
  height: 75vh;
  background: linear-gradient(
    rgba(255, 192, 203, 0.1),
    rgba(255, 192, 203, 0.5)
  );
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  backdrop-filter: blur(5px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media all and (orientation: landscape) {
    width: 100vw;
    height: 100vh;
    padding: 8px;

    img {
      width: 20vw;
      padding: 1rem;
    }
  }

  button {
    align-items: center;
  }

  p {
    font-size: 3.44vh;
    line-height: 5vh;
    text-align: center;
    font-family: "unpack-regular";
    color: #0a2268;
    text-shadow: 5px 5px #f4c2c2;
    margin: 0;
    padding: 8px;
    @media all and (orientation: landscape) {
      font-size: 3vw;
      line-height: 2.5vw;
    }
  }
`;
function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal && (
        <StyledModal>
          <img src={Thanks} alt="dancing man" />
          <p>Thank you for your time and consideration </p>
          <button>
            {" "}
            <Link to="/">See you soon</Link>{" "}
          </button>
        </StyledModal>
      )}
    </>
  );
}

export default Modal;
