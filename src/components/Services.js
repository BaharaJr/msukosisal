import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Scandinavian Twist",
        info:
          "A selection of items handmade by the Msuko Sisal women, made with 100% natural sisal fibre in the most sustainable way possible."
      },
      {
        icon: <FaHiking />,
        title: "Bohemian Style Decor",
        info:
          "Creating a Boho chic space in your house does not take a lot of effort, Adding a msuko sisal basket and plants also helps in capturing a sense of peace in the living room, bedroom or bathroom."
      },
      {
        icon: <FaShuttleVan />,
        title: "Everything Sisal",
        info:
          "With Msuko Sisal, we aspire to inspire you to decorate your home with a touch of something that is sustainably made with sisal fiber."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Designs" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
