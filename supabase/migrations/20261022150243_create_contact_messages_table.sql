/*
# Create contact_messages table for Usha Doodhwalli website

1. New Tables
- `contact_messages`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's name
  - `email` (text, not null) — sender's email
  - `phone` (text, optional) — sender's phone number
  - `message` (text, not null) — the message content
  - `created_at` (timestamptz, defaults to now)
2. Security
- Enable RLS on `contact_messages`.
- Grant INSERT to `anon, authenticated` so visitors can submit the contact form without signing in.
- Grant SELECT to `authenticated` so the site owner can read messages (no anon read — visitors should not see other people's messages).
- Allow anon + authenticated INSERT (public contact form).
- Allow authenticated SELECT (owner reads messages).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON contact_messages TO anon, authenticated;
GRANT SELECT ON contact_messages TO authenticated;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_messages;
CREATE POLICY "anon_insert_contact" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "auth_select_contact" ON contact_messages;
CREATE POLICY "auth_select_contact" ON contact_messages FOR SELECT
  TO authenticated USING (true);
