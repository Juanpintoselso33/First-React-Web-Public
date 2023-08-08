import React from "react";

export class Card extends React.Component {

    render() {
        return (
            <div className="card text-center" style={{width: "18rem"}}>
                <img className="card-img-top" src="https://placehold.co/500x325" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lacus at eros imperdiet lobortis.</p>
                    <hr/>
                    <a href="#" className="btn btn-primary justify-content-center">Find out more!</a>
                </div>
            </div>
        )
    }
}