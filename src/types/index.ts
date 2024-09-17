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
