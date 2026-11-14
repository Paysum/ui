import { error } from '@sveltejs/kit'
import { docs } from '$lib/docs'
import type { PageLoad } from './$types'

export const load: PageLoad = ({ params }) => {
  const doc = docs.find((item) => item.slug === params.slug)
  if (!doc) error(404, 'Component not found')
  return { doc }
}
