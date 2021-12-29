import styled from "styled-components";

export const Container = styled.div`
  p {
    font-size: 13px;
    color: #b8b8d4;
  }

  h1 {
    margin: 15px 0;
    padding: 0;
    font-size: 26px;
  }

  hr {
    height: 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
  }

  label {
    font-size: 13px;

    input {
      display: block;
      margin-top: 7px;
      padding: 20px 10px;
      width: 100%;
      outline: none;
      border: 2px solid #25cd89;
      border-radius: 10px;
      background-color: #02044a;
      color: #fff;
      font-size: 15px;
    }
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;

  button,
  a {
    background-color: #25cd89;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    border: 0;
    padding: 10px 20px;
    border-radius: 20px;
    cursor: pointer;

    &.backButtom {
      text-decoration: none;
      background-color: #16195c;
    }
  }
`;
