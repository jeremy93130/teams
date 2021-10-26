import React from 'react';
import teams from "./teams.json";
import Dreamteam from "./component/Dreamteam"
class App extends React.Component {
  render() {
    let teamed = teams.map(
      team =>
      (<Dreamteam shortName={team.shortName} picture={team.picture} stade={team.stade} address={team.address} email={team.email} phone={team.phone}
        fundationDate={team.founded} />
      )
    )
    return (
      <div>
        <ul>
          <li>{teamed}</li>
        </ul>
      </div>
    )
  }
}

export default App

