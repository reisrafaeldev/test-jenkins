import { HandlePhone } from "./HandlePhone";

describe("Teste Da função de Telefone do Orgão de Apoio", () => {
  test("Infancia", () => {
    expect(HandlePhone("infancia")).toBe("(32) 3690-7397");
  });
  test("Adolescencia", () => {
    expect(HandlePhone("adolescencia")).toBe("(32) 3690-7171");
  });
  test("Adulto", () => {
    expect(HandlePhone("adulto")).toBe("(32) 3690-8256");
  });
  test("Velhice", () => {
    expect(HandlePhone("velhice")).toBe("(32) 3250-2827");
  });
  test("Valor Inválido", () => {
    expect(HandlePhone("xptoxpto")).toBe("Valor Inválido");
  });
});
