export const formatedPrice = (price: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  }).format(price);
};

export const formatedKilometer = (kilometer: number) => {
  return new Intl.NumberFormat("fr-FR", {
    style: "unit",
    unit: "kilometer",
    unitDisplay: "long",
  }).format(kilometer);
};

export const applyDiscount = (price: number, discount: number) => {
  return formatedPrice(price - discount);
};
