import { LoopReducer, Loop } from 'redux-loop'
import * as actions from './actions'

export type NotificationState = {
  newContentAvailable: boolean
  backgroundSyncShow: boolean
  syncCount: number
}

export const initialState: NotificationState = {
  newContentAvailable: false,
  backgroundSyncShow: false,
  syncCount: 0
}

type Action =
  | actions.ShowNewContentAvailableAction
  | actions.HideNewContentAvailableAction
  | actions.ShowBackgroundSyncedAction
  | actions.HideBackgroundSyncedAction

export const notificationReducer: LoopReducer<NotificationState, Action> = (
  state: NotificationState = initialState,
  action: Action
): NotificationState | Loop<NotificationState, Action> => {
  switch (action.type) {
    case actions.SHOW_NEW_CONTENT_AVAILABLE:
      return {
        ...state,
        newContentAvailable: true
      }
    case actions.HIDE_NEW_CONTENT_AVAILABLE:
      return {
        ...state,
        newContentAvailable: false
      }
    case actions.SHOW_BACKGROUND_SYNC_TRIGGERED:
      return {
        ...state,
        backgroundSyncShow: true,
        syncCount: action.payload.syncCount
      }
    case actions.HIDE_BACKGROUND_SYNC_TRIGGERED:
      return {
        ...state,
        backgroundSyncShow: false
      }
    default:
      return state
  }
}
