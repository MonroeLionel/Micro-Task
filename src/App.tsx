import React from 'react';
import './App.css';

import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";


function App() {

    return (<div>
            <Header titleForHeader={`new bod`}/>
            <Body titleForBody={`new body`}/>
            <Footer titleForFooter={`new Footer`} />
        </div>

    )
}

export default App;
