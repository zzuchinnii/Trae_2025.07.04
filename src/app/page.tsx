import HeroSection from '@/components/ui/HeroSection';
import SmartSelection from '@/components/ui/SmartSelection';
import BottomNavigation from '@/components/ui/BottomNavigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50 pb-20">
      <HeroSection />
      <SmartSelection />
      <BottomNavigation />
    </main>
  );
}