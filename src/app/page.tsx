import { Header } from "@/components/header";

export default function Home() {
  return (
    <div className="p-8  overflow-auto">
      <Header></Header>
      <div className="flex justify-end my-8">{/* <ThemeToggle /> */}</div>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold underline">My Website!</h1>
        <p className="mt-4 text-muted-foreground">
          Use the toggle button above to switch between light and dark themes.
        </p>
      </div>

      <div className="my-80 h-full bg-red-700">
        <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
        <p className="text-muted-foreground">
          This is a sample content section. The theme toggle button in the
          header allows you to switch between light and dark themes seamlessly.
        </p>
      </div>

      <div className="my-80 h-full">
        <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
        <p className="text-muted-foreground">
          This is a aaaa content section. The theme toggle button in the header
          allows you to switch between light and dark themes seamlessly.
        </p>
      </div>

      <div className="my-80 h-full">
        <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
        <p className="text-muted-foreground">
          This is a sample content section. The theme toggle button in the
          header allows you to switch between light and dark themes seamlessly.
        </p>
      </div>
    </div>
  );
}
