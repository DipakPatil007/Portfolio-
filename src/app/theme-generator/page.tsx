import ThemeGeneratorForm from '@/components/theme/theme-generator-form';

export default function ThemeGeneratorPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16 lg:py-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
          AI Theme Generator
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Craft a unique visual identity for your portfolio.
        </p>
      </header>
      <ThemeGeneratorForm />
    </div>
  );
}
