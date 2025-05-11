// app/elements/rsvp-form/rsvp-form.server.ts
'use server'

import { supabase } from '@/app/config/config-supabase'

export async function fetchRsvp() {
  const { data, error } = await supabase
    .from('Rsvp')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Fetch failed:', error.message)
    throw new Error('Failed to fetch RSVPs')
  }

  return data
}