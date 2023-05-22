import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faBell, faTaxi, faCalendarDays, faPerson} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = ({type}) => {
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);

const [openOption, setOpenOption] = useState(false)
const [option, setOption] = useState ({
  adult:1,
  children:0,
  room:1
})

const handleOption = (name, operation) => {
  setOption(prev=>{
    return{
    ...prev,
    [name]: operation ==='i' ? option[name] + 1: option[name] - 1,
  }
})
}

  return (
    
    <div className='header'>
      <div className={type=== "list"? "headerContainer listMode": "headerContainer"}>
        
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />  
            <span>Stays</span> 
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>   
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car Rentals</span>   
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faBell} /> 
            <span>Attractions</span>  
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />  
            <span>Airport Taxis</span> 
            </div>
          </div>
          
          { type!=="list" &&
            <><h1 className="headerTitle">Find deals for any season </h1>
            <p className="headerDesc">From cozy bed & breakfasts to luxury hotels</p>
            <button className="headerBtn">Sign in / Register </button>

            <div className="headerSearch">
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" placeholder='Where are you going?' className='headerSearchInput' />
              </div>
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              { openDate && <DateRange
              editableDateInputs={true}
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
              /> }
              </div>
              <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={()=>setOpenOption(!openOption)} className='headerSearchText'> {`${option.adult} adults · ${option.children} children · ${option.room} room` }</span>
                { openOption && <div className="option">
                  <div className="optionItem">
                      <span className="optionText">Adult</span>
                      <div className="optionCounter">
                      <button 
                      disabled={option.adult <= 1}
                      className="optionCounterBtn"
                      onClick={()=>handleOption("adult", "d")}
                      >-</button>
                      <span className="optionCounterNumber">{option.adult}</span>
                      <button className="optionCounterBtn"onClick={()=>handleOption("adult", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                    <button 
                    disabled={option.children <= 0}
                    className="optionCounterBtn"
                    onClick={()=>handleOption("children", "d")}
                    >-</button>
                    <span className="optionCounterNumber">{option.children}</span>
                    <button className="optionCounterBtn"onClick={()=>handleOption("children", "i")}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                      <span className="optionText">room</span>
                      <div className="optionCounter">
                      <button 
                      disabled={option.room <= 1}
                      className="optionCounterBtn"
                      onClick={()=>handleOption("room", "d")}
                      >-</button>
                      <span className="optionCounterNumber">{option.room}</span>
                      <button className="optionCounterBtn"onClick={()=>handleOption("room", "i")}>+</button>
                    </div>
                  </div>
                </div>}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn">Search</button>
              </div>
            </div></>}
            
        
        
      </div>
    </div>
  )
}

export default Header
