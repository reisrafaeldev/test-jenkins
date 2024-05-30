
 export const HandlePhone = (value) => {
    switch (value) {
      case "infancia":
        return "(32) 3690-7397";
      case "adolescencia":
        return "(32) 3690-7171";
      case "adulto":
        return "(32) 3690-8256";
      case "velhice":
        return "(32) 3250-2827";
      default:
        return "Valor Inválido";
    }
  };