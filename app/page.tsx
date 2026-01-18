import {
  Navigation,
  Hero,
  Footer,
} from '@/components';
import { getLatestRelease } from '@/lib/github';

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0a0a0a]">
      <div className='absolute top-0 left-0 w-full z-50'>
        <Navigation />
      </div>
      <main className="h-full w-full">
        <Hero
          version={release.version}
          dmgUrl={release.dmgUrl}
        />
      </main>
      {/* Footer hidden or integrated since user wants non-scrollable one-page vibe */}
    </div>
  );
}
