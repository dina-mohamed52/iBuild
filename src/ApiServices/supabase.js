import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://tcpyramswfpysxmvhypu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRjcHlyYW1zd2ZweXN4bXZoeXB1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM4ODI5NjMsImV4cCI6MjAyOTQ1ODk2M30.6vHnY2xn_fsiQsvJjzpbX2UYY9rbbCHnzQcB0z5wziw";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase