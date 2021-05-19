import { createContext, useState } from 'react';

export const DraggableContext = createContext(false);

export const DraggableProvider = ({ children }) => {
    const [draggable, setDraggable] = useState(false);

    return (
        <DraggableContext.Provider value={{ draggable, setDraggable }}>
            {children}
        </DraggableContext.Provider>
    );
};
