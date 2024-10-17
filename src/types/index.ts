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
};

export type TNews = {
	_id: string;
	content: string;
	imgUrl: string;
	isRead: boolean;
	readCount: number;
	title: string;
	type: string;
	createdAt: string;
	updatedAt: string;

};
export type IBook = {
	_id: string;
	name: string;
	genre: {
		_id: string;
        name: string;
		imgUrl: string;
	};
	author: {
		_id: string;
        fullName: string;
        imgUrl: string | null;
	};
	amount: number;
	bookPrice: number;
	language: string;
	cover: "hard" | "soft";
	discount: number;
	hasDiscount: boolean;
	description: string;
	numberOfPage: number;
	state: "new" | "old";
	year: number;
	barCode: string;
	imgUrl: string;
	additionalImages: string [];
	rateCount: number;
	rating: number;
	soldBookCount: number;
	createdAt: string;
	updatedAt: string;
	link: string;
};

export type THudud = {
	_id: string;
	name: string;
	paymanetTypes: ("balance" | "card")[]
};

export type TTuman = {
	_id: string;
	name: string;
}