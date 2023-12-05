import { useState,useEffect } from "react";
import "./App.css";
import Top_Section from "./Components/Top_Section";
import Main_Page from "./Components/Main_Page";

const App = () => {

 const URL = "http://localhost:9000";


  const [Error, setError] = useState(null);
  const [Data, setData] = useState(null);
  const [filterdData, setfilterdData] = useState(null);
  const [Loading, setloading] = useState(false);
  const [selectedBtn,setselectedBtn]=useState("All")

  useEffect(() => {
    const FetchFoodData = async () => {
      setloading(true);

      try {
        const response = await fetch(URL);
        const json = await response.json();
        setloading(false);
        setData(json);
        setfilterdData(json);
      } catch (error) {
        setError("Unable to load data");
      }
    };

    FetchFoodData();
  }, []);



  return (
    <>
      <main>
        <Top_Section filterdData={filterdData} setfilterdData={setfilterdData} Data={Data} selectedBtn={selectedBtn} setselectedBtn={setselectedBtn}/>
        <Main_Page Error={Error} Data={Data} Loading={Loading} filterdData={filterdData} URL={URL}/>
      </main>
    </>
  );
};
export default App;
