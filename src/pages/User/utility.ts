import { AxiosResponse } from 'axios';
import { IRepository, IUser } from '../../interfaces';

export function getUserFromResponse(response: AxiosResponse<IUser>): IUser {
  return response.data;
}

export function getRepositoriesFromResponse(response: AxiosResponse<IRepository[]>,): IRepository[] {
  return response.data;
}

function parseLinkHeader(header: string) {
  if (!header || !header.length) {
    return null;
  }

  const parts = header.split(',');
  const links = {} as { [index: string]: string };

  for (let i = 0; i < parts.length; i += 1) {
    const section = parts[i].split(';');
    if (section.length !== 2) {
      throw new Error("section could not be split on ';'");
    }
    const url = section[0].replace(/<(.*)>/, '$1').trim();
    const name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  }
  return links;
}

export function getStarsCountFromResponse(response: AxiosResponse): string {
  const parsedLinks = parseLinkHeader(response?.headers.link);

  let totalStars = '0';

  if (parsedLinks) {
    const params = new URLSearchParams(parsedLinks.last);
    totalStars = params.get('page') as string;
  }

  return totalStars;
}

export function sortRepositories(a: IRepository, b: IRepository): number {
  if (a.updated_at < b.updated_at) {
    return 1;
  }
  if (a.updated_at > b.updated_at) {
    return -1;
  }
  return 0;
}

export function filterRepositories(repository: IRepository): boolean {
  return Boolean(repository.language);
}
