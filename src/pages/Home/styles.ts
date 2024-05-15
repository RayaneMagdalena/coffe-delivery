import styled from "styled-components";

export const HomeContainer = styled.main`
padding-bottom: 9rem;
`;

export const HeaderHome = styled.header`
  display: flex;
  padding: 5.8rem 0 6.7rem 0;
  gap: 3.5rem;

  img {
    max-width: 29rem;
  }
`;

export const HeaderHomeContent = styled.div`
  h1 {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;

    padding-bottom: 1rem;
  }

  p {
    color: ${(props) => props.theme["base-subtitle"]};
    font-size: 1.25rem;
  }
`;

export const HeaderHomeDescription = styled.div`
  padding-top: 4.12rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  column-gap:1em;

  p {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 1rem;
  }
`;

export const CartIcon = styled.span`
  background-color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const PackageIcon = styled(CartIcon) `
  background-color: ${(props) => props.theme["base-text"]};
`

export const TimerIcon = styled(CartIcon) `
  background-color: ${(props) => props.theme["yellow"]};
`

export const CoffeIcon = styled(CartIcon) `
  background-color: ${(props) => props.theme["purple"]};
`
