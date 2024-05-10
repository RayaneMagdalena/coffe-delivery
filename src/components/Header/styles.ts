import styled from 'styled-components'

export const HeaderContainer = styled.header`
display: flex;
justify-content: space-between;

img {
    width: 5rem;
    height: 2rem;
}

nav {
    display: flex;
    align-items: center;
    gap: .75rem;
}

nav div  {
display: flex;
align-items: center;
gap: 0.2rem;;
padding: .5rem;
border-radius: 6px;
background-color: ${(props) => props.theme['purple-light']};
color:  ${(props) => props.theme['purple-dark']}

}

p {
    font-size: 14px;
}
`

export const ButtonCart = styled.button `
background-color: ${(props) => props.theme['yellow-light']};
display: flex;
align-items: center;
border: none;
width: 2.4rem;
border-radius: 6px;
padding: .5rem;

`