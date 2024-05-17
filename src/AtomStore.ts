import { atomWithStorage } from 'jotai/utils'

import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { DateObject } from "react-multi-date-picker"

const LAST_OF_MONTH = new DateObject({ locale: persian_fa, calendar: persian }).toLastOfMonth()


// ATOMS FOR TRACKING

export const ATOM_START_TRACK_DATE = atomWithStorage<moment.Moment | undefined>('TRACK_IT_ATOM_START_TRACK_DATE', undefined)
export const ATOM_DAILY_TRACKER    = atomWithStorage<boolean[]>('TRACK_IT_ATOM_TRACK', new Array(LAST_OF_MONTH.day).fill(true))
export const ATOM_RELAPSE_TRACKER  = atomWithStorage<moment.Moment | undefined>('TRACK_IT_ATOM_RELAPSE', undefined)
export const ATOM_THEME            = atomWithStorage<boolean>('TRACK_IT_ATOM_DARK', true)
export const ATOM_STREAK_TRACKER   = atomWithStorage<number>('TRACK_IT_ATOM_STREAKS', 0)