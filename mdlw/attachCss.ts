import { Mdlw } from 'react-torch'

export const attachCss: Mdlw = (app, server) => {
  app.use((req, res, next) => {
    res.locals = {
      styles: [
        {
          type: 'link',
          href: '/static/css/main.css'
        }
      ]
    }
    next()
  })
}