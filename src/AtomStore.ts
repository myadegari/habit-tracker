import { atomWithStorage } from 'jotai/utils'
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker"

const LastOfMonth = new DateObject({locale:persian_fa,calendar:persian}).toLastOfMonth()
export const startDateAtom = atomWithStorage<moment.Moment|undefined>(
    'startTrackDate',
    undefined
)

export const dayTrackerAtom = atomWithStorage('track',new Array(LastOfMonth.day).fill(true))
export const relapseAtom = atomWithStorage<moment.Moment|undefined>('relapse',undefined)
export const themeAtom = atomWithStorage('dark',true)