import React from 'react';
import teams from "./teams.json";
import Dreamteam from "./component/Dreamteam"
import "./App.css"

class App extends React.Component {
  render() {
    let mappedTeam = teams.map(
      team =>
      (<Dreamteam shortName={team.shortName} picture={team.crestUrl} stade={team.venue} address={team.address} email={team.email} phone={team.phone}
        foundationDate={team.founded} />
      )
    )

    return (
      <div className="containt"> 
        {mappedTeam}  
      </div>
      

    )
  }
}

export default App

