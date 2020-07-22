import React from 'react'
import { createPage } from 'react-torch/page'
import { createStore } from 'react-torch/store'

export type State = {
  count: number
}

export type Actions = typeof actions

const initialState: State = {
  count: 0
}

const actions = {
  UPDATE_COUNT(state: State, nextCount: number) {
    return {
      ...state,
      count: nextCount
    }
  },
  INCREASE(state: State) {
    return {
      ...state,
      count: state.count + 1
    }
  },
  DECREASE(state: State) {
    return {
      ...state,
      count: state.count - 1
    }
  },
}

const Home = createPage(() => {

  const store = createStore(initialState, actions)
  
   const View = () => {
    const state = store.state
    const actions = store.actions
    return <div className='test'>Home {state.count} <button onClick={() => actions.INCREASE()}>Increate</button></div>
  }
  
  return [View, store]
})

export default Home