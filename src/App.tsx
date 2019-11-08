import React from 'react'
import './App.css'

import { AddImage } from './component/AddImage'
import { ImageList } from './component/ImageList'
import { Navbar } from './component/Navbar'

export const App: React.FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <div className="container main-app">
                <ImageList />
                <hr />
                <AddImage />
            </div>
        </>
    )
}
