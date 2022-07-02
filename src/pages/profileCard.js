import React, { useState } from "react";
import styled from "styled-components";
import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

export default function Recommend() {
    const data = [
        {
            image: Destination1,
            title: "Svaneti",
            subTitle: "Svaneti, The best place to see in Georgia",
            cost: "400,00",
            duration: "Approx 3 night trip",
        },
        {
            image: Destination2,
            title: "Imereti",
            subTitle: "Imereti, the best to taste Khachapuri",
            cost: "550,00",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination3,
            title: "Guria",
            subTitle: "Guria, Visit and see!",
            cost: "500,00",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination4,
            title: "Samegrelo",
            subTitle: "Samegrelo, Elarji! Enough said!",
            cost: "250,00",
            duration: "Approx 2 night trip",
        },
        {
            image: Destination5,
            title: "Racha",
            subTitle: "Lobiani with Lori!",
            cost: "600,00",
            duration: "Approx 4 night 5 day trip",
        },
        {
            image: Destination6,
            title: "Kakheti",
            subTitle: "Ghvino! Chacha! Gurjaani marojni!",
            cost: "680,00",
            duration: "Approx 3 night 4 day trip",
        },
    ];



    const [active, setActive] = useState(1);
    return (
        <Section id="recommend">

            <div className="destinations">
                {data.map((destination) => {
                    return (
                        <div className="destination">
                            <img src={destination.image} alt="" />
                            <h3>{destination.title}</h3>
                            <p>{destination.subTitle}</p>
                            <div className="info">
                                <div className="services">
                                    <img src={info1} alt="" />
                                    <img src={info2} alt="" />
                                    <img src={info3} alt="" />
                                </div>
                                <h4>{destination.cost}₾</h4>
                            </div>
                            <div className="distance">
                                <span>420 Km</span>
                                <span>{destination.duration}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    );
}

const Section = styled.section`
  padding: 2rem 0;
  .title {
    text-align: center;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
    .destination {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #8338ec14;
      color: black;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      img {
        width: 100%;
      }
      .info {
        display: flex;
        align-items: center;
        .services {
          display: flex;
          gap: 0.3rem;
          img {
            border-radius: 1rem;
            background-color: #4d2ddb84;
            width: 2rem;
            /* padding: 1rem; */
            padding: 0.3rem 0.4rem;
          }
        }
        display: flex;
        justify-content: space-between;
      }
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;