/* eslint-disable no-unused-vars */
type tabType = number;

type HFDataType = {
	module_tag?: string | null;
	menu_group?: string | null;
	module_alias?: string | null;
	menu_type?: string | null;
	parent_id: number | null;
	site_id: number;
	name: string;
	id: number;
	link_rewrite?: string | null;
	link?: string | null;
};

type HFDataWithChildType = {
	children?: HFDataWithChildType[];
} & HFDataType;

type PrimitiveDataType = {
	name: string;
	url: string;
	children?: PrimitiveDataType[];
	tag?: string;
} & HFDataType;

type imageType = {
	mediaUrl: string;
	appName: string;
	link?: string;
};
