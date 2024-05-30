import React, { useState } from "react";
import { HandlePhone } from "../mixins/HandlePhone";
import * as S from "./styles";

export const Home = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newValue = parseInt(value);
    if (value && newValue >= 0 && newValue <= 150) {
      if (newValue < 11) {
        setResult("Infância");
        setPhone(HandlePhone("infancia"));
      } else if (newValue < 20) {
        setResult("Adolescência");
        setPhone(HandlePhone("adolescencia"));
      } else if (newValue < 65) {
        setResult("Adulto");
        setPhone(HandlePhone("adulto"));
      } else if (newValue >= 65) {
        setResult("Velhice");
        setPhone(HandlePhone("velhice"));
      } else {
        setResult("Insira um valor Válido");
      }
    } else {
      setResult("Informe um valor válido");
    }
  };
  return (
    <S.Section>
      <S.Container>
        <S.Text as="h1">Fases da vida humana</S.Text>
        <S.Text as="h3" id="resultado">Resultado: {result}</S.Text>

        <S.Text as="h4">Telefone do Orgão de apoio: {phone}</S.Text>
        <S.Form onSubmit={handleSubmit}>
          <S.Label htmlFor="idade">Informe um valor para o cálculode idade e informação do orgão de apoio:</S.Label>

          <S.Input
            placeholder="Idade"
            id="idade"
            type="number"
            min="-10"
            onChange={(e) => setValue(e.target.value)}
          />

          <S.Button>Calcular</S.Button>
        </S.Form>
      </S.Container>
    </S.Section>
  );
};
