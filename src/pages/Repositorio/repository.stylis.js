import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonLeft = styled.button.attrs({
  type: 'button',
})`
  color: black;
  background: transparent;
  padding: 15px;
  display: flex;
  position: fixed;
  left: 0;
  top: 50vh;
  border: none;
  color: ${(props) => (props.disabled ? 'transparent' : 'white')};
  font-size: 6rem;
  margin-left: 1rem;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.disabled ? 'transparent' : 'gray')};
  }

  &:disabled {
    cursor: not-allowed;
    transition: all 0.3s;
  }
`;

export const ButtonRight = styled.button.attrs({
  type: 'button',
})`
  color: black;
  background: transparent;
  padding: 15px;
  position: fixed;
  right: 0;
  top: 50vh;
  border: none;
  color: white;
  margin-right: 1rem;
  font-size: 6rem;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: gray;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem auto;
  align-items: center;
  flex-direction: column;
  background: white;
  color: black;
  max-width: 100%;
  border-radius: 4px;
`;

export const Owner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 2rem;
  padding: 8px;
  font-size: 18px;
  text-align: center;

  img {
    width: 150px;
    height: auto;
    border-radius: 50%;
    margin: 5px 0;
  }
`;

export const NavLink = styled.a.attrs({
  onClick: () => {
    window.history.back();
  },
})`
  cursor: pointer;
  color: black;
  font-size: 2rem;
  background-color: white;
  border-radius: 4px;
  padding: 2px;
  display: flex;
`;

export const ContainerFilter = styled.div`
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    padding: 5px 10px;
    border-radius: 3px;
    outline: none;
    border: none;
    margin-top: 10px;

    &:nth-child(${props => props.active + 1}) {
      background-color: #0071db;
      color: white;
    }

  }
`;

export const IssuesList = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100%;
  margin-top: 1rem;
  border-radius: 4px 4px 2px 2px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  li {
    display: flex;
    width: 95%;
    padding: 5px;
    gap: 1rem;
    margin: 0.5rem 0;
    background-color: rgba(0, 0, 0, 0.01);
    border-radius: 4px;
    justify-content: center;
    align-items: center;

    & + li {
      margin-top: 1rem;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    img {
      width: 50px;
      height: auto;
      border-radius: 50%;
      margin-left: 1rem;
      border: 1px solid rgba(0, 0, 0, 0.5);
    }
  }
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  justify-content: center;
  align-items: center;
  flex: 5;
  margin-top: 20px;
  text-align: center;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

  strong {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      margin-bottom: 5px;
      color: #222;
      transition: 0.3s;
      font-size: 16px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

      &:hover {
        color: #0071db;
      }
    }

    span {
      background: #222;
      color: #fff;
      font-size: 14px;
      font-weight: 600;
      padding: 3px 4px;
      border-radius: 4px;
      margin-top: 2px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }
  }
  p {
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    margin-top: 4px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0.1);
    padding: 4px 8px;
    border-radius: 4px;
  }
`;
