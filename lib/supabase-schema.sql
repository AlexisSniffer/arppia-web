-- SQL para crear la tabla de contactos en Supabase

CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  ticket_number TEXT UNIQUE NOT NULL,
  status TEXT DEFAULT 'pending' -- pending, in_progress, resolved
);

-- Habilitar RLS si es necesario
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Permitir a cualquier usuario insertar datos (para el formulario de contacto)
CREATE POLICY "Enable insert for all" ON contacts FOR INSERT WITH CHECK (true);

-- Permitir lectura solo a usuarios autenticados o con rol específico (admin)
-- Ajusta según tus necesidades de seguridad
CREATE POLICY "Enable read for authenticated users only" ON contacts FOR SELECT USING (auth.role() = 'authenticated');
