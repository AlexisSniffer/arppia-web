'use server'

import { supabase } from '@/lib/supabase'

// Simple ticket generator
const generateTicket = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let ticket = 'ARP-'
  for (let i = 0; i < 6; i++) {
    ticket += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return ticket
}

export async function submitContactForm(formData: {
  name: string
  email: string
  projectType: string
  message: string
}) {
  try {
    const ticketNumber = generateTicket()

    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          project_type: formData.projectType,
          message: formData.message,
          ticket_number: ticketNumber,
          status: 'pending'
        }
      ])
      .select()

    if (error) {
      console.error('Supabase Error:', error)
      return {
        success: false,
        error:
          'Ocurrió un error al enviar el mensaje. Revisa tu conexión o inténtalo más tarde.'
      }
    }

    return {
      success: true,
      ticketNumber,
      message:
        'Tu mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto contigo.'
    }
  } catch (err) {
    console.error('Submission Error:', err)
    return {
      success: false,
      error: 'Hubo un problema procesando tu solicitud.'
    }
  }
}
