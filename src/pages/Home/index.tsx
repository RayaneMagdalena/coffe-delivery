import { Header } from "../../components/Header";
import {
  CartIcon,
  CoffeIcon,
  HeaderHome,
  HeaderHomeContent,
  HeaderHomeDescription,
  HomeContainer,
  PackageIcon,
  TimerIcon,
} from "./styles";
import headerHome from "../../assets/HeaderHomeImg.svg";
import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <HeaderHome>
          <HeaderHomeContent>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <HeaderHomeDescription>
              <p>
                <CartIcon>
                  <ShoppingCart weight="fill" color="#ffff" size={16} />
                </CartIcon>
                Compra simples e segura
              </p>
              <p>
                <PackageIcon>
                  <Package weight="fill" color="#ffff" size={16} />
                </PackageIcon>
                Embalagem mantém o café intacto
              </p>
              <p>
                <TimerIcon>
                  <Timer weight="fill" color="#ffff" size={16} />
                </TimerIcon>
                Entrega rápida e rastreada
              </p>
              <p>
                <CoffeIcon>
                  <Coffee weight="fill" color="#ffff" size={16} />
                </CoffeIcon>
                O café chega fresquinho até você
              </p>
            </HeaderHomeDescription>
          </HeaderHomeContent>

          <img src={headerHome} alt="" />
        </HeaderHome>
      </HomeContainer>
    </div>
  );
}
