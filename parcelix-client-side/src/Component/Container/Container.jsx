import React from 'react';

const Container = ({className ,children}) => {
    return (
        <div className={`${className} w-10/12 mx-auto`}>
            {children}
        </div>
    );
};

export default Container;