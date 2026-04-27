import Link from "next/link";

export default function LandingPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Learn Bengali for Rachel</h1>
      <p className="text-slate-700">
        A simple daily Bengali app focused on practical conversation, confidence, and quick wins.
      </p>
      <Link className="inline-flex rounded bg-indigo-600 px-4 py-2 text-white" href="/learn">
        Start Unit 1
      </Link>
    </section>
  );
}
