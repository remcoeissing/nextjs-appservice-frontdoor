import Link from "next/link";
import { todos } from "./data";

export const revalidate = 60; // ISR: Regenerate every 60 seconds

export default function TodosPage() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Todo List</h1>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li key={todo.id} className="border rounded p-4 flex flex-col gap-2">
            <span className="font-semibold">{todo.title}</span>
            <div className="flex gap-4">
              <Link href={`/todos/${todo.id}/subtasks`} className="text-blue-600 underline">Subtasks</Link>
              <Link href={`/todos/${todo.id}/details`} className="text-blue-600 underline">Details</Link>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
