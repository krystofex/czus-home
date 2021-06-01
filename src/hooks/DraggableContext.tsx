import React, { createContext, useState, FC } from 'react';

export const DraggableContext = createContext(null);

export const DraggableProvider = ({ children }) => {
    const [draggable, setDraggable] = useState(false);

    return (
        <DraggableContext.Provider value={{ draggable, setDraggable }}>
            {children}
        </DraggableContext.Provider>
    );
};
