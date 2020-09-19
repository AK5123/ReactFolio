import React, {Component} from 'react';
import Skills from "./skills.js"
import Stepper from "./stepper.js"

export default class Experience extends Component {
    render(){
        console.log(this.props)
        return(
            <div style={{display:"flex",flexDirection:"column"}}>
                <h1 style={{marginTop:"20px",padding:"16px"}} className="title"  >Experience</h1>
                <div style={{width:"100%"}}>
                    <Stepper stepContent={this.props.exp.details} />
                </div>
                <div style={{width:"100%"}}>
                    <h1 className="title">Skills</h1>
                    <Skills list={this.props.exp.list} />
                </div>
                
            </div>
        )
    }
}