import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #dfdfdf;
  margin: 80px auto;
  padding: 2rem 0;
  max-width: 700px;
  border-radius: 4px;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.4rem;
`;

export const Form = styled.form`
  height: 35px;
  margin: 2rem 0 0 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 0 0.4rem;
`;

export const Carregando = styled.p`
  font-size: 20px;
  margin: 1rem 0 0 0;
`;

export const Input = styled.input`
  outline: none;
  border: 2px solid ${props => (props.alerterro ? '#ff0000' : '#ccc')};
  padding: 1rem;
  border-radius: 4px;
  width: 80%;
`;

//criando animação de carregamento e botao

const animate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Button = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  padding: 1rem;
  width: 11%;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  gap: 0.4rem;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} 2s linear infinite;
      }
    `}
`;

export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 20px;
  margin: 1rem 0 0 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    padding: 10px;

    & + li {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button',
})`
  color: #b1b1b1;
  background: transparent;
  border: none;
  margin-right: 10px;
`;

export const Error = styled.strong`
  margin-top: 1rem;
`;
