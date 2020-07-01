import { Mdlw } from 'react-torch'

export const checkHealth: Mdlw = (app, server) => {
  app.use('/checkHealth', (_, res) => {
    res.json('ok')
  })
}