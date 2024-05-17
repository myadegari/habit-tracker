import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import moment from 'moment'
import classNames from 'classnames';

import { DateObject } from "react-multi-date-picker";
import { useAtom } from "jotai";
import {
  ATOM_STREAK_TRACKER,
  ATOM_DAILY_TRACKER,
  ATOM_RELAPSE_TRACKER,
  ATOM_START_TRACK_DATE,
  ATOM_THEME
}
  from "./AtomStore";
  import { useEffect, useLayoutEffect, useState } from "react";
  import { motion as M, AnimatePresence } from "framer-motion"
  import MainContent from "./content/main";


function App() {
  const [useTracker, updateTracker] = useState({
    currentDate: moment(),
    currentDatePersian: new DateObject({ locale: persian_fa, calendar: persian })
  })
  const LastOfMonth = new DateObject({ locale: persian_fa, calendar: persian }).toLastOfMonth()
  const [startDateStorage, setStartDateStorage] = useAtom(ATOM_START_TRACK_DATE)
  const [atomDays, setAtomDays] = useAtom(ATOM_DAILY_TRACKER)
  const [streak, setStreak] = useAtom(ATOM_STREAK_TRACKER)
  const [relapse, setRelapse] = useAtom(ATOM_RELAPSE_TRACKER)
  const [theme, setTheme] = useAtom(ATOM_THEME)
  const days = []
  for (let i = 1; i <= LastOfMonth.day; i++) {
    days.push(i)
  }


  useEffect(() => {
    updateTracker({ ...useTracker, currentDate: moment(), currentDatePersian: new DateObject({ date: Date.now(), locale: persian_fa, calendar: persian }) })
  }, [])


  useEffect(() => {
    if (startDateStorage) {
      if (relapse) {

        setStreak(useTracker.currentDate.diff(moment(relapse), 'days'))
      }
      else {
        setStreak(useTracker.currentDate.diff(moment(startDateStorage), 'days'))
      }
    }
  }, [relapse, useTracker.currentDate])

  useLayoutEffect(() => {
    document.getElementsByTagName('body')[0].className = theme ? 'dark' : 'light'

  }, [theme])


  const today = new DateObject(useTracker.currentDate.format('YYYY/MM/DD hh:mm:ss')).convert(persian, persian_fa)

  return (
    <div className="min-w-[100dvw] min-h-[100dvh] dark:bg-woodSmoke-950 bg-woodSmoke-50 grid place-items-center dark:text-slate-50 font-body transition-colors duration-500 ">
      <div className="grid gap-5 place-items-center">
        <div className="flex items-center gap-2">
          <p>{MainContent.theme} :</p>
          <div className="flex gap-2 bg-slate-300 dark:bg-slate-500 w-[40px] h-[15px] rounded-full relative">
            <span
              onClick={() => setTheme(!theme)}

              className={classNames("w-[20px] h-[15px]  flex items-center justify-center rounded-full shadow-md absolute transition-all right-0 duration-500 cursor-pointer", { 'bg-slate-50 ': theme, ' bg-slate-800 translate-x-[-100%]': !theme })}>

            </span>
          </div>
        </div>
        {/* TODAY */}
        <div className="flex gap-2">
          <p>{today.day}</p>
          <p>{today.month.name}</p>
          <p>{today.year}</p>
        </div>
        {/* STREAKS */}
        <div>
          <p>{MainContent.day}: {streak}</p>
        </div>
        {/* DAY OF THE CURRENT MONTH */}
        <div className="grid grid-cols-10 gap-2 place-items-center"
          style={{ direction: 'ltr' }}>
          {days.map((day) => {

            let color = 'bg-blue-200 dark:bg-blue-950'

            const dayDate = new DateObject({ locale: persian_fa, calendar: persian }).toFirstOfMonth().add(day - 1, 'day')
            if (startDateStorage && dayDate.toUnix() < moment(startDateStorage).unix()) {
              color = 'dark:bg-woodSmoke-900 bg-slate-200'
            } else if (dayDate.format() == useTracker.currentDatePersian.format()) {
              color = 'bg-gradient-to-t dark:from-blue-600 from-sky-400 from-10% dark:via-blue-900 via-sky-700 via-90% dark:to-blue-500 to-sky-400 border border-sky-400 dark:border-blue-900'
            }
            else {
              if (dayDate.toUnix() < moment(useTracker.currentDate).unix() && startDateStorage && dayDate.toUnix() >= moment(startDateStorage).unix()) {
                color = atomDays[day - 1] 
                  ? 'bg-gradient-to-t dark:from-green-600 from-lime-400 from-10% dark:via-green-900 via-green-600 via-90% dark:to-green-500 to-green-400 border border-lime-400 dark:border-green-900'
                  : 'bg-gradient-to-t dark:from-shiraz-600 from-shiraz-400 from-10% dark:via-shiraz-900 via-red-600 via-90% dark:to-shiraz-500 to-shiraz-400 border border-shiraz-400 dark:border-shiraz-900'
              }
            }
            return <M.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: Math.ceil(day * 0.1) * 0.3 }}
              key={day}
              className={`lg:w-[50px] md:w-[40px] sm:w-[35px] w-[25px] aspect-square rounded-md ${color}`} >
            </M.div>
          }

          )}

        </div>
        <M.div className="flex justify-between gap-2 mt-5 text-sm text-white sm:text-base">
          <AnimatePresence>
            {
              startDateStorage &&(
       
                <M.button initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                exit={{ opacity: 0, scale: 0 }}
                className="rounded-md px-5 py-2 bg-gradient-to-t dark:from-shiraz-600 from-shiraz-400 from-10% dark:via-shiraz-900 via-red-600 via-90% dark:to-shiraz-500 to-shiraz-400 border border-shiraz-400 dark:border-shiraz-900 cursor-pointer "
                onClick={() => {
                  if (startDateStorage) {
                    setAtomDays((prev) => {
                      const newArray = prev.slice()
                      const today = new DateObject({ date: new Date, locale: persian_fa, calendar: persian })
                      newArray[today.day - 1] = false
                      return newArray
                    })
                    setRelapse(useTracker.currentDate)
                  }
                }
                }
              >
                {MainContent.relapse}
              </M.button>
              )
            }
          </AnimatePresence>

          <M.button initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-md px-5 py-2 cursor-pointer opacity-70 bg-gradient-to-t dark:from-blue-600 from-sky-400 from-10% dark:via-blue-900 via-sky-700 via-90% dark:to-blue-500 to-sky-400 border border-sky-400 dark:border-blue-900"
            onClick={() => {
              if(!startDateStorage){
                setStartDateStorage(moment())
                setStreak(0)

              }
              else{
                setStartDateStorage(undefined)
                  setRelapse(undefined)
                  setStreak(0)
                  setAtomDays(new Array(LastOfMonth.day).fill(true))
              }

            }}
          >{startDateStorage ? MainContent.clear:MainContent.start }</M.button>
         

        </M.div>
        {startDateStorage 
        ? <p>{MainContent.startDate}: {new DateObject(moment(startDateStorage).format('YYYY/MM/DD hh:mm:ss')).convert(persian, persian_fa).format()}</p> 
        : <p className="lg:w-[80%] sm:w-[50%]  w-[80%] text-justify">{MainContent.descriptionMSG}</p>
        }

      </div>
    </div>
  )
}

export default App
