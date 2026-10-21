import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export async function GET(request) {
  try {
    const { data: jobs, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('status', 'active')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return Response.json({ success: true, jobs });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { title, department, location, jobType, description, requirements, userId } = body;

    const { data: job, error } = await supabase
      .from('jobs')
      .insert([
        {
          title,
          department,
          location,
          job_type: jobType,
          description,
          requirements,
          user_id: userId || null
        }
      ])
      .select()
      .single();

    if (error) throw error;
    return Response.json({ success: true, job });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}
