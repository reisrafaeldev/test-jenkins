import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Home } from "../pages";

describe("Casos de Testes fase da vida -", () => {
  //Infância
  test("Infância para o limite 0 -  Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "-1");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Infância para o limite 0 -  Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "0");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Infância para o limite 0 -  Acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "1");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Infância para o limite 10 -  Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "9");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Infância para o limite 10 -  No Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "10");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  test("Infância para o limite 10 -  Acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "11");
    userEvent.click(button);
    expect(getByText("Resultado: Infância")).toBeTruthy();
  });

  //Adolescente

  test("Adolescência para o limite 11 - Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "10");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Adolescência para o limite 11- Dentro do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "11");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Adolescência para o limite 11 - Acima do  Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "12");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Adolescência para o limite 19 - Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "18");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Adolescência para o limite 19 - No Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "19");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  test("Adolescência para o limite 19 - Acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "20");
    userEvent.click(button);
    expect(getByText("Resultado: Adolescência")).toBeTruthy();
  });

  //Adulto

  test("Adulto para o limite 20 - Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "19");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Adulto para o limite 20 - No Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "20");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Adulto para o limite 20 - acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "21");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Adulto para o limite 64 - Abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "63");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Adulto para o limite 64 - No do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "64");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  test("Adulto para o limite 64 - Acima do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "65");
    userEvent.click(button);
    expect(getByText("Resultado: Adulto")).toBeTruthy();
  });

  //Velhice

  test("Velhice para o limite 65- abaixo do Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "64");
    userEvent.click(button);

    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Velhice para o limite 65 - No Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "65");
    userEvent.click(button);
    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Velhice para o limite 65 - Acima Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "66");
    userEvent.click(button);
    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Velhice para o limite 150 - Abaixo Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "149");
    userEvent.click(button);
    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Velhice para o limite 150 - No Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "150");
    userEvent.click(button);
    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });

  test("Velhice para o limite 150 - Acima Limite", () => {
    const { getByText, getByLabelText } = render(<Home />);
    const button = getByText("Calcular");
    const input = getByLabelText("Informe um valor para o cálculode idade e informação do orgão de apoio:");
    userEvent.type(input, "151");
    userEvent.click(button);
    expect(getByText("Resultado: Velhice")).toBeTruthy();
  });
});
