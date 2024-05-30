import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    160deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(0, 55, 159, 1) 0%,
    rgba(233, 233, 233, 1) 70%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 30rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 0.9375rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    width: 18rem;
  }
  span {
    color: green;
  }
  
`;

export const Text = styled.p`
  font-size: ${(props) => props.fontSize};
  color: #404040;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  border: 2px solid rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-bottom: 4rem;
  font-size: 1.2rem;

  &::placeholder {
      font-weight: 700;
      font-size: 0.8rem;
      text-align: start;
      color: #c6c3c3;
    }
`;

export const Form = styled.form`
  width: 18rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color: #00379f;
  border-radius: 5px;
  border: 0;
  color: #fff;
  font-size: 1.5rem;
`;
export const Label = styled.label`
  margin-bottom: 0.7rem;
`;
