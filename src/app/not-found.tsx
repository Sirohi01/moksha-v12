import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center section-padding bg-background">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-5">🙏</div>
        <h1 className="text-4xl font-serif font-bold text-primary mb-3">
          Page Not Found
        </h1>
        <p className="text-muted text-lg mb-8">
          This page has not been found. Perhaps it was moved, or you followed a
          link that no longer exists.
        </p>
        <Button href="/" variant="primary">
          Return Home
        </Button>
      </div>
    </section>
  );
}
