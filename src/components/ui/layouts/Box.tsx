import type { ComponentProps } from "react";
import cn from "@/libs/utils/cn";

export default function Box({
	className,
	children,
	...props
}: ComponentProps<"div">) {
	return (
		<div className={cn("px-1", className)} {...props}>
			{children}
		</div>
	);
}
