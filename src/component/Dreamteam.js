import React from "react"

class Dreamteam extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.picture} />
                <h2>{this.props.shortName}</h2>
                <p>{this.props.stade}</p>
                <p>{this.props.foundationDate}</p>
                <p>{this.props.address}</p>
                <p>{this.props.email}</p>
                <p>{this.props.phone}</p>
            </div>
        )

    }
}

export default Dreamteam