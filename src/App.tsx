import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker";
import { useAtom } from "jotai";
import { dayTrackerAtom, relapseAtom, startDateAtom, themeAtom } from "./AtomStore";
import MainContent from "./content/main";
import { useEffect, useLayoutEffect, useState } from "react";
import { motion as M, AnimatePresence } from "framer-motion"
import classNames from 'classnames';
import moment from 'moment'


function App() {
  // const [currentDate, setCurrentDate] = useAtom(tracker)
  const [useTracker, updateTracker] = useState({
    streaks: 0,
    currentDate: moment(),
    currentDatePersian: new DateObject({ locale: persian_fa, calendar: persian })
  })
  const LastOfMonth = new DateObject({ locale: persian_fa, calendar: persian }).toLastOfMonth()
  // const FirstOfMonth =
  const [startDateStorage, setStartDateStorage] = useAtom(startDateAtom)
  const [atomDays, setAtomDays] = useAtom(dayTrackerAtom)
  // const [streak,setStreak] = useAtom(tracker.streaks)
  const [relapse, setRelapse] = useAtom(relapseAtom)
  const [theme, setTheme] = useAtom(themeAtom)
  const days = []
  for (let i = 1; i <= LastOfMonth.day; i++) {
    days.push(i)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      updateTracker({ ...useTracker, currentDate: moment(), currentDatePersian: new DateObject({ locale: persian_fa, calendar: persian }) })
    }, 3600000);
    return () => clearInterval(interval);
  }, [])


  useEffect(() => {
    if (startDateStorage) {
      if (relapse) {
        updateTracker({
          ...useTracker, streaks: moment(useTracker.currentDate).diff(moment(relapse), 'days')
        })
      }
      else {
        updateTracker({
          ...useTracker, streaks: moment(useTracker.currentDate).diff(moment(startDateStorage), 'days')
        })
      }
    }
  }, [relapse, useTracker.currentDate])

  useLayoutEffect(() => {
    document.getElementsByTagName('body')[0].className = theme ? 'dark' : 'light'

  }, [theme])


  const today = new DateObject(useTracker.currentDate.format('YYYY/MM/DD hh:mm:ss')).convert(persian, persian_fa)

  return (
    <div className="min-w-[100dvw] min-h-[100dvh] dark:bg-slate-950 bg-slate-100 grid place-items-center dark:text-slate-50 font-body transition-colors duration-500 ">
      <div className="grid gap-5 place-items-center">
        <div className="flex items-center gap-2">
          <p>{MainContent.theme} :</p>
          <div className="flex gap-2 bg-slate-300 dark:bg-slate-500 w-[40px] h-[10px] rounded-full relative">
            <span
              onClick={() => setTheme(!theme)}

              className={classNames("w-[20px] h-[10px]  flex items-center justify-center rounded-full shadow-md absolute transition-all right-0 duration-500 cursor-pointer", { 'bg-slate-50 ': theme, ' bg-slate-800 translate-x-[-100%]': !theme })}>

            </span>
          </div>
        </div>
        <div className="flex gap-2">
          <p>{today.day}</p>
          <p>{today.month.name}</p>
          <p>{today.year}</p>
        </div>
        <div>
          <p>{MainContent.day}: {useTracker.streaks}</p>
        </div>
        <div className="grid grid-cols-10 gap-2 place-items-center"
          style={{ direction: 'ltr' }}>
          {days.map((day) => {
            let color = 'dark:bg-slate-700 dark:opacity-100 bg-slate-600 opacity-30'
            const dayDate = new DateObject({ locale: persian_fa, calendar: persian }).toFirstOfMonth().add(day - 1, 'day')
            if (startDateStorage && dayDate.toUnix() < moment(startDateStorage).unix()) {
              color = 'dark:bg-slate-500 dark:opacity-20 bg-slate-200'
            } else if (dayDate.format() == useTracker.currentDatePersian.format()) {
              color = 'dark:bg-blue-800 bg-blue-400'
            }
            else {
              if (dayDate.toUnix() < moment(useTracker.currentDate).unix() && startDateStorage && dayDate.toUnix() >= moment(startDateStorage).unix()) {
                color = atomDays[day - 1] ? 'bg-green-500' : 'bg-rose-500'
              }
            }
            return <div
              key={day}
              className={`lg:w-[50px] md:w-[40px] sm:w-[35px] w-[25px] aspect-square flex items-center justify-center ${color}`} >
            
            </div>
          }

          )}

        </div>
        <M.div className="flex justify-between gap-2 mt-5 text-sm text-white sm:text-base">
          <AnimatePresence>
            {
              startDateStorage &&
              <M.button initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                exit={{ opacity: 0, scale: 0 }}
                className="px-5 py-2 rounded-md opacity-70 bg-slate-700"
                onClick={() => {
                  setStartDateStorage(undefined)
                  setRelapse(undefined)
                }}>{MainContent.clear}</M.button>
            }
          </AnimatePresence>

          <M.button initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={classNames("rounded-md px-5 py-2 cursor-pointer opacity-70 bg-blue-600", { "opacity-70 ": startDateStorage })}
            onClick={() => {
              setStartDateStorage(moment())
              updateTracker({ ...useTracker, streaks: 0 })

            }}
          >{MainContent.start}</M.button>
          <M.button initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className={classNames("rounded-md cursor-pointer px-5 py-2 ",
              { "bg-rose-600 opacity-70": startDateStorage },
              { "dark:bg-slate-800 opacity-20 bg-slate-500": !startDateStorage }

            )}
            disabled={!startDateStorage}
            onClick={() => {
              if (startDateStorage) {
                setAtomDays((prev) => {
                  const newArray = prev.slice()
                  const today = new DateObject({ date: moment(useTracker.currentDate).unix(), locale: persian_fa, calendar: persian })
                  newArray[today.day - 1] = !newArray[today.day - 1]
                  return newArray
                })
                setRelapse(useTracker.currentDate)
              }
            }
            }
          >
            {MainContent.relapse}
          </M.button>

        </M.div>
        {startDateStorage ? <p>{MainContent.startDate}: {new DateObject(useTracker.currentDate.format('YYYY/MM/DD hh:mm:ss')).convert(persian, persian_fa).format()}</p> : <p className="lg:w-[80%] sm:w-[50%]  w-[80%] text-justify">
          {MainContent.descriptionMSG}
        </p>}

      </div>
    </div>
  )
}

export default App
