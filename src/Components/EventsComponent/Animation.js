import React, { useState } from "react";
import "./animation.css";
import EventModal from "./EventModal";
import Robo from "./Robo";
import $ from "jquery";
import { info } from "./info";
import Event from "./EventCard.js";

function Animation() {
  const [cls1, setCls1] = useState("");
  const [cls2, setCls2] = useState("");
  const [cls3, setCls3] = useState("");
  const [moveHandCls1, setMoveHandCls1] = useState("");
  const [moveHandCls2, setMoveHandCls2] = useState("");
  const [modalCls, setModalCls] = useState("");
  const [isGrid, setIsGrid] = useState(true);

  const [isIdle, setIsIdle] = useState(true);

  const [index, setIndex] = useState(0);

  let leftHand = {
    upper: "",
    lower: "",
  };

  let rightHand = {
    upper: "",
    lower: "",
  };

  const [leftHandMoveCls, setLeftHandMoveCls] = useState(leftHand);
  const [rightHandMoveCls, setRightHandMoveCls] = useState(rightHand);

  const eventsClickHandler = (index) => {
    setIsIdle(false);
    setCls1("fadeOut1");
    setCls2("fadeOut2");
    index < 6 ? setCls3("slideRight") : setCls3("slideLeft");

    setIndex(index);

    setTimeout(() => {
      setCls1("fadeOut1 hide");
      setCls2("fadeOut2 hide");

      if (index < 6) {
        setMoveHandCls1("moveHand");
        setMoveHandCls2("");

        let temp = { ...leftHand };
        temp.upper = "";
        temp.lower = "";
        setLeftHandMoveCls(temp);

        temp = { ...rightHand };
        temp.upper = "";
        temp.lower = "";
        setRightHandMoveCls(temp);
      } else {
        let temp = { ...leftHand };
        temp.upper = "switchHand1a";
        temp.lower = "switchHand1b";
        setLeftHandMoveCls(temp);

        setTimeout(() => {
          temp = { ...rightHand };
          temp.upper = "switchHand2a";
          temp.lower = "switchHand2b";
          setRightHandMoveCls(temp);
        }, 150);

        setTimeout(() => {
          setMoveHandCls2("moveHand2");
        }, 800);
      }

      setIsGrid(false);

      setTimeout(() => {
        index < 6 ? setModalCls("showModal1") : setModalCls("showModal2");
      }, 1);
    }, 300);
  };

  const closeModalHandler = () => {
    setIsIdle(true);

    setCls3("");

    setMoveHandCls1("");
    setMoveHandCls2("");

    let temp = { ...leftHand };

    setTimeout(() => {
      temp.upper = "";
      temp.lower = "";
      setLeftHandMoveCls(temp);
    }, 150);

    temp = { ...rightHand };
    temp.upper = "";
    temp.lower = "";
    setRightHandMoveCls(temp);

    modalCls === "showModal2" ? setModalCls("shiftRight") : setModalCls("");

    setTimeout(() => {
      setIsGrid(true);
      setCls1("fadeOut1");
      setCls2("fadeOut2");
      setModalCls("");

      setTimeout(() => {
        setCls1("");
        setCls2("");
      }, 1);
    }, 300);
  };

  return (
    <div>
      <div className='eve-anim'>
        {isGrid ? (
          <div className='events-grid'>
            <Event
              onClick={() => {
                eventsClickHandler(0);
              }}
              dataToggle='modal'
              dataTarget='#myModal1'
              src='/logos/clash.png'
              name='Clash'
              cls={cls1}></Event>
            {/* <button>close</button> */}

            <Event
              onClick={() => {
                eventsClickHandler(1);
              }}
              src='/logos/rc.png'
              name='Reverse Coding'
              cls={cls1}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(2);
              }}
              src='/logos/pixelate.png'
              name='Pixelate'
              cls={cls1}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(3);
              }}
              src='/logos/cretronix.png'
              name='Cretronix'
              cls={cls1}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(4);
              }}
              src='/logos/bplan.png'
              name='Bplan'
              cls={cls1}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(5);
              }}
              src='/logos/wallstreet.png'
              name='Wallstreet'
              cls={cls1}></Event>
          </div>
        ) : (
          <EventModal
            info={info[index]}
            cls={modalCls}
            onClick={closeModalHandler}></EventModal>
        )}
        <Robo
          cls={cls3}
          moveHandCls1={moveHandCls1}
          moveHandCls2={moveHandCls2}
          right={rightHandMoveCls}
          left={leftHandMoveCls}
          isidle={isIdle}></Robo>
        {isGrid ? (
          <div className='events-grid'>
            <Event
              onClick={() => {
                eventsClickHandler(6);
              }}
              src='/logos/datawiz.png'
              name='Datawiz'
              cls={cls2}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(7);
              }}
              src='/logos/enigma.png'
              name='Enigma'
              cls={cls2}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(8);
              }}
              src='/logos/quiz.png'
              name='Quiz'
              cls={cls2}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(9);
              }}
              src='/logos/web.png'
              name='Web Weaver'
              cls={cls2}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(10);
              }}
              src='/logos/paper.png'
              name='Paper Presentation'
              cls={cls2}></Event>
            <Event
              onClick={() => {
                eventsClickHandler(11);
              }}
              src='/logos/nth.png'
              name='Network Treasure Hunt'
              cls={cls2}></Event>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Animation;
