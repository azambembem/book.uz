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
export type TAuthor = {
	_id: string;
	fullName: string;
	link: string;
	bookCount: number;
	biography: string;
	dateOfbirth: string;
	dateOfdeath: string;
	imgUrl: string;
	createdAt: string;
	updatedAt: string;
	__v: 0;
}
