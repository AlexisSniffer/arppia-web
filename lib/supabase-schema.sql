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
CREATE POLICY "Allow anon select" ON contacts FOR SELECT TO anon USING (true);

-- Permitir lectura total a usuarios autenticados (admin)
CREATE POLICY "Enable read for authenticated users only" ON contacts FOR SELECT TO authenticated USING (true);

-- TABLA DE COMENTARIOS
CREATE TABLE contact_comments (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  contact_id BIGINT REFERENCES contacts(id) ON DELETE CASCADE,
  author_role TEXT CHECK (author_role IN ('user', 'agent')) DEFAULT 'user',
  comment TEXT NOT NULL
);

ALTER TABLE contact_comments ENABLE ROW LEVEL SECURITY;

-- Permitir lectura a cualquiera que conozca el ticket (simplificado: cualquier anon por ahora, idealmente filtrar por contact_id)
CREATE POLICY "Allow anon select comments" ON contact_comments FOR SELECT TO anon USING (true);

-- Permitir insertar comentarios al usuario anon
CREATE POLICY "Allow anon insert comments" ON contact_comments FOR INSERT TO anon WITH CHECK (author_role = 'user');

-- Permitir lectura/escritura total a admin
CREATE POLICY "Admin full access" ON contact_comments FOR ALL TO authenticated USING (true);
