import React, { useState } from 'react'
import Header from '../../components/Header';
import SwapiList from '../../containers/SwapiList';

const Home = () => {
  const [selectedName, setSelectedName] = useState(localStorage.getItem('selectedName'));
  return (
    <React.Fragment>
      <Header selectedName={selectedName}/>
      <SwapiList setSelectedName={setSelectedName}/>
    </React.Fragment>
  )
}

export default Home
