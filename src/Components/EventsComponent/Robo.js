import React from "react";
import "./robo.css";
import CredenzEye2 from "../HomeComponent/HomeAnimation/AnimationSVGs/Credenzeye2";
import Animated from "./roboSmall.svg";

function Robo(props) {
  let cls = `robo ${props.cls}`;
  let leftHandCls1 = `braco-esquerdo ${props.moveHandCls1} ${props.left.upper}`;
  let leftHandCls2 = `antebraco-esquerdo ${props.left.lower}`;
  let rightHandCls1 = `braco-direito ${props.moveHandCls2} ${props.right.upper}`;
  let rightHandCls2 = `antebraco-direito ${props.right.lower}`;
  return (
    <div className={cls} onClick={props.onClick}>
      <div id='head'>
        {/* <div className='irisWrap'> */}

        <div
          className='iris'
          style={props.isidle ? { opacity: "0" } : { opacity: "1" }}></div>
        {/* </div> */}
        <div
          className='borda-iris'
          style={props.isidle ? { opacity: "0" } : { opacity: "1" }}></div>
        <div className='olho'>
          <CredenzEye2 isidle={props.isidle}></CredenzEye2>
        </div>
        <div className='borda-olho'></div>
        <div className='head'></div>
        <div className='antena'></div>
      </div>

      <div className='robo-body'>
        <div className='peito'>
          <div className='tela'>;)</div>
        </div>
        <div className={leftHandCls1}>
          <div className={leftHandCls2}></div>
        </div>

        <div className={rightHandCls1}>
          <div className={rightHandCls2}></div>
        </div>
      </div>
      <div className='leg'>
        <div className='foot'></div>
        <div className='sombra'></div>
      </div>
    </div>
  );
}

export default Robo;
