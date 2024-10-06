export type TUser = {
	_id: string;
	name: string;
	surname: string;
	phoneNumber: string;
	profilePhoto: string;
	balance: number;
	frozenBalance: number;
	signInAttempts: number;
	role: "owner" | "member";
	orders: [];
	wishlist: [];
	products: [];
	lastEnteredAt: string;
	__v: 0;
};

export type IRoute = {
	title: string;
	path: string;
	element: JSX.Element;
	id: number;
	isPrivate?: boolean;
	hasChild?: boolean;
	children?: IRoute[];
};

