import React from 'react';
import { css } from '@emotion/css';
import { TCanvas } from './components/TCanvas';
import { QuillForm } from './components/QuillForm';

const App = () => {
  return (
    <div className={styles.container}>
      <TCanvas />
      <div className={styles.formContainer}>
      <QuillForm borderRadius="10px" />
      </div>
    </div>
  )
}

const styles = {
  container: css`
    position: relative;
    width: 100vw;
    height: 100vh;
  `,
  formContainer: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);  
    width: 80%;
    max-width: 600px;
    height: 70vh;
    z-index: 10;
    background-color: rgba(255, 255, 255, 0.1);
  `
}

export default App;