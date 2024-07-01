/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import mail from '@adonisjs/mail/services/main'

router.get('/', async () => {
  return mail.send((message) => {
    message
      .htmlView('welcome.vue', {
        name: 'Virk',
      })
      .subject('Hello from Vue mail')
      .from('virk@adonisjs.com')
      .to('foo@bar.com')
  })
})
