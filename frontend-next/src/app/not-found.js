import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-[#207bff] mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page non trouvee</p>
      <Link href="/home" className="bg-[#207bff] text-white px-6 py-3 rounded-lg hover:bg-[#1a62cc] transition-colors">
        Retour a l&apos;accueil
      </Link>
    </div>
  );
}
