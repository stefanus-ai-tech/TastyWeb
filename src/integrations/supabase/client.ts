// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://hhhzupqsxxlgneuphqwd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhoaHp1cHFzeHhsZ25ldXBocXdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4NzkwNjAsImV4cCI6MjA1MDQ1NTA2MH0.Jf9Z7qcP4jeR4ceEQVw0bdg0qebQnY4xvsiBqGMwreE";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);