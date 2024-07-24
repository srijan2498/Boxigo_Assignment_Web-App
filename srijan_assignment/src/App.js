import { useEffect, useState } from "react";
import axios from 'axios';
import MyMovesContainer from "./components/MyMovesContainer";
import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from 'react-redux';
import { detailsSetter } from "./redux/action";

function App() {
  const details = useSelector((state => state.detailsReducer))
  const dispatch = useDispatch();
  const [detail, setDetail]= useState()

  const fetchDetails = async () => {
    try {
      const res = await axios.get("/api_assignment.json")
      dispatch(detailsSetter(res.data))
      setDetail(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDetails()
  }, [])

  return (
    <div className="main">
      <Navbar />
      {detail && <MyMovesContainer/>}
    </div>
  );
}

export default App;
