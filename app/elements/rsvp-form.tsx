// app/page.tsx (Server Component by default)
import React from 'react';
import { supabase } from '../config/config-supabase';
// ✅ Server Action must be outside the component
export async function RSVPAction(formData: FormData) {
    'use server';

    const name = formData.get('name') as string;

    if (!name) {
        throw new Error('Name is required');
    }

    const { data, error } = await supabase
        .from('Rsvp')
        .insert([{ name }])
        .select();

    if (error) {
        console.error('Supabase insert error:', error.message);
        throw new Error('Failed to save RSVP');
    }

    console.log(`Inserted RSVP: ${JSON.stringify(data)}`);
}

export default function Home() {
    return (
        <form action={RSVPAction} className="bg-white min-h-screen p-4">
            <input name="name" className="border p-2 mr-2" placeholder="Enter your name" />
            <button type="submit" className="bg-blue-500 text-white p-2">Submit</button>
        </form>
    );
}
