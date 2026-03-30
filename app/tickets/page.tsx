'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useSearchParams } from 'next/navigation';
import { Search, Ticket, Calendar, MessageSquare, Send, Loader2, CheckCircle2, Clock, Play } from 'lucide-react';
import { getTicketStatus, addTicketComment } from '@/app/actions/tickets';

const TicketsPage = () => {
    const searchParams = useSearchParams();
    const initialId = searchParams.get('id') || '';
    
    const [ticketId, setTicketId] = useState(initialId);
    const [isSearching, setIsSearching] = useState(false);
    const [ticketData, setTicketData] = useState<any>(null);
    const [error, setError] = useState('');
    const [newComment, setNewComment] = useState('');
    const [isCommenting, setIsCommenting] = useState(false);

    React.useEffect(() => {
        if (initialId) {
            handleSearch(null as any);
        }
    }, [initialId]);

    const handleSearch = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        const idToSearch = ticketId || initialId;
        if (!idToSearch.trim()) return;
        
        setIsSearching(true);
        setError('');
        setTicketData(null);

        const res = await getTicketStatus(ticketId.trim());
        if (res.success) {
            setTicketData(res);
        } else {
            setError(res.error || 'No se pudo encontrar el ticket.');
        }
        setIsSearching(false);
    };

    const handleAddComment = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim() || !ticketData) return;

        setIsCommenting(true);
        const res = await addTicketComment(ticketData.ticket.id, newComment);
        if (res.success) {
            setTicketData({
                ...ticketData,
                comments: [...ticketData.comments, res.comment]
            });
            setNewComment('');
        } else {
            alert(res.error);
        }
        setIsCommenting(false);
    };

    const getStatusInfo = (status: string) => {
        switch (status) {
            case 'pending': return { label: 'Pendiente', color: 'text-yellow-500', icon: Clock, bg: 'bg-yellow-500/10' };
            case 'in_progress': return { label: 'En Proceso', color: 'text-blue-500', icon: Play, bg: 'bg-blue-500/10' };
            case 'resolved': return { label: 'Resuelto', color: 'text-green-500', icon: CheckCircle2, bg: 'bg-green-500/10' };
            default: return { label: status, color: 'text-gray-500', icon: Clock, bg: 'bg-gray-500/10' };
        }
    };

    return (
        <main className="flex flex-col min-h-screen bg-black">
            <Navbar />
            
            <section className="pt-32 pb-24 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Text */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
                            Sigue tu <span className="text-gradient">Proyecto</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Introduce tu número de ticket para verificar el estado de tu mensaje y ver los comentarios de nuestro equipo.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="glass p-8 rounded-[3rem] mb-12 border border-white/10">
                        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
                            <div className="relative flex-grow">
                                <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-5 h-5" />
                                <input 
                                    type="text" 
                                    placeholder="ARP-XXXXXX" 
                                    value={ticketId}
                                    onChange={(e) => setTicketId(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-12 pr-4 py-4 text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all font-mono uppercase"
                                />
                            </div>
                            <button 
                                disabled={isSearching}
                                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center space-x-2 transition-all disabled:opacity-50"
                            >
                                {isSearching ? <Loader2 className="w-5 h-5 animate-spin" /> : <Search className="w-5 h-5" />}
                                <span>Buscar Ticket</span>
                            </button>
                        </form>
                        {error && <p className="text-red-500 mt-4 text-center animate-pulse">{error}</p>}
                    </div>

                    {/* Result Display */}
                    {ticketData && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {/* Ticket Overview */}
                            <div className="glass rounded-[3rem] overflow-hidden border border-white/10">
                                <div className="p-8 lg:p-12">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 pb-8 border-b border-white/5">
                                        <div>
                                            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-2">Estado Actual</p>
                                            <div className="flex items-center gap-4">
                                                {(() => {
                                                    const info = getStatusInfo(ticketData.ticket.status);
                                                    const Icon = info.icon;
                                                    return (
                                                        <div className={`flex items-center gap-3 px-4 py-2 rounded-full ${info.bg} ${info.color}`}>
                                                            <Icon className="w-5 h-5" />
                                                            <span className="font-bold">{info.label}</span>
                                                        </div>
                                                    )
                                                })()}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-xs text-gray-500 uppercase font-bold mb-2">Fecha de Creación</p>
                                            <div className="flex items-center gap-2 text-white font-medium">
                                                <Calendar className="w-4 h-4 text-primary" />
                                                <span>{new Date(ticketData.ticket.created_at).toLocaleDateString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">Detalles del Solicitante</h3>
                                            <div className="space-y-4">
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-bold">Nombre</p>
                                                    <p className="text-white text-lg">{ticketData.ticket.name}</p>
                                                </div>
                                                <div>
                                                    <p className="text-xs text-gray-500 uppercase font-bold">Tipo de Proyecto</p>
                                                    <p className="text-primary font-bold">{ticketData.ticket.project_type}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-4">Mensaje Original</h3>
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
                                            className={`max-w-[85%] rounded-[2rem] p-6 ${
                                                comment.author_role === 'agent' 
                                                ? 'bg-primary/20 ml-0 border-l-4 border-primary' 
                                                : 'bg-white/5 ml-auto border-r-4 border-white/20'
                                            }`}
                                        >
                                            <div className="flex justify-between items-center mb-2">
                                                <span className={`text-xs font-bold uppercase tracking-widest ${comment.author_role === 'agent' ? 'text-primary' : 'text-gray-400'}`}>
                                                    {comment.author_role === 'agent' ? 'Equipo Arppia' : 'Tú'}
                                                </span>
                                                <span className="text-[10px] text-gray-500">
                                                    {new Date(comment.created_at).toLocaleString()}
                                                </span>
                                            </div>
                                            <p className="text-gray-200 leading-relaxed">{comment.comment}</p>
                                        </div>
                                    ))}

                                    {ticketData.comments.length === 0 && (
                                        <div className="text-center py-12 glass rounded-[2rem] border border-dashed border-white/10">
                                            <p className="text-gray-500 italic">No hay comentarios aún. Te responderemos pronto.</p>
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
                                        {isCommenting ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default TicketsPage;
