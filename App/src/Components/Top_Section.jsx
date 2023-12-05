import React from "react";
import styled from "styled-components";

const Top_Section = ({
  filterdData,
  setfilterdData,
  Data,
  selectedBtn,
  setselectedBtn,
}) => {

  const serchFood = (e) => {
    let searchValues = e.target.value;
    if (filterdData === "") {
      setfilterdData(null);
    }
    let filter = filterdData?.filter((food) =>
      food.name.toLowerCase().includes(searchValues.toLowerCase())
    );
    setfilterdData(filter);
  };

  const filterFood = (item) => {
    if (item == "All") {
      setfilterdData(Data);
      setselectedBtn("all");
      return;
    }

    let filter = Data?.filter((food) =>
      food.type.toLowerCase().includes(item.toLowerCase())
    );
    setfilterdData(filter);
    setselectedBtn(item);
    console.log(selectedBtn);
  };

  return (
    <>
      <Top_Container>
        <div className="main-container">
          <img
            src="/images/Foody Zone.svg"
            alt=""
            // style={{ width: "185px", height: "39px" }}
          />
          <input
            onChange={serchFood}
            type="text"
            name=""
            id=""
            placeholder="Search Food..."
          />
        </div>
        <div className="primary-buttons">
          <Button onClick={() => filterFood("All")}>All</Button>
          <Button onClick={() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick={() => filterFood("lunch")}>Lunch</Button>
          <Button onClick={() => filterFood("dinner")}>Dinner</Button>
        </div>
      </Top_Container>
    </>
  );
};
export default Top_Section;

let Top_Container = styled.div`
  padding: 85px 120px 31px 120px;
  gap: 54px;
  .main-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    input {
      border-radius: 4px;
      border-color: #ff0000;
      color: black;
      padding: 4px 2px;
      font-size: 15px;
    }
    img {
      width: "185px";
      height: "39px";
      &:hover {
        cursor: pointer;
      }
    }
    @media (max-width: 745px) {
      display: flex;
      flex-direction: column;
      height:80px;
      input{
        margin: 8px 0px;
      }
    }
  }
  .primary-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;
export let Button = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  background-color: #ff0000;
  border-color: transparent;
  border-radius: 3px;
  &:hover {
    transition: 0.5s;
    background-color: #ff0000e4;
    cursor: pointer;
  }
`;
