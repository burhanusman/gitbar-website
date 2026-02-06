export interface GitHubRelease {
  version: string;
  dmgUrl: string;
  releasesUrl: string;
}

export async function getLatestRelease(): Promise<GitHubRelease> {
  const fallback: GitHubRelease = {
    version: 'v1.0.2',
    dmgUrl: 'https://github.com/burhanusman/gitbar/releases/latest/download/GitBar.dmg',
    releasesUrl: 'https://github.com/burhanusman/gitbar/releases/latest',
  };

  try {
    const res = await fetch(
      'https://api.github.com/repos/burhanusman/gitbar/releases/latest',
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
        },
        next: { revalidate: 300 }, // Revalidate every 5 minutes
      }
    );

    if (!res.ok) {
      console.error('Failed to fetch GitHub release:', res.status);
      return fallback;
    }

    const data = await res.json();
    const version = data.tag_name || fallback.version;

    // Find the .dmg asset
    const dmgAsset = data.assets?.find(
      (asset: { name: string }) => asset.name.endsWith('.dmg')
    );

    return {
      version,
      dmgUrl: dmgAsset?.browser_download_url || fallback.dmgUrl,
      releasesUrl: data.html_url || fallback.releasesUrl,
    };
  } catch (error) {
    console.error('Error fetching GitHub release:', error);
    return fallback;
  }
}
