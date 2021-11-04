const initialState = {
  tenants: [],
  currentTenant: '',
  loading: false,
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'LOADING':
      return { ...state, loading: true }
    case 'SUCCESS':
      return { ...state, tenants: action.result, loading: false }
    case 'FAILURE':
      return { ...state, loading: false, tenants: [] }
    default:
      return state
  }
}

export function listTenants() {
  return {
    types: ['LOADING', 'SUCCESS', 'FAILURE'],
    promise: (client) => client.get('/api/ListTenants').then((result) => result.data),
  }
}

export function getTenant({ tenant }) {
  // etc
  return {}
}

export function setTenant({ tenantId }) {
  return {}
}