export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          full_name: string | null
          email: string | null
          pi_username: string | null
          role: string | null
        }
        Insert: {
          id: string
          created_at?: string
          full_name?: string | null
          email?: string | null
          pi_username?: string | null
          role?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          full_name?: string | null
          email?: string | null
          pi_username?: string | null
          role?: string | null
        }
      }
    }
  }
}
