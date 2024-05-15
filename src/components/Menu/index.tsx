import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import Coffe from "./../../assets/Coffe.svg";
import { AmountContainer, CardContainer, CardsContainer, InfoContainer, MenuContainer, PurchaseButton, TagsContainer } from "./styles";

export function Menu() {
  return (
    <MenuContainer>
      <h1>Nossos cafés</h1>

      <CardsContainer>

    
      <CardContainer>
        <div>
          <img src={Coffe} alt="" />

          <TagsContainer>
            <p>TRADICIONAL</p>
            <p>ALCOÓLICO</p>
            <p>GELADO</p>
          </TagsContainer>

          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <InfoContainer>
          <p>
            R$ <span>9,90</span>
          </p>
          
          
          <AmountContainer>
            <button><Minus size={14} /></button>
          <p>1</p>
          <button><Plus size={14} /></button>
          </AmountContainer>
          

          <PurchaseButton>
            <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
          </PurchaseButton>
       
        </InfoContainer>
      </CardContainer>

      <CardContainer>
        <div>
          <img src={Coffe} alt="" />

          <TagsContainer>
            <p>TRADICIONAL</p>
            <p>ALCOÓLICO</p>
            <p>GELADO</p>
          </TagsContainer>

          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <InfoContainer>
          <p>
            R$ <span>9,90</span>
          </p>
          
          
          <AmountContainer>
            <button><Minus size={14} /></button>
          <p>1</p>
          <button><Plus size={14} /></button>
          </AmountContainer>
          

          <PurchaseButton>
            <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
          </PurchaseButton>
       
        </InfoContainer>
      </CardContainer>

      <CardContainer>
        <div>
          <img src={Coffe} alt="" />

          <TagsContainer>
            <p>TRADICIONAL</p>
            <p>ALCOÓLICO</p>
            <p>GELADO</p>
          </TagsContainer>

          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <InfoContainer>
          <p>
            R$ <span>9,90</span>
          </p>
          
          
          <AmountContainer>
            <button><Minus size={14} /></button>
          <p>1</p>
          <button><Plus size={14} /></button>
          </AmountContainer>
          

          <PurchaseButton>
            <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
          </PurchaseButton>
       
        </InfoContainer>
      </CardContainer>

      <CardContainer>
        <div>
          <img src={Coffe} alt="" />

          <TagsContainer>
            <p>TRADICIONAL</p>
            <p>ALCOÓLICO</p>
            <p>GELADO</p>
          </TagsContainer>

          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <InfoContainer>
          <p>
            R$ <span>9,90</span>
          </p>
          
          
          <AmountContainer>
            <button><Minus size={14} /></button>
          <p>1</p>
          <button><Plus size={14} /></button>
          </AmountContainer>
          

          <PurchaseButton>
            <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
          </PurchaseButton>
       
        </InfoContainer>
      </CardContainer>

      <CardContainer>
        <div>
          <img src={Coffe} alt="" />

          <TagsContainer>
            <p>TRADICIONAL</p>
            <p>ALCOÓLICO</p>
            <p>GELADO</p>
          </TagsContainer>

          <h2>Expresso Tradicional</h2>
          <p>O tradicional café feito com água quente e grãos moídos</p>
        </div>

        <InfoContainer>
          <p>
            R$ <span>9,90</span>
          </p>
          
          
          <AmountContainer>
            <button><Minus size={14} /></button>
          <p>1</p>
          <button><Plus size={14} /></button>
          </AmountContainer>
          

          <PurchaseButton>
            <ShoppingCartSimple weight="fill" color="#ffff" size={19} />
          </PurchaseButton>
       
        </InfoContainer>
      </CardContainer>

      </CardsContainer>
    </MenuContainer>
  );
}
