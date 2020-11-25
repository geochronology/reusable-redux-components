// ACTION TYPES

export const SEARCH_LIST = "SEARCH_LIST"

// ACTION DEFINITIONS

export function searchList(query) {
  return {
    type: SEARCH_LIST,
    query
  }
}
