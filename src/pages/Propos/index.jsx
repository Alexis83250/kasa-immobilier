

import React from 'react';
import Collapse from '../../components/Collapse'
import collapseList from '../../components/datas/CollapseList'
//import '../../styles/Propos.scss'
import maBanniere from '../../components/datas/banniere'
import Banner from '../../components/Banner'



function Propos() {

  const selectedBanner = maBanniere.find(ban => ban.page === "a_propos");
  return (
    <div className='ajuster'>
      <div className='Banniere'>
      <Banner
          key={selectedBanner.id}
          id={selectedBanner.id}
          cover={selectedBanner.cover}
          page="a_propos"
        />
      </div>

      {collapseList.map(({ id, description, title }) => (
        <Collapse
        data={description} 
        id={id} 
        key={id}
        number={"1"}
        title={title}
        page="a_propos"
        />
      ))}
    </div>
  );
}

export default Propos;