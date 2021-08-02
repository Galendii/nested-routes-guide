import styled from "styled-components";

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 2.5rem 6rem;
  background-color: rgba(30, 30, 30, 0.8);
  position: fixed;
  top: 0;
`;

export const LogoHolder = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
`;

export const AnchorsHolder = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Anchor = styled.a`
  color: #eee;
  font-size: 2rem;
  cursor: pointer;
  &:hover {
    color: #6edbfc;
  }
  &:active {
    color: #6edbfc;
  }
  margin: 0 2rem;
`;

export const Button = styled.button`
  border: 1px solid #6edbfc;
  border-radius: 0.5rem;
  background: transparent;
  color: #eee;
  font-size: 2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  margin-left: 3rem;

  &:hover {
    background-color: #6edbfc;
    color: #fff;
  }
`;
