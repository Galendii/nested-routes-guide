import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #222;
  width: 100vw;
  padding-top: 150px;
  min-height: 100vh;
`;

export const Body = styled.section`
  width: 100%;
  padding: 20px 60px;
`;

export const Title = styled.h1`
  font-size: 5rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const Subtitle = styled.h2`
  font-size: 2rem;
  color: #f9f9f9;
`;

export const ReactRouterImage = styled.div`
  position: absolute;
  top: 30%;
  right: 60px;
  img {
    width: 400px;
    height: auto;
  }
`;
