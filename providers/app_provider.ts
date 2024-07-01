import { Message } from '@adonisjs/mail'
import { config } from '@vue-email/compiler'
import type { ApplicationService } from '@adonisjs/core/types'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {
    const vueEmail = config(this.app.makePath('resources/vue/emails'), {
      options: {
        baseUrl: 'http://localhost:3333',
      },
    })

    Message.templateEngine = {
      async render(templatePath, helpers, data) {
        const { html } = await vueEmail.render(templatePath, { props: data })
        return html
      },
    }
  }

  /**
   * The application has been booted
   */
  async start() {}

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
