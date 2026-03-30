'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { useSearchParams } from 'next/navigation'
import {
  Search,
  Ticket,
  Calendar,
  MessageSquare,
  Send,
  Loader2,
  CheckCircle2,
  Clock,
  Play,
  Mail
} from 'lucide-react'
import {
  getTicketStatus,
  addTicketComment,
  getTicketsByEmail
} from '@/app/actions/tickets'

const TicketsPage = () => {
  const searchParams = useSearchParams()
  const initialId = searchParams.get('id') || ''

  const [lookupMethod, setLookupMethod] = useState<'id' | 'email'>('id')
  const [ticketId, setTicketId] = useState(initialId)
  const [email, setEmail] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const [ticketData, setTicketData] = useState<any>(null)
  const [ticketsList, setTicketsList] = useState<any[]>([])
  const [error, setError] = useState('')
  const [newComment, setNewComment] = useState('')
  const [isCommenting, setIsCommenting] = useState(false)

  React.useEffect(() => {
    if (initialId) {
      handleSearch(null as any)
    }
  }, [initialId])

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault()

    setError('')
    setIsSearching(true)
    setTicketData(null)
    setTicketsList([])

    if (lookupMethod === 'id') {
      const idToSearch = ticketId || initialId
      if (!idToSearch.trim()) {
        setIsSearching(false)
        return
      }
      const res = await getTicketStatus(idToSearch.trim())
      if (res.success) {
        setTicketData(res)
      } else {
        setError(res.error || 'No se pudo encontrar el ticket.')
      }
    } else {
      if (!email.trim()) {
        setIsSearching(false)
        return
      }
      const res = await getTicketsByEmail(email.trim())
      if (res.success) {
        if (res.tickets!.length === 0) {
          setError('No se encontraron tickets asociados a este correo.')
        } else if (res.tickets!.length === 1) {
          // Si solo hay uno, cargarlo directamente
          const fullRes = await getTicketStatus(res.tickets![0].ticket)
          if (fullRes.success) setTicketData(fullRes)
        } else {
          setTicketsList(res.tickets!)
        }
      } else {
        setError(res.error || 'Ocurrió un error al buscar tus tickets.')
      }
    }
    setIsSearching(false)
  }

  const loadTicket = async (ticketS: string) => {
    setIsSearching(true)
    const res = await getTicketStatus(ticketS)
    if (res.success) {
      setTicketData(res)
      setTicketsList([])
      setLookupMethod('id')
      setTicketId(ticketS)
    } else {
      setError(res.error || 'No se pudo cargar el ticket.')
    }
    setIsSearching(false)
  }

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !ticketData) return

    setIsCommenting(true)
    const res = await addTicketComment(ticketData.ticket.id, newComment)
    if (res.success) {
      setTicketData({
        ...ticketData,
        comments: [...ticketData.comments, res.comment]
      })
      setNewComment('')
    } else {
      alert(res.error)
    }
    setIsCommenting(false)
  }

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'pending':
        return {
          label: 'Pendiente',
          color: 'text-yellow-500',
          icon: Clock,
          bg: 'bg-yellow-500/10'
        }
      case 'in_progress':
        return {
          label: 'En Proceso',
          color: 'text-blue-500',
          icon: Play,
          bg: 'bg-blue-500/10'
        }
      case 'resolved':
        return {
          label: 'Resuelto',
          color: 'text-green-500',
          icon: CheckCircle2,
          bg: 'bg-green-500/10'
        }
      default:
        return {
          label: status,
          color: 'text-gray-500',
          icon: Clock,
          bg: 'bg-gray-500/10'
        }
    }
  }

  return (
    <main className="flex flex-col min-h-screen bg-black">
      <Navbar />

      <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              Sigue tu <span className="text-gradient">Proyecto</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Consulta el estado de tu mensaje usando tu número de ticket o
              correo electrónico.
            </p>
          </div>

          {/* Method Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/5 p-1 rounded-2xl inline-flex">
              <button
                onClick={() => {
                  setLookupMethod('id')
                  setError('')
                  setTicketData(null)
                  setTicketsList([])
                }}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${lookupMethod === 'id' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Por Ticket ID
              </button>
              <button
                onClick={() => {
                  setLookupMethod('email')
                  setError('')
                  setTicketData(null)
                  setTicketsList([])
                }}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${lookupMethod === 'email' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Por Correo
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="glass p-8 rounded-[3rem] mb-12 border border-white/10">
            <form
              onSubmit={handleSearch}
              className="flex flex-col md:flex-row gap-4"
            >
              <div className="relative flex-grow">
                {lookupMethod === 'id' ? (
                  <>
                    <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="text"
                      placeholder="ARP-XXXXXX"
                      value={ticketId}
                      onChange={(e) => setTicketId(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono uppercase"
                    />
                  </>
                ) : (
                  <>
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                    <input
                      type="email"
                      placeholder="tu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </>
                )}
              </div>
              <button
                disabled={isSearching}
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
              >
                {isSearching ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Search className="w-5 h-5" />
                )}
                <span>
                  {lookupMethod === 'id' ? 'Buscar Ticket' : 'Ver Mis Tickets'}
                </span>
              </button>
            </form>
            {error && (
              <p className="text-red-500 mt-4 text-center animate-pulse">
                {error}
              </p>
            )}
          </div>

          {/* Tickets List (Result of Email lookup) */}
          {ticketsList.length > 0 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h3 className="text-xl font-bold text-white mb-6">
                Hemos encontrado {ticketsList.length} tickets:
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {ticketsList.map((t) => {
                  const info = getStatusInfo(t.status)
                  const Icon = info.icon
                  return (
                    <button
                      key={t.id}
                      onClick={() => loadTicket(t.ticket)}
                      className="glass p-6 rounded-3xl border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between group text-left w-full"
                    >
                      <div className="flex items-center gap-6">
                        <div
                          className={`p-4 rounded-2xl ${info.bg} ${info.color}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-primary font-mono font-bold tracking-widest">
                            {t.ticketS}
                          </p>
                          <p className="text-white font-bold">
                            {t.project_type}
                          </p>
                          <p className="text-xs text-gray-500">
                            {new Date(t.created_at).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-xs font-bold uppercase ${info.color}`}
                        >
                          {info.label}
                        </span>
                        <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 transition-all">
                          <Play className="w-4 h-4 text-primary" />
                        </div>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Individual Ticket Detail */}
          {ticketData && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {/* Ticket Overview */}
              <div className="glass rounded-[3rem] overflow-hidden border border-white/10">
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-white/5">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <p className="text-xs text-primary font-bold uppercase tracking-widest">
                          Estado Actual
                        </p>
                        <span className="text-gray-600">|</span>
                        <p className="text-xs text-white font-mono">
                          {ticketData.ticket.ticketS}
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        {(() => {
                          const info = getStatusInfo(ticketData.ticket.status)
                          const Icon = info.icon
                          return (
                            <div
                              className={`flex items-center gap-3 px-4 py-2 rounded-full ${info.bg} ${info.color}`}
                            >
                              <Icon className="w-5 h-5" />
                              <span className="font-bold">{info.label}</span>
                            </div>
                          )
                        })()}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 uppercase font-bold mb-2">
                        Fecha de Creación
                      </p>
                      <div className="flex items-center gap-2 text-white font-medium">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span>
                          {new Date(
                            ticketData.ticket.created_at
                          ).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        Detalles del Solicitante
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">
                            Nombre
                          </p>
                          <p className="text-white text-lg">
                            {ticketData.ticket.name}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 uppercase font-bold">
                            Tipo de Proyecto
                          </p>
                          <p className="text-primary font-bold">
                            {ticketData.ticket.project_type}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-4">
                        Mensaje Original
                      </h3>
                      <p className="text-gray-400 bg-white/5 p-6 rounded-2xl italic">
                        "{ticketData.ticket.message}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Section */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <MessageSquare className="text-primary" />
                  <span>Seguimiento y Comentarios</span>
                </h3>

                <div className="space-y-4">
                  {ticketData.comments.map((comment: any) => (
                    <div
                      key={comment.id}
                      className={`max-w-[85%] rounded-[2rem] p-6 animate-in fade-in slide-in-from-right-4 duration-300 ${
                        comment.author_role === 'agent'
                          ? 'bg-primary/20 ml-0 border-l-4 border-primary'
                          : 'bg-white/5 ml-auto border-r-4 border-white/20'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${comment.author_role === 'agent' ? 'text-primary' : 'text-gray-400'}`}
                        >
                          {comment.author_role === 'agent'
                            ? 'Equipo Arppia'
                            : 'Tú'}
                        </span>
                        <span className="text-[10px] text-gray-500">
                          {new Date(comment.created_at).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-gray-200 leading-relaxed">
                        {comment.comment}
                      </p>
                    </div>
                  ))}

                  {ticketData.comments.length === 0 && (
                    <div className="text-center py-12 glass rounded-[2rem] border border-dashed border-white/10">
                      <p className="text-gray-500 italic">
                        No hay comentarios aún. Te responderemos pronto.
                      </p>
                    </div>
                  )}
                </div>

                {/* Add Comment Form */}
                <form onSubmit={handleAddComment} className="mt-12 flex gap-4">
                  <div className="relative flex-grow">
                    <textarea
                      placeholder="Escribe un mensaje para nuestro equipo..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={2}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isCommenting || !newComment.trim()}
                    className="bg-primary hover:bg-primary/90 text-white w-20 rounded-2xl flex items-center justify-center transition-all disabled:opacity-50 group"
                  >
                    {isCommenting ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    )}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TicketsPage
