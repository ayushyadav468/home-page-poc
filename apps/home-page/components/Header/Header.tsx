'use client';

import {
  Account,
  ActiveAccount,
  ActiveBriefCase,
  ActiveCompass,
  ActiveHome,
  AutoApply,
  BarChartSquare,
  Bell,
  BriefCase,
  Cart,
  Compass,
  Download,
  Feedback,
  Header,
  Home,
  Logout,
  ManageAlerts,
  Message,
  OpenBook,
  ResumeBuilder,
  Setting,
  SkillTest,
  Subsription,
  Zuno,
} from '@monsterindia/global-ui-components';
// import { headers } from "next/headers";
import React from 'react';

type HeaderDataType = {
  name: string;
  link_rewrite?: string;
  children?: HeaderDataType[];
  module_tag?: string;
  module_alias?: string;
};

type HeaderProps = {
  headerData: HeaderDataType[];
};

const getCookie = (cookieName: string): string | undefined => {
  const cookie: {[key: string]: string} = {};
  document.cookie.split(';').forEach((el) => {
    const [key, value] = el.split('=');
    cookie[key.trim()] = value;
  });
  return cookie[cookieName];
};

const getHeaderProps = (headerData: HeaderDataType[]) => {
  const initTabs = [
    {
      name: 'Home',
      url: '/',
      icon: Home,
      activeIcon: ActiveHome,
      isActive: 'Home',
      target: '_self',
    },
    {
      name: 'Jobs',
      url: false
        ? '/seeker/dashboard?bottomNav=true'
        : '/srp/results?query=""&quickApplyJobs=true',
      icon: BriefCase,
      activeIcon: ActiveBriefCase,
      isActive: false,
      target: '_self',
    },
    {
      name: 'Services',
      url: '',
      icon: Compass,
      activeIcon: ActiveCompass,
      isActive: false,
      target: '_self',
    },
    {
      name: 'Login',
      url: '/rio/login',
      icon: Account,
      activeIcon: ActiveAccount,
      isActive: false,
      target: '_self',
    },
  ];

  const accountList = [
    {
      name: 'Manage Job Alert',
      iconComponent: ManageAlerts,
      link: '/seeker/job-alert-list',
    },
    {
      name: 'Auto Apply',
      iconComponent: AutoApply,
      link: '/seeker/dashboard?application_source=Organic&activeTab=applied',
      addNewTag: true,
    },
    {
      name: 'Profile Performance',
      iconComponent: BarChartSquare,
      link: '/seeker/profile-performance',
    },
    {
      name: 'My Assessments',
      iconComponent: SkillTest,
      link: '/skillyst/dashboard',
    },
    {
      name: 'My Subscriptions',
      iconComponent: Subsription,
      link: '/web/en/my-subscriptions',
    },
    {
      name: 'Settings',
      iconComponent: Setting,
      link: '/seeker/settings',
    },
  ];

  let companyList = [
    {
      name: 'Feedback',
      iconComponent: Feedback,
      link: '/account/feedback',
    },
    {
      name: 'Download App',
      iconComponent: Download,
      imagesUrls: [
        {
          mediaUrl:
            'https://media.foundit.in/trex/public/theme_3/src/assets/images/global/appstore.svg',
          name: 'App Store',
          link: 'https://apps.apple.com/in/app/foundit-monster-job-search/id525775161',
        },
        {
          mediaUrl:
            'https://media.foundit.in/trex/public/theme_3/src/assets/images/global/playstore.svg',
          name: 'Play Store',
          link: 'https://play.google.com/store/apps/details?id=com.monsterindia.seeker.views&referrer=utm_source%3DWebsite%26utm_campaign%3DJobs-App',
        },
      ],
    },
    {
      name: 'Logout',
      iconComponent: Logout,
      link: '/rio/sign-out',
    },
  ];

  const mobileCompanyList = [
    {
      name: 'Resume Builder',
      iconComponent: ResumeBuilder,
      link: '/seeker/resume-builder',
    },
    {
      name: 'Skill Tests',
      iconComponent: SkillTest,
      link: '/skillyst/assessments',
    },
    {
      name: 'Internships by Zuno',
      iconComponent: Zuno,
      link: '/zuno',
    },
    {
      name: 'Courses',
      iconComponent: OpenBook,
      link: '/career-services/elearning',
      addNewTag: true,
    },
  ];

  const userIconsData = [
    {
      href: '',
      count: 0,
      icon: <Message width={24} height={24} />,
    },
    {
      href: '/seeker/notifications',
      count: 9,
      icon: <Bell width={24} height={24} />,
    },
    {
      href: '/web/en/cart',
      count: 0,
      icon: <Cart width={24} height={24} />,
    },
  ];

  const headerProps = {
    linksComponentData: {
      headerData: headerData,
      showMegaDropDown: false,
      showLinks: true,
    },
    isLoggedIn: false,
    altName: 'foundit Logo',
    logoUrl: `//media.foundit.in/trex/public/theme_3/src/assets/images/header/companyLogo.svg`,
    isMobile: false,
    logoHeight: 24,
    pageName: 'Home',
    noAvatarPages: ['Account'],
    searchComponentData: {
      topLocations: [],
      expYearList: [],
      recentSearches: [],
      isMobile: false,
      showSearchBar: false,
      prefilledDataforLocation: '',
      processSearchedData: () => {},
      callAutoFillAPI: () => {},
      recentSearchSelectHandler: () => {},
    },
    isShowBottomNav: false,
    userName: '',
    loginRegisterActionHandler: {},
    profileScore: 80,
    initTabs: initTabs,
    userIconsData: userIconsData,
    accountListData: accountList,
    companyListData: companyList,
  };

  return headerProps;
};

export const HeaderComponent: React.FC<HeaderProps> = ({headerData}) => {
  const headerLinks = getHeaderProps(headerData);

  return <Header {...headerLinks} />;
};
