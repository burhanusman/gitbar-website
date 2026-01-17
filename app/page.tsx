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
    <div className="min-h-screen bg-[#050507]">
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
