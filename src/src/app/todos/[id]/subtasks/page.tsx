import { todos } from "../../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR

export default async function SubtasksPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const todo = todos.find((t) => t.id === id);
  if (!todo) return notFound();
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-xl font-bold mb-4">Subtasks for: {todo.title}</h1>
      <ul className="list-disc pl-6 space-y-2">
        {todo.subtasks.map((sub) => (
          <li key={sub.id} className={sub.done ? "line-through text-gray-400" : ""}>
            {sub.title}
          </li>
        ))}
      </ul>
      <Link href={`/todos`} className="block mt-6 text-blue-600 underline">Back to Todos</Link>
    </main>
  );
}
