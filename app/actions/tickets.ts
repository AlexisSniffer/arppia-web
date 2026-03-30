'use server';

import { supabase } from '@/lib/supabase';

export async function getTicketStatus(ticketS: string) {
  try {
    // 1. Fetch the ticket
    const { data: ticket, error: ticketError } = await supabase
      .from('contacts')
      .select('*')
      .eq('ticket', ticketS)
      .single();

    if (ticketError || !ticket) {
      return { success: false, error: 'Ticket no encontrado. Verifica el código e intenta de nuevo.' };
    }

    // 2. Fetch comments
    const { data: comments, error: commentsError } = await supabase
      .from('contact_comments')
      .select('*')
      .eq('contact_id', ticket.id)
      .order('created_at', { ascending: true });

    if (commentsError) {
      console.error('Comments error:', commentsError);
    }

    return { 
      success: true, 
      ticket, 
      comments: comments || [] 
    };
  } catch (err) {
    console.error('Fetch error:', err);
    return { success: false, error: 'Ocurrió un error al consultar el ticket.' };
  }
}

export async function addTicketComment(contactId: number, comment: string) {
  try {
    const { data, error } = await supabase
      .from('contact_comments')
      .insert({
        contact_id: contactId,
        author_role: 'user',
        comment: comment
      })
      .select();

    if (error) {
      return { success: false, error: 'Error al enviar el comentario.' };
    }

    return { success: true, comment: data[0] };
  } catch (err) {
    return { success: false, error: 'Error de conexión.' };
  }
}
