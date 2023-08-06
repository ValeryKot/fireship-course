import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';

// Dummy data
const posts = [
  {
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  },
  {
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    slug: 'quia-et',
    content:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    title: 'eum et est occaecati',
    slug: 'eum-et-est',
    content:
      'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
  },
];

export async function GET() {
  const session = await getServerSession();

  if (!session) {
    // redirect or render something else
  }

  return NextResponse.json(posts);
}