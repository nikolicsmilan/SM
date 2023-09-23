import React from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import './Calendar.css'

//import { DataPickerComponent } from "@syncfusion/ej2-react-calendars";
import { scheduleData } from "../../../../data/dummy";


const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-success rounded-3xl">
    
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021,0,10)}
        className="bg-info border-2 rounded-2xl"
      >
        <Inject
          services={[Day, Week, Month, WorkWeek, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
