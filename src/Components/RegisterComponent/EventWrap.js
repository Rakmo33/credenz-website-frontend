import React from "react";
import EventCard from "./EventCard";

function EventWrap(props) {
  if (props.isVisible)
    return (
      <div className={props.cls}>
        <p id='choose-events'>Choose Events</p>
        <div className='form-group col-md-12 event-icons'>
          {props.events.map((event, index) => {
            return (
              <EventCard
                key={index}
                id={event.id}
                name={event.name}
                price={event.price}
                isCheked={event.isCheked}
                cls={`custom-control-label event ${event.name} drinkcard-cc ${event.isCheked}`}
                changeHandler={() => props.changeHandler(index)}></EventCard>
            );
          })}
        </div>
      </div>
    );
  else return <></>;
}

export default EventWrap;
