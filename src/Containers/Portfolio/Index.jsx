import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../Component/pageHeaderContent/Index";
import ImageOne from "../../images/helping hand.jpg";
import ImageTwo from "../../images/therapy.jpg";
import ImageThree from "../../images/myportfolio.jpg.png";
import ImageFour from "../../images/Nebula tech.png";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";

const portfolioData = [
  {
    id: 2,
    name: "HelpingBuddy",
    image: ImageOne,
    link: "",
  },
  {
    id: 2,
    name: "ShriKrishna Arogyam ",
    link: "https://shrikrishnaarogyammassagetherapy.com/",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "My PortFolio",
    image: ImageThree,
    link: "https://yashdeshmukh07.netlify.app/",
  },
  {
    id: 2,
    name: "Erp Management",
    image: ImageFour,
    link: "https://nebula-technology.com/",
  },
  {
    id: 3,
    name: "Shopping cart design",
    image: ImageFive,
    link: "",
  },
];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  const handleVisitClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="portfolio" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button onClick={() => handleVisitClick(item.link)}>
                      Visit
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
