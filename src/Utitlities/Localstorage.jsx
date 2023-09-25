const getCardsFromLocal = () => {
  const cardsCategory = localStorage.getItem("cards");
  if (cardsCategory) {
    return JSON.parse(cardsCategory);
  }
  return [];
};
const saveCardsInLocal = (id) => {
  const prevCards = getCardsFromLocal();
  const isExist = prevCards.find((card) => card.id === id);
  if (!isExist) {
    prevCards.push(id);
    localStorage.setItem("cards", JSON.stringify(prevCards));
  }
};
export { getCardsFromLocal, saveCardsInLocal };
