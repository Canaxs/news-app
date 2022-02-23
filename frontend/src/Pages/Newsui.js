import React from 'react'
import Dashboard from './Dashboardui';

const Newsui = () => {

    let news = (
        <div>
            <h1>Deneme</h1>
        </div>
    );

  return (
    <div>
        <Dashboard  news={news}/>
    </div>
  )
}
export default Newsui;
