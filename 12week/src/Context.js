import React from 'react';

const MyContext = React.createContext(defaultValue);

function App () {
    const data = 'data';
    return (
        <div>
            <Header/>
            <MyContext.Provider value={data}>
                <Body/>
            </MyContext.Provider>
        </div>
    );
}
export default App;