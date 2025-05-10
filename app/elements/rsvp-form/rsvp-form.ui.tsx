'use client'

import React, { useState } from 'react'
import { createRsvp, fetchRsvp } from './rsvp-form.server'

export default function RSVPForm() {
  const [rsvpList, setRsvpList] = useState<any[]>([])
  const [loading, setLoading] = useState(false)

  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    try {
      setLoading(true)
      await createRsvp(formData)
      const updatedList = await fetchRsvp()
      setRsvpList(updatedList)
      alert('RSVP saved and list updated.')
    } catch (err) {
      console.error(err)
      alert('RSVP failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 py-8 px-4 md:px-8">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Wedding RSVP</h1>
        <form onSubmit={handleForm} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input name="name" className="w-full border rounded p-2" placeholder="e.g. Amirul Irfan" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Speech</label>
            <input name="speech" className="w-full border rounded p-2" placeholder="Optional" />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="isAttend" id="isAttend" className="accent-pink-500" />
            <label htmlFor="isAttend" className="text-sm">Will you be attending?</label>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Number of Guests (including you)</label>
            <input name="total_person" type="number" min="1" className="w-full border rounded p-2" placeholder="e.g. 2" />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded hover:bg-pink-600 transition"
          >
            {loading ? 'Submitting...' : 'Submit RSVP'}
          </button>
        </form>
      </div>

      {rsvpList.length > 0 && (
        <div className="max-w-xl mx-auto mt-8 bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 text-center">Confirmed Guests</h2>
          <ul className="space-y-3">
            {rsvpList.map((rsvp: any) => (
              <li key={rsvp.id} className="border p-3 rounded text-sm">
                <p className="font-semibold">{rsvp.name}</p>
                <p>{rsvp.speech || 'No speech provided'}</p>
                <p>{rsvp.isAttend ? '✅ Attending' : '❌ Not Attending'} | {rsvp.total_person} person(s)</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
