import styled from 'styled-components';
import { ToastContainer as Toast } from 'react-toastify';

const ToastContainer = styled(Toast)`
  .Toastify__toast {
  }

  .Toastify__close-button--colored {
    display: none;
  }

  .Toastify__toast-body {
    width: 300px;
    height: 36px;
    color: #fff;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .Toastify__toast-icon {
    display: none;
  }

  .Toastify__toast-theme--colored.Toastify__toast--default {
    .Toastify__toast-body {
      background-color: green;
    }
  }

  .Toastify__toast-theme--colored.Toastify__toast--error {
    .Toastify__toast-body {
      /* background-color: #ffaa33; */
    }
  }
`;

export default ToastContainer;
