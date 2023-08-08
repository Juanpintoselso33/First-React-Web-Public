import React from "react";

export class Jumbotron extends React.Component {

    render() {
        return (
            <div className="jumbotron bg-light p-5">
                <h1 className="display-2 font-weight-bold">A warm welcome!</h1>
                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare lacus at eros imperdiet lobortis. Ut sodales eget nibh vitae lobortis. Suspendisse nibh nisl, tincidunt sit amet dolor eu, elementum tincidunt purus.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Call to action!</a>
            </div>
        )
    }
}