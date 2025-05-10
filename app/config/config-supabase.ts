import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xhpugefhcgqjkanhmanu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhocHVnZWZoY2dxamthbmhtYW51Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4ODM1MjEsImV4cCI6MjA2MjQ1OTUyMX0.xTtQoriMeofCpAnaAd6c9IZbVI1pOzGt6nYQbgVEOHI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
