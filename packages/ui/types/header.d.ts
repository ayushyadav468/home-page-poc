type HeaderDataType = {
	name: string;
	link_rewrite?: string;
	children?: HeaderDataType[];
	module_tag?: string;
	module_alias?: string;
};

type linksComponentDataType = {
	headerData: HeaderDataType[];
	showMegaDropDown: boolean;
	showLinks: boolean;
};

type HeaderProps = {
	altName: string;
	isLoggedIn: boolean;
	isMobile: boolean;
	logoHeight: number;
	logoUrl: string;
	logoWidth: number;
	pageName: string;
	profileImgUrl?: string;
	linksComponentData: linksComponentDataType;
	searchComponentData: SearchBarPropsType;
	noAvatarPages: string[];
	initTabs: TabsType[];
	isShowBottomNav: boolean;
	userName: string;
	loginRegisterActionHandler?: LoginRegisterHandlerType;
	profileScore?: number;
	accountListData: ListItemType[];
	companyListData: ListItemType[];
	userIconsData: UserMenuDataProps[];
	isSaved?: boolean;
	saveJobHandler?: () => void;
	className?: string;
};

type LoginRegisterHandlerType = {
	loginBtnClick?: () => void;
	registerBtnClick?: () => void;
	employersLoginBtnClick?: () => void;
};

type AvatarProps = {
	width?: number;
	height?: number;
	fontSize?: number;
	imageUrl?: string;
	name: string;
	profileScore?: number;
	showProgress?: boolean;
};

// ------------ SearchBar Component Types --------------------
type SearchBarPropsType = {
	isMobile: boolean;
	showSearchBar: boolean;
	topLocations: { id: string | number; name: string }[];
	expYearList: { id: string | number; name: string }[];
	recentSearches: { id: string | number; name: string }[];
	prefilledDataforLocation: string;
	processSearchedData: (params: {
		query: string;
		location: string;
		exp: string;
	}) => void;
	callAutoFillAPI: (params: {
		name: string;
		value: string;
		_cb: ({ value }: { value: string }) => void;
	}) => void;
	recentSearchSelectHandler: (value: string) => void;
};

type AutoFillOptionsType = {
	SKILLS: string[];
	LOCATION: string[];
	EXPERIENCE: { id: string | number; name: string }[];
};

type InputValuesType = {
	SKILLS: string;
	LOCATION: string;
	EXPERIENCE: string;
};
