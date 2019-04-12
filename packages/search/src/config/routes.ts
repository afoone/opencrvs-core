import { birthEventHandler } from 'src/features/registration/birth/handler'
import { deathEventHandler } from 'src/features/registration/death/handler'
import { searchDeclaration } from 'src/features/search/handler'

const enum RouteScope {
  DECLARE = 'declare',
  REGISTER = 'register',
  CERTIFY = 'certify'
}

export const getRoutes = () => {
  const routes = [
    // add ping route by default for health check
    {
      method: 'GET',
      path: '/ping',
      handler: (request: any, h: any) => {
        return 'pong'
      },
      config: {
        tags: ['api']
      }
    },
    {
      method: 'POST',
      path: '/search',
      handler: searchDeclaration,
      config: {
        tags: ['api'],
        auth: {
          scope: [RouteScope.REGISTER]
        },
        description:
          'Handles indexing a new declaration and searching for duplicates'
      }
    },
    {
      method: 'POST',
      path: '/events/birth/new-declaration',
      handler: birthEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description:
          'Handles indexing a new declaration and searching for duplicates'
      }
    },
    {
      method: 'POST',
      path: '/events/birth/new-registration',
      handler: birthEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description:
          'Handles indexing a new registration and searching for duplicates'
      }
    },
    {
      method: 'POST',
      path: '/events/birth/registration',
      handler: birthEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description:
          'Handles updating an existing declaration and searching for duplicates'
      }
    },
    {
      method: 'POST',
      path: '/events/birth/mark-certified',
      handler: birthEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description:
          'Handles updating an existing declaration and searching for duplicates'
      }
    },
    {
      method: 'POST',
      path: '/events/birth/mark-voided',
      handler: birthEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles updating an existing declaration'
      }
    },

    {
      method: 'POST',
      path: '/events/death/new-declaration',
      handler: deathEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles indexing a new declaration'
      }
    },
    {
      method: 'POST',
      path: '/events/death/new-registration',
      handler: deathEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles indexing a new registration'
      }
    },
    {
      method: 'POST',
      path: '/events/death/registration',
      handler: deathEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles updating a existing declaration'
      }
    },
    {
      method: 'POST',
      path: '/events/death/mark-certified',
      handler: deathEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles updating a existing declaration'
      }
    },
    {
      method: 'POST',
      path: '/events/death/mark-voided',
      handler: deathEventHandler,
      config: {
        tags: ['api'],
        auth: false,
        description: 'Handles updating a existing declaration'
      }
    }
  ]
  return routes
}