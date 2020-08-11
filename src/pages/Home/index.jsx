import React from 'react'
import Header from '../../components/Header';
import SwapiList from '../../containers/SwapiList';

const Home = () => {
    return (
        <React.Fragment>
          <Header />
          <SwapiList />
        </React.Fragment>
    )
}

export default Home
