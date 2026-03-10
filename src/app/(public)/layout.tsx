import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-black relative">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      {/* Watermark logo - rendered above content with pointer-events-none */}
      <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
        <Image
          src="/logo-watermark.png"
          alt=""
          width={750}
          height={750}
          className="opacity-[0.05] select-none invert mix-blend-screen"
          priority
        />
      </div>
    </div>
  );
}
