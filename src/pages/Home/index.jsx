import React from 'react'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import '../../styles/Card.scss'
import maBanniere from '../../components/datas/banniere'

function Home() {
  const selectedBanner = maBanniere.find(ban => ban.page === "logement");

  return (
    <div className='home' >
      <Banner
        key={selectedBanner.id}
        id={selectedBanner.id}
        description={selectedBanner.description}
        cover={selectedBanner.cover}
        page="logement"
      />

      <Card />
    </div>
  );
}

export default Home;
