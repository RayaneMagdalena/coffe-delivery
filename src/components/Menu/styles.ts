import styled from "styled-components";

export const MenuContainer = styled.section`
  padding-top: 2rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    padding-bottom: 3rem;
    font-weight: 800;
    color: ${(props) => props.theme["base-subtitle"]};
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;

export const CardsContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
column-gap: 2rem;
row-gap: 2.8rem;
`
export const CardContainer = styled.div`
  max-width: 17rem;
  max-height: 19.4rem;
  padding: 7rem 1.5rem 1.25rem 1.5rem;
  background-color: ${(props) => props.theme["base-card"]};
  border-radius: 28px;

  position: relative;

  img {
    position: absolute;
    top: -1.5rem;
    left: 25%;
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme["base-subtitle"]};
    padding-bottom: .5rem;
  }

  p {
    color: ${(props) => props.theme["base-label"]};
    font-size: .8rem;
    text-align: center;
  }
`;


export const TagsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  padding-bottom: 1rem;

  p {
    font-size: 0.6rem;
    background-color: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    border-radius: 100px;
  }
`;


export const InfoContainer = styled.div `
padding-top: 2rem;
display: flex;
justify-content: space-between;

p {
    font-size: .8rem;
    color: ${(props) => props.theme["base-text"]};
    padding-right: 1.4rem;
}

p span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
}

`

export const AmountContainer = styled.div `
display: flex;
gap: .7rem;
background-color: ${(props) => props.theme["base-button"]};
border-radius: 6px;
align-items: center;
padding: .5rem;
margin-right: 0.3rem;

button {
    color: ${(props) => props.theme["purple"]};
    border: none;
    background-color: ${(props) => props.theme["base-button"]};
    cursor: pointer;
}

button:hover {
    color: ${(props) => props.theme["purple-dark"]};
}

p {
    padding: 0;
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};
}
`
export const PurchaseButton = styled.button`
padding: .6rem ;
border: none;
border-radius: 6px;
background-color: ${(props) => props.theme["purple-dark"]};
cursor: pointer;

&:hover {
    background-color: ${(props) => props.theme["purple"]};
  }
`
