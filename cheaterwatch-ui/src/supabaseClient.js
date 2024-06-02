// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ihiiannavrwmfnujzwqe.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaWlhbm5hdnJ3bWZudWp6d3FlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxMTc0OTcsImV4cCI6MjAzMTY5MzQ5N30.V7a8ClmI3E0LEPrlJB9HLm8pzbT6Q5lf6a-vThiORWg';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);