import { PieChart, Pie, Sector, Cell, Bar } from "recharts";
import "./Statistics.css";
import { useLoaderData } from "react-router-dom";
import { getCardsFromLocal } from "../../Utitlities/Localstorage";
import { useEffect, useState } from "react";

const COLORS = ["#00C49F", "#FF444A"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [myDonations, setMyDonations] = useState(0);
  const donations = useLoaderData();

  useEffect(() => {
    const cardIds = getCardsFromLocal();
    const selectedDonations = donations.filter((donation) =>
      cardIds.includes(donation.id.toString())
    );

    const calculatedMyDonations = selectedDonations.reduce(
      (total, donation) => total + donation.price,
      0
    );

    setMyDonations(calculatedMyDonations);
  }, [donations]);

  const totalDonations = donations.reduce(
    (prevValue, currentItem) => prevValue + currentItem.price,
    0
  );

  const data = [
    { name: "My Donations", value: myDonations },
    { name: "Total Donations", value: totalDonations },
  ];
  return (
    <>
      <div
        // style={{ position: "relative", textAlign: "center", margin:"auto" }}
        className="w-full flex justify-center items-center"
        width="100%"
        height="100%"
      >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <div>
          <div className="flex gap-3 justify-between items-center">
            <h1>Total:</h1>
            <div className="grid w-[50px] h-[30px] rounded bg-[#FF444A] place-content-center"></div>
          </div>
          <div className="flex gap-3 items-center  justify-center my-5">
            <h1>My Donations:</h1>
            <div className="grid w-[50px] h-[30px] rounded bg-[#00C49F] text-accent-content place-content-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistics;
