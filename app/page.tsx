import {
  Navigation,
  Hero,
  AIIntegration,
  ProductDemo,
  FeatureGrid,
  Installation,
  SocialProof,
  Footer,
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navigation />
      <main>
        <Hero />
        <AIIntegration />
        <ProductDemo />
        <FeatureGrid />
        <Installation />
        <SocialProof />
      </main>
      <Footer />
    </div>
  );
}
