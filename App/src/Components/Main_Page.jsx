import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search_Result from "./Search_Result";


const Main_Page = ({Error,Data,Loading,filterdData,URL}) => {

  if (Loading) {
    return <h2>Loading....</h2>;
  }
  if (Error) {
    return <h2>{Error}</h2>;
  }

  return (
    <>
      <BackgroundImage>
        <Search_Result Data={filterdData} URL={URL}/>
      </BackgroundImage>
    </>
  );
};

export default Main_Page;

const BackgroundImage = styled.div`
  background-image: url("/images/bg.png");
  width: 100%;
  min-height: 100vh;
  background-size: cover;
  background-position: center;
`;
