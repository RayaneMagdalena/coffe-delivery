import { ButtonCart, HeaderContainer } from "./styles";
import logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <div>
          <MapPin weight="fill" color="#8047F8" size={22} />
          <p>Porto Alegre, RS</p>
        </div>

        <ButtonCart>
          <ShoppingCart weight="fill" color="#c47f17" size={22} />
        </ButtonCart>
      </nav>
    </HeaderContainer>
  );
}
