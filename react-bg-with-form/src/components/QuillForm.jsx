import React from 'react';
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { css } from '@emotion/css';

registerCoreBlocks();

export const QuillForm = () => {
  return (
    <div className={styles.formWrapper}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "short-text",
              id: "name",
              attributes: {
                required: true,
                label: "What's your name?"
              }
            },
            {
              name: "long-text",
              id: "bio",
              attributes: {
                required: true,
                label: "Tell us about yourself"
              }
            }
          ],
          settings: {
            disableWheelSwiping: true,
          },
          theme: {
            font: "Poppins",
            backgroundColor: 'rgba(255,255,255,0.1)',
            questionsColor: "#ffffff",
            answersColor: "#ffffff",
            buttonsBgColor: "#9b51e0",
            buttonsFontColor: "#ffffff",
          }
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          console.log(data);
          setIsSubmitting(false);
          completeForm();
        }}
      />
    </div>
  );
};

const styles = {
  formWrapper: css`
    height: 100%;
    .quillforms-renderer-core {
      height: 100% !important;
      border-radius: 20px;
      overflow: hidden;
      background-color: rgba(255,255,255,0.1);
    }
    .quillforms-renderer-core .quillforms-renderer-wrapper {
      height: 100% !important;
    }
    .quillforms-renderer-core .quillforms-renderer-wrapper .quillforms-renderer-inner-wrapper {
      height: 100% !important;
    }
    .quillforms-renderer-core .quillforms-renderer-wrapper .quillforms-renderer-inner-wrapper .quillforms-renderer-block {
      background-color: rgba(255,255,255,0.2);
      border-radius: 15px;
      padding: 20px;
      margin-bottom: 10px;
    }
  `
};