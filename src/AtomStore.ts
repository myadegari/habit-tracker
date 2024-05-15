import { atom } from "jotai"
import { atomWithStorage } from 'jotai/utils'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker"

const LastOfMonth =new DateObject({locale:persian_fa,calendar:persian}).toLastOfMonth()
export const startDateAtom = atomWithStorage<DateObject|undefined>(
    'startTrackDate',
    undefined
)
export const dayTrackerAtom = atomWithStorage('track',new Array(LastOfMonth.day).fill(true))
export const streaks = atom(0)
export const relapseAtom =atomWithStorage<DateObject|undefined>('relapse',undefined)
export const themeAtom =atomWithStorage('dark',true)