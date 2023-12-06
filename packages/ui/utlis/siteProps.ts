import {ENV, REGION} from './envUrls';

export type SitePropsType = {
  api_url: string;
  site_map: string;
  domain: string;
  media_url: string;
  env?: string;
};

export const getSiteProps = (url?: string | null): SitePropsType | null => {
  //rfs prod qa1
  try {
    if (url) {
      if (/local/.test(url)) {
        const info = (ENV as any).qa1.regions.india;
        return info;
      } else {
        const [env, ...rest] = url.split('.'); //env - q1 foundi.in
        const region = rest.join('.'); //foundi.in
        const info: SitePropsType = (ENV as any)[env === 'www' ? 'prod' : env] //ENV[qa1].regions[india]
          .regions[(REGION as any)[region]];
        (info as any)[env] = env;
        return info;
      }
    } else {
      return {
        api_url: 'https://qa1.foundit.in',
        site_map: 'rexmonster',
        domain: 'qa1.foundit.in',
        media_url: 'media.foundit.in',
      };
    }
  } catch (e) {
    console.log('Error: - ', e);
    return {
      api_url: 'https://qa1.foundit.in',
      site_map: 'rexmonster',
      domain: 'qa1.foundit.in',
      media_url: 'media.foundit.in',
    };
  }
};
