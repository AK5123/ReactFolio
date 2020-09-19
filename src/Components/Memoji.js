import React, { Component } from 'react'

import VideoElement from "./VideoElement";

class Memoji extends Component {

    render(){

        return(
            <div className="memoji" >
                <VideoElement src={
                    "/images/memoji/" + this.props.src + ".mp4"
                } />
            </div>
        )

    }

}

export default Memoji;