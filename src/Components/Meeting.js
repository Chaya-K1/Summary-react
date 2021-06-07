import { DayCellContent } from '@fullcalendar/react';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { connect } from 'react-redux'
import '../css/Calender.css'
import Meet from "./Meet";
import actions from "../Redux/action";


function mapStateToProps(state) {
    return { dateTurn: state.dateTurn };
}

const mapDispatchToProps = (dispatch) => ({

    setDate: (date) => dispatch(actions.changeDate(date)),

})

export default connect(mapStateToProps, mapDispatchToProps)(function Meeting(props) {
    const { setDate, dateTurn } = props
    const [value, onChange] = useState(new Date());
    const [check, setCheck] = useState(false)
    const [dateFull, setDateFull] = useState({ day: '', month: '', year: '' });

    function Turn(e) {

        setDateFull({
            day: e.getDate(),
            month: e.getMonth() + 1,
            year: e.getYear() - 100,
        })
        setDate(dateFull)
    }
    function MeetF(e) {
        onChange()
        Turn(e)
        setCheck(true)
    }
    return (
        <>
            <div className='container'>
                <h3 className='m-5'>Make an appointment with an optometrist</h3>

                <div className="h-100 d-flex justify-content-center m-4">
                    <Calendar
                        calendarType='Hebrew'
                        formatLongDate={() => ('dd', 'mm', 'yyyy')}
                        onChange={(e) => { MeetF(e) }}
                        value={value}
                    // onClickDay={(e) => { Turn(e) }}
                    // onClick={Meet(Date)}
                    />

                </div>
            </div>

            {/* {dateFull&& <h1>dateTurn: {dateTurn.day}</h1>} */}

            {check && <Meet check={setCheck} />}

        </>
    );
})