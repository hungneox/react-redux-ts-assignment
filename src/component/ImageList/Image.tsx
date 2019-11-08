import React from 'react'

export const Image: React.FunctionComponent = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Sample" />
                </figure>
            </div>

            <div className="card-content">
                <p className="title is-4">@username</p>
                <p>Lorem ipsum blah blah</p>
            </div>

            <footer className="card-footer">
                <a className="card-footer-item">Delete</a>
            </footer>
        </div>
    )
}
