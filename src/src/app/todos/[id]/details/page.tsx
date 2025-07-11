import { todos } from "../../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR

export default async function DetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) return notFound();
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">{todo.title} - Details</h1>
      <p className="mb-4">{todo.description}</p>
      <Link href={`/todos`} className="text-blue-600 underline">Back to Todos</Link>
    </main>
  );
}
