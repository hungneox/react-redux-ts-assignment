import React from 'react'

export const Login: React.FunctionComponent = () => {
    return (
        <div className="field has-addons">
            <div className="control">
                <input className="input" type="text" placeholder="Username" />
            </div>
            <div className="control">
                <button className="button is-info">Login</button>
            </div>
        </div>
    )
}
