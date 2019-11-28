import React, {Component} from 'react';
import {Rectangle, Container, Row, Col, Nav, Navbar, NavItem, Button, Form, FormGroup, Input, Group, GroupFixed, Image, SketchDocument, Text, TextPart, ExternalAsset} from '@sketch2react/react-components';
import * as StyleVariables from './StyleVariables/StartStyleVariables';



 import './css/start_fonts.css'

class Start extends Component { 
  /* constructor(props){
    super(props);
  } */
  
  /* lifecycle handlers goes here */
  
  render(){
    return(<SketchDocument>
  <Container>
    <Row>
      <Col xs="12">
        <Text id="txt_3789" htmlType="p" className="m16">
          <TextPart id="txt_part_0" sketchStyle={StyleVariables.txt_3789_txt_part_0_SketchStyle}>Why is Eburus free?
          <TextPart id="txt_part_1" sketchStyle={StyleVariables.txt_3789_txt_part_1_SketchStyle}>
          <TextPart id="txt_part_2" sketchStyle={StyleVariables.txt_3789_txt_part_2_SketchStyle}>How does Eburus work?
          <TextPart id="txt_part_3" sketchStyle={StyleVariables.txt_3789_txt_part_3_SketchStyle}>
          <TextPart id="txt_part_4" sketchStyle={StyleVariables.txt_3789_txt_part_4_SketchStyle}>What is an Advance Care or End-of-Life plan?
          <TextPart id="txt_part_5" sketchStyle={StyleVariables.txt_3789_txt_part_5_SketchStyle}>
          <TextPart id="txt_part_6" sketchStyle={StyleVariables.txt_3789_txt_part_6_SketchStyle}>What type of questions do you ask?
          <TextPart id="txt_part_7" sketchStyle={StyleVariables.txt_3789_txt_part_7_SketchStyle}>
          <TextPart id="txt_part_8" sketchStyle={StyleVariables.txt_3789_txt_part_8_SketchStyle}>Are the answers to these questions legally binding?
          <TextPart id="txt_part_9" sketchStyle={StyleVariables.txt_3789_txt_part_9_SketchStyle}>
          <TextPart id="txt_part_10" sketchStyle={StyleVariables.txt_3789_txt_part_10_SketchStyle}>How do you curate the services you recommend to me?
          <TextPart id="txt_part_11" sketchStyle={StyleVariables.txt_3789_txt_part_11_SketchStyle}>
          <TextPart id="txt_part_12" sketchStyle={StyleVariables.txt_3789_txt_part_12_SketchStyle}>Do you share my answers with your providers?
          <TextPart id="txt_part_13" sketchStyle={StyleVariables.txt_3789_txt_part_13_SketchStyle}>
          <TextPart id="txt_part_14" sketchStyle={StyleVariables.txt_3789_txt_part_14_SketchStyle}>Is my profile secure and private? Can I trust Eburus with my data?
          <TextPart id="txt_part_15" sketchStyle={StyleVariables.txt_3789_txt_part_15_SketchStyle}>
          <TextPart id="txt_part_16" sketchStyle={StyleVariables.txt_3789_txt_part_16_SketchStyle}>How long does it take to complete the questionnaire?
          <TextPart id="txt_part_17" sketchStyle={StyleVariables.txt_3789_txt_part_17_SketchStyle}>
          <TextPart id="txt_part_18" sketchStyle={StyleVariables.txt_3789_txt_part_18_SketchStyle}>Do I have to fill out the form at once?
          <TextPart id="txt_part_19" sketchStyle={StyleVariables.txt_3789_txt_part_19_SketchStyle}>
          <TextPart id="txt_part_20" sketchStyle={StyleVariables.txt_3789_txt_part_20_SketchStyle}>Why the name Eburus?
          <TextPart id="txt_part_21" sketchStyle={StyleVariables.txt_3789_txt_part_21_SketchStyle}>
          <TextPart id="txt_part_22" sketchStyle={StyleVariables.txt_3789_txt_part_22_SketchStyle}>Why did you create Eburus?
          <TextPart id="txt_part_23" sketchStyle={StyleVariables.txt_3789_txt_part_23_SketchStyle}>
          <TextPart id="txt_part_24" sketchStyle={StyleVariables.txt_3789_txt_part_24_SketchStyle}>What is the difference between Eburus, a Will and Power of Attorney? 
          <TextPart id="txt_part_25" sketchStyle={StyleVariables.txt_3789_txt_part_25_SketchStyle}>
          <TextPart id="txt_part_26" sketchStyle={StyleVariables.txt_3789_txt_part_26_SketchStyle}>Can I download my answers?
          <TextPart id="txt_part_27" sketchStyle={StyleVariables.txt_3789_txt_part_27_SketchStyle}>
          <TextPart id="txt_part_28" sketchStyle={StyleVariables.txt_3789_txt_part_28_SketchStyle}>I've already done my planning on paper. Should I sign up for this?
          <TextPart id="txt_part_29" sketchStyle={StyleVariables.txt_3789_txt_part_29_SketchStyle}>
          <TextPart id="txt_part_30" sketchStyle={StyleVariables.txt_3789_txt_part_30_SketchStyle}>I already have a will. What does Eburus offer that a will does not?
          <TextPart id="txt_part_31" sketchStyle={StyleVariables.txt_3789_txt_part_31_SketchStyle}>
          <TextPart id="txt_part_32" sketchStyle={StyleVariables.txt_3789_txt_part_32_SketchStyle}>I don’t care what happens after I die. I’ll be dead. Should I sign up for this?
          <TextPart id="txt_part_33" sketchStyle={StyleVariables.txt_3789_txt_part_33_SketchStyle}>
          <TextPart id="txt_part_34" sketchStyle={StyleVariables.txt_3789_txt_part_34_SketchStyle}>How did you come up with the content and questions presented in the Eburus platform?
          <TextPart id="txt_part_35" sketchStyle={StyleVariables.txt_3789_txt_part_35_SketchStyle}>
          <TextPart id="txt_part_36" sketchStyle={StyleVariables.txt_3789_txt_part_36_SketchStyle}>What happens to my plan if Eburus isn't around in 50 years?
          <TextPart id="txt_part_37" sketchStyle={StyleVariables.txt_3789_txt_part_37_SketchStyle}>
        </Text>
      </Col>
    </Row>
    <Button color="primary" id="null">
      <Text id="txt_4313" htmlType="p" sketchStyle={StyleVariables.txt_4313_SketchStyle}>ADVANCED CARE PLAN</Text>
    </Button>
  </Container>
</SketchDocument>)
  }
}

export default Start;