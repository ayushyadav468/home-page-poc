type ListItemType = {
	addNewTag?: boolean;
	iconComponent: React.ReactComponentElement;
	imagesUrls?: imageType[];
	link?: string;
	name: string;
};

type MenuItemType = {
	item: ListItemType;
};

type UserMenuProps = {
	profileName: string;
	profileScore?: number;
	accountListData: ListItemType[];
	companyListData: ListItemType[];
	profileImageUrl?: string;
	twoColumns?: boolean;
};

type UserMenuDataProps = {
	href: string;
	icon: SVGProps<SVGSVGElement>;
	count: number;
};
