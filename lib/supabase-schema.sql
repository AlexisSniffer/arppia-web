-- SQL para crear la tabla de contactos en Supabase

CREATE TYPE contact_status AS ENUM ('pending', 'in_progress', 'resolved');

CREATE TABLE contacts (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  project_type TEXT NOT NULL,
  message TEXT NOT NULL,
  ticket TEXT UNIQUE NOT NULL,
  status contact_status DEFAULT 'pending'
);

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_contacts_updated_at
BEFORE UPDATE ON contacts
FOR EACH ROW
EXECUTE PROCEDURE update_updated_at_column();

-- Habilitar RLS si es necesario
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Permitir a cualquier usuario no autenticado (anon) insertar datos
CREATE POLICY "Allow anon insert" ON contacts FOR INSERT TO anon WITH CHECK (true);

-- Permitir a cualquier usuario no autenticado (anon) leer para confirmar la inserción
-- Se recomienda ajustar en producción, por ahora permite el select() post-insert
CREATE POLICY "Allow anon select" ON contacts FOR SELECT TO anon USING (true);

-- Permitir lectura total a usuarios autenticados (admin)
CREATE POLICY "Enable read for authenticated users only" ON contacts FOR SELECT TO authenticated USING (true);
