import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { mobile } from "../responsive";

const Container = styled.div`
  color: white;
  text-align: left;
  margin: 10px 30px;
`;

const Title = styled.h1``;

const Form = styled.form`
  padding: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
`;

const Label = styled.label`
  margin: 5px;
`;

const Input = styled.input`
  height: 40px;
  width: 50%;
  padding: 5px;
  color: white;
  background-color: #27282f;
  border: none;
  border-radius: 10px;

  ${mobile({
    width: "100%",
  })}

  &:focus {
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 50%;
  padding: 5px;
  color: white;
  background-color: #27282f;
  border: none;
  border-radius: 10px;

  ${mobile({
    width: "100%",
  })}

  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  margin: 20px 10px;
`;

const Button = styled.button`
  padding: 10px 30px;
  background-color: #27282f;
  color: #10f0fc;
  font-size: 14px;
  border: 1px solid #10f0fc;
  border-radius: 10px;

  &:hover {
    color: #27282f;
    background-color: #10f0fc;
  }
`;

const Contact = () => {
  const form = useRef();
  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <Container>
      <Title>Contact Me</Title>
      <Form ref={form} onSubmit={sendEmail}>
        <InputContainer>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="user_name" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="user_email" required />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" rows="5" required></Textarea>
        </InputContainer>
        <ButtonContainer>
          <Button type="submit">Send Message</Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default Contact;
