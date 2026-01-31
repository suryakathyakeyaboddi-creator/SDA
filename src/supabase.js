import { createClient } from '@supabase/supabase-js';

// REPLACE THESE WITH YOUR ACTUAL SUPABASE PROJECT CREDENTIALS
const supabaseUrl = 'https://cdieiwfgcpepeopsdpij.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkaWVpd2ZnY3BlcGVvcHNkcGlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njk3MzgxNTgsImV4cCI6MjA4NTMxNDE1OH0.yCJfzaZMFXf6CeFifm5kTknSX8YAdisigW4MybYjkok';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
