import { PUBLIC_BACKEND_URL } from '$env/static/public';

export type LatestActivity =
  | {
      type: 'pull_request';
      prTitle: string;
      prNumber: number;
      time: string;
      prUrl: string;
      authorUsername: string;
      authorPfpUrl: string;
      authorUrl: string;
      repoName: string;
      repoOrg: string;
      repoUrl: string;
    }
  | {
      type: 'commit';
      commitMessage: string;
      commitUrl: string;
      time: string;
      authorUsername: string;
      authorPfpUrl: string;
      authorUrl: string;
      repoName: string;
      repoOrg: string;
      repoUrl: string;
    };

export type Contributor = {
  username: string;
  latestCommitDate: string;
  pfpUrl: string;
  accLink: string;
  isTechLead: boolean;
};

export type LastUpdated = {
  updatedDate: string;
  author: string;
  authorURL: string;
};

export type ApiResponse<T> = {
  status: number;
  body: T;
};

const apiFetch = async <T>(path: string, fetchFn: typeof fetch = fetch): Promise<ApiResponse<T>> => {
  const response = await fetchFn(`${PUBLIC_BACKEND_URL}${path}`, {
    headers: {
      'x-app-source': 'svelte',
      'x-miku': 'hai'
    }
  });
  const body = (await response.json()) as T;
  return { status: response.status, body };
};

export const fetchLatestActivity = (fetchFn?: typeof fetch) =>
  apiFetch<LatestActivity[]>('/github/latest', fetchFn);

export const fetchContributors = (repoIds: number[], fetchFn?: typeof fetch) =>
  apiFetch<Contributor[]>(`/github/contributors?repoIds=${repoIds.join(',')}`, fetchFn);

export const fetchLastUpdated = (repoIds: number[], fetchFn?: typeof fetch) =>
  apiFetch<LastUpdated | Record<string, never>>(
    `/github/lastUpdated?repoIds=${repoIds.join(',')}`,
    fetchFn
  );
