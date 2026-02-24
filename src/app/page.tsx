import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="flex justify-end mb-8">
        <ThemeToggle />
      </div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold underline">My Website!</h1>
        <p className="mt-4 text-muted-foreground">
          Use the toggle button above to switch between light and dark themes.
        </p>
      </div>
    </div>
  );
}
