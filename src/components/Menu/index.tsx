import { CardMenu } from "../CardMenu";
import { CardsContainer, MenuContainer } from "./styles";
import { api } from "../../lib/axios";
import { useEffect, useState } from "react";

interface Coffee {
  id: number;
  title: string;
  description: string;
  options: string[];
  price: number;
}

export function Menu() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    api
      .get("/coffees")
      .then((response) => {
        setCoffees(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar os dados:", error);
      });
  }, []);

  return (
    <MenuContainer>
      <h1>Nossos cafés</h1>

      <CardsContainer>
        {coffees.map((coffee) => (
          <CardMenu
            id={coffee.id}
            title={coffee.title}
            description={coffee.description}
            options={coffee.options}
            price={coffee.price}
          />
        ))}
      </CardsContainer>
    </MenuContainer>
  );
}
