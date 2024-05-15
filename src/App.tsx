import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker";
import { useAtom } from "jotai";
import { dayTrackerAtom, relapseAtom, startDateAtom, streaks, themeAtom } from "./AtomStore";
import MainContent  from "./content/main";
import { useLayoutEffect } from "react";
import classNames from 'classnames';


function App() {
  const LastOfMonth =new DateObject({locale:persian_fa,calendar:persian}).toLastOfMonth()
  const today = new DateObject({date:new Date(),locale:persian_fa,calendar:persian})
  const [startDateStorage,setStartDateStorage] = useAtom(startDateAtom)
  const [atomDays,setAtomDays] = useAtom(dayTrackerAtom)
  const [streak,setStreak] = useAtom(streaks)
  const [relapse,setRelapse] = useAtom(relapseAtom)
  const [theme,setTheme] = useAtom(themeAtom)
  const days = []
  for (let i = 1; i <= LastOfMonth.day; i++) {
    days.push(i)
  }
  const startDate = startDateStorage ? new DateObject({date:startDateStorage,locale:persian_fa,calendar:persian}):undefined;
  
  useLayoutEffect(()=>{
    if(startDateStorage && startDate){
      if(relapse){
        const relapseDate = new DateObject({date:relapse,locale:persian_fa,calendar:persian})
        setStreak(today.day - relapseDate.day)
      }
      else{
        setStreak(today.day - startDate.day)
      }
    }
  },[relapse])
  
  useLayoutEffect(()=>{
    document.getElementsByTagName('body')[0].className = theme? 'dark' : 'light'

  },[theme])


  return (
    <div className="min-w-[100dvw] min-h-[100dvh] dark:bg-slate-950 bg-slate-100 grid place-items-center dark:text-slate-50 font-body transition-colors duration-500 ">
     <div className="grid place-items-center gap-5">
      <div className="flex gap-2 items-center">
    <p>{MainContent.theme} :</p>
      <div className="flex gap-2 bg-slate-300 dark:bg-slate-500 w-[40px] h-[10px] rounded-full relative">
      <span 
      onClick={()=>setTheme(!theme)}
      
      className={classNames("w-[20px] h-[10px]  flex items-center justify-center rounded-full shadow-md absolute transition-all right-0 duration-500 ",{'bg-slate-50 ':theme,' bg-slate-800 translate-x-[-100%]':!theme})}>

      </span>
      </div>
      </div>
      <div className="flex gap-2">
         <p>{today.day}</p>
         <p>{today.month.name}</p>
         <p>{today.year}</p>
    </div>
    <div>
      <p>{MainContent.day}: {streak}</p>
    </div>
    <div className="gap-2 grid place-items-center grid-cols-10"
    style={{direction:'ltr'}}>
    {days.map((day)=>{
     let color = 'dark:bg-slate-700 dark:opacity-100 bg-slate-600 opacity-30'
    if(startDate && day < startDate.day){
      color = 'dark:bg-slate-500 dark:opacity-20 bg-slate-200'
    }else if(day == today.day){
      color = 'bg-blue-500'
    }
    else{
      if(day < today.day &&  startDate&&day >= startDate.day){
         color = atomDays[day-1]?'bg-green-500':'bg-rose-500'
      }
    }
    return <div key={day} className={`lg:w-[50px] md:w-[40px] sm:w-[35px] w-[25px] aspect-square ${color}`} ></div>
    }

    )}

    </div>
    <div className="flex justify-between mt-5 gap-2 text-white">
    <button className={classNames("dark:bg-blue-950 bg-blue-500 rounded-md px-5 py-2 hover:bg-blue-600 hover:opacity-90",{"opacity-70 ":startDateStorage})}
    onClick={()=>{
      const newDate = new DateObject({date:new Date(),locale:persian_fa,calendar:persian})
      setStartDateStorage(newDate)
    }}
    >{MainContent.start}</button>
    <button className={classNames(" rounded-md px-5 py-2 ",
    {"dark:bg-rose-950 bg-rose-400 hover:bg-rose-600 dark:opacity-70 hover:opacity-90":startDateStorage},
    {"dark:bg-slate-800 opacity-20 bg-slate-500":!startDateStorage}
  
  )}
    disabled={!startDateStorage}
    onClick={()=>{
      if(startDateStorage){
      setAtomDays((prev)=>{
        const newArray = prev.slice()
        newArray[today.day-1] =!newArray[today.day-1]
        return newArray
      })
      setRelapse(today)
    }}
  }
    >
      {MainContent.relapse}
      </button>
    </div>
    {startDate ? <p>{MainContent.startDate}: {startDate.format()}</p>:<p className="lg:w-[80%] sm:w-[50%]  w-[80%] text-justify">
      {MainContent.descriptionMSG}
    </p>}
    
     </div>
    </div>
  )
}

export default App
