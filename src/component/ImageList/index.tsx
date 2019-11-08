import React from 'react'

import { Image } from './Image'

export const ImageList: React.FunctionComponent = () => {
    return (
        <div className="columns is-multiline">
            {Array(8)
                .fill(0)
                .map(() => (
                    <div className="column is-one-quarter">
                        <Image />
                    </div>
                ))}
        </div>
    )
}
