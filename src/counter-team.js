import React from 'react';
import teams from "./teams.json";
import Dreamteam from "./component/Dreamteam"
import Counter from "./component/Counter"
import "./App.css"

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count : 10
        }

        buttonMoreTeam = () => {

        }
    }
    render() {
        let mappedTeam = teams.map(
            team =>
            (<Dreamteam shortName={team.shortName} picture={team.crestUrl} stade={team.venue} address={team.address} email={team.email} phone={team.phone}
                foundationDate={team.founded} />
            )
        )

        mappedTeam = this.props.filter(function (tenTeam) {
            return mappedTeam <= 10
        })

        return (
            <div className="containt">
                {this.state.count}
                {mappedTeam}
            </div>


        )
    }
}

export default App

import React from "react"

class Dreamteam extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="flex">
                    <img src={this.props.picture} />
                    <div className="infos">
                        <h2>{this.props.shortName}</h2>
                        <p>{this.props.stade}</p>
                        <p>{this.props.foundationDate}</p>
                        <p>{this.props.address}</p>
                        <p>{this.props.email}</p>
                        <p>{this.props.phone}</p>
                    </div>

                </div>
            </div>
        )

    }
}

export default Dreamteam