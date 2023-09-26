import { useEffect, useState } from "react";
import { getCardsFromLocal } from "../../Utitlities/Localstorage";
import DonationItem from "../../components/DonationItem/DonationItem";
import { useLoaderData } from "react-router-dom";

const Donation = () => {
  const [displayCards, setDisplayCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);
  const cards = useLoaderData();

  useEffect(() => {
    const storedData = getCardsFromLocal();

    if (cards.length > 0) {
      const newSaveData = [];
      for (const id of storedData) {
        const intId = parseInt(id);
        const selected = cards.find((card) => card.id === intId);
        newSaveData.push(selected);
      }
      setDisplayCards(newSaveData);
    }
  }, [cards]);

  return (
    <>
      <div className="my-8 px-4 md:px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-6">
        {isShowAll
          ? displayCards.map((cardItem) => (
              <DonationItem
                key={cardItem.id}
                cardItem={cardItem}
              ></DonationItem>
            ))
          : displayCards
              .slice(0, 4)
              .map((cardItem) => (
                <DonationItem
                  key={cardItem.id}
                  cardItem={cardItem}
                ></DonationItem>
              ))}
      </div>
      <div className="text-center py-16">
        {displayCards.length > 4 && (
          <button
            onClick={() => setIsShowAll(!isShowAll)}
            className={`btn px-16 py-3 text-white  uppercase bg-[#009444] ${
              displayCards.length > 4 && !isShowAll ? "" : "hidden"
            }`}
          >
            SEE ALL
          </button>
        )}
      </div>
    </>
  );
};

export default Donation;
