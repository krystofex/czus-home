import React, { createContext, useState } from 'react';

export const DraggableContext = createContext(null);

export const DraggableProvider = ({
    children,
}: {
    children: JSX.Element;
}): JSX.Element => {
    const [draggable, setDraggable] = useState(false);

    return (
        <DraggableContext.Provider value={{ draggable, setDraggable }}>
            {children}
        </DraggableContext.Provider>
    );
};
