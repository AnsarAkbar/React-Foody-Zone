import React from "react";
import styled from "styled-components";
import { Button } from "./Top_Section";
// import { URL } from "./Main_Page";

const Search_Result = ({ Data,URL }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        <div className="container">
          {Data?.map((eliments) => (
            <Cards key={eliments.id}>
              <div className="food_img">
                <img
                  src={URL + eliments.image}
                  alt="food image"
                  style={{ cursor: "pointer" }}
                />
              </div>
              <div className="card-data">
                <b>{eliments.name}</b>
                <p>{eliments.text}</p>
                <div className="price">
                  <Button>${eliments.price.toFixed(2)}</Button>
                </div>
              </div>
            </Cards>
          ))}
        </div>
      </FoodCards>
    </FoodCardContainer>
  );
};

export default Search_Result;

let FoodCardContainer = styled.div``;

let FoodCards = styled.div`
  width: 100%;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap; /* Allow cards to wrap */
  gap: 15px;
  .container {
    max-width: 80%;
    margin: 54px auto;
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(280px, 1fr)
    ); /* Adjust the minmax values based on your design */
    gap: 10px;
    overflow-y: auto; /* Add overflow-y property for scrolling */
  }
`;

let Cards = styled.div`
  /* height: auto; */
  overflow-y: auto; /* Add overflow-y property for scrolling */
  /* ... */

  max-width: 310px;
  /* height: 167px; */

  display: flex;
  align-items: center;
  color: white;
  border: 0.659px solid #98f9ff;
  background: url(<path-to-image>),
    lightgray 0% 0% / 50.8334219455719px 50.8334219455719px repeat,
    radial-gradient(
      151.92% 127.02% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.04) 77.08%,
      rgba(70, 144, 212, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.184196472167969px);
  border-radius: 19.447px;
  padding: 5px 8px 0px 0px;
  margin-bottom: 10px;
  .price {
    display: flex;
    justify-content: end;
  }
`;
