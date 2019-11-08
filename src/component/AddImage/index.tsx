import React from 'react'

export const AddImage: React.FunctionComponent = () => {
    return (
        <form className="form">
            <h4 className="title is-4">Add New Image</h4>
            <div className="field">
                <label className="label">Image URL</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Image URL" />
                </div>
            </div>

            <div className="field">
                <label className="label">Description</label>
                <div className="control">
                    <textarea className="textarea" placeholder="Description..." />
                </div>
            </div>

            <div className="field">
                <div className="control">
                    <button className="button is-link">Submit</button>
                </div>
            </div>
        </form>
    )
}
