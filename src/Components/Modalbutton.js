import React from 'react'

import {useModal, Modal} from "react-morphing-modal";
// import Projects from "./Projects";
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import '../css/modal.css';

const Modalbutton = props => {

    const { modalProps, getTriggerProps } = useModal({
        background:'white'
    });
    
    return (
        <div className="btns" >
            <button {...getTriggerProps()} className="purple btn-main">Experience & Skills</button>
            <Modal {...modalProps} >{props.children}</Modal>
            {/* <button {...getTriggerProps} className="btn-main">Work Experience</button> */}
        </div>
    )
    
}

export default Modalbutton;