import React, { Component } from 'react';
import Item from './Item';
import images from '../listeImages';

class App extends Component {

    state = {...images}

    render() {
        


        const images = Object
            .keys(this.state)
            .map(image => < Item key = { image }
                details = { this.state[image] }
                /> );

                return ( 
                    <div>
                        <header>
                            <div className="containerHeader">
                                <h1>La cuisine provençale</h1>
                            </div>
                        </header>
                        <div className = "container" > { images } </div >
                    </div>
                )
            }
    }

    export default App;