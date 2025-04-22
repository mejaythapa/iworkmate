-- Create the contacts table
create table public.contacts (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  message text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.contacts enable row level security;

-- Create a policy that allows only insert
create policy "Allow public insert" on public.contacts
  for insert
  with check (true);

-- Create an index on created_at for better query performance
create index contacts_created_at_idx on public.contacts (created_at desc); 