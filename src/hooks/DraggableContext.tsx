import React, { createContext, useState } from 'react';

export const DraggableContext = createContext(false);

export const DraggableProvider = ({ children }) => {
    const [draggable, setDraggable] = useState(false);

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <DraggableContext.Provider value={{ draggable, setDraggable }}>
            {children}
        </DraggableContext.Provider>
    );
};
