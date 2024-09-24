import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";
import Body from "./customs/body";
import Header from "./customs/header";

const Details = () => {
	return (
		<div className="w-full">
			<Header />
			<Body />
			<div>
				<Pagination>
					<PaginationContent>
						<PaginationItem>
							<PaginationPrevious />
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>1</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink isActive>2</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>3</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>4</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>5</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>6</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationLink>7</PaginationLink>
						</PaginationItem>
						<PaginationItem>
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem>
							<PaginationNext />
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	);
};

export default Details;
