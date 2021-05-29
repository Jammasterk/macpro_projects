import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

const Wrapper = styled.div`
  form {
    width: 80%;
    margin: 0 auto;
    height: 425spx;
    padding: 2em;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;
    margin-bottom: 2em;
  }
  input {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid grey;
  }

  input:focus {
    padding-left: 1em;
  }

  textarea {
    width: 100%;
    border: none;
    border-bottom: 1px solid grey;
  }
  textarea:focus {
    outline: none;
  }
  button {
    width: 50%;
    background: #4592af;
    border: none;
    color: #fff;
  }
  .input {
    margin: 1.5em 0;
  }
  button {
    margin: 1.5em 0;
    height: 40px;
  }
  label {
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 28px;
    width: 80%;
    margin: 1em auto;
  }
`;

const ContactMe = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Wrapper>
      <h1>Get In Touch</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="input">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>
        <div className="input">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </div>
        <div className="input">
          <label htmlFor="email">Message</label>
          <textarea
            id="message"
            name="message"
            type="message"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>

        <button type="submit">SEND MESSAGE</button>
      </form>
    </Wrapper>
  );
};

export default ContactMe;
