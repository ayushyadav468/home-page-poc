import { getSiteProps } from "@/utils";

const THOR = "/thor";
const ROBIN = "/robin";
const FALCON = "/falcon";
const RAVEN = "/raven";

// import { headers } from "next/headers";

// const headerList = headers();
// const host = window.location.hostname;
// const host = headerList.get("host");

const siteProps = getSiteProps("qa1.foundit.in");
const apiUrl = siteProps?.api_url || null;
const domain = siteProps?.domain || null;
const siteMap = siteProps?.site_map || null;

export const API_ENDPOINT = {
  robinApi: {
    cart: apiUrl + `${ROBIN}/api/public/users/v1/cart/count`,
  },
  thorApi: {
    headerLinks:
      apiUrl +
      `${THOR}/api/public/sites/v1/load-module?site=${siteMap}&tenant=reactcore&category=react-msite&lang=en&domain=${domain}&subalias=MODULE_HEADER_MSITE_REACT_SSR&alias=HOOK_HEADER`,
    bannerList:
      apiUrl +
      `${THOR}/api/public/sites/v1/load-module?site=${siteMap}&tenant=reactcore&category=react-msite&lang=en&domain=${domain}&subalias=MODULE_HOME_PRODUCT_BANNER&alias=HOOK_AFTER_HERO_SECTION`,
    categoryList:
      apiUrl +
      `${THOR}/api/public/sites/v1/load-module?site=${siteMap}&tenant=reactcore&category=react-msite&lang=en&domain=${domain}&subalias=MODULE_HOME_POPULAR_CATEGORY&alias=HOOK_AFTER_HERO_SECTION`,
    featuredCompanies:
      apiUrl +
      `${THOR}/api/public/sites/v1/load-module?site=${siteMap}&tenant=reactcore&category=react-msite&lang=en&domain=${domain}&subalias=MODULE_HOME_FEATURED_COMPANY&alias=HOOK_AFTER_HERO_SECTION`,
  },
};
