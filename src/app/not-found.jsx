import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-background text-center text-foreground">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <p className="text-lg mt-4 text-muted-foreground">Page Not Found</p>

      <Link
        href="/"
        className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg shadow hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
