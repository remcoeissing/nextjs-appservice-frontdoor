
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Welcome to the Next.js Todo App</h1>
      <Link href="/todos" className="text-blue-600 underline text-lg">
        View Todo List
      </Link>
    </main>
  );
}
