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