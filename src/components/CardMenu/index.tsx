import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import {
  AmountContainer,
  CardContainer,
  InfoContainer,
  PurchaseButton,
  TagsContainer,
} from "./styles";
import Coffe from "./../../assets/Coffe.svg";

interface CardMenuProps {
  id: number;
  title: string;
  description: string;
  options: string[];
  price: number;
}

export function CardMenu({
  id,
  title,
  description,
  options,
  price,
}: CardMenuProps) {
  return (
    <CardContainer key={id}>
      <div>
        <img src={Coffe} alt="" />

        <TagsContainer>
          {options.map((option) => (
            <p>{option}</p>
          ))}
        </TagsContainer>

        <h2>{title}</h2>
        <p>{description}</p>
      </div>

      <InfoContainer>
        <p>
          R$ <span>{price},00</span>
        </p>

        <AmountContainer>
          <button>
            <Minus size={14} />
          </button>
          <p>10</p>
          <button>
            <Plus size={14} />
          </button>
        </AmountContainer>

        <PurchaseButton>
          <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
        </PurchaseButton>
      </InfoContainer>
    </CardContainer>
  );
}
