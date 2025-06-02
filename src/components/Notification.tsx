interface NotificationProps {
	message: string;
	show: boolean;
	opacity: number;
	onDismiss: () => void;
}

export function Notification({
	message,
	show,
	opacity,
	onDismiss,
}: NotificationProps) {
	if (!show) return null;

	return (
		<div
			className="fixed top-4 right-4 flex items-center p-4 mb-4 text-blue-800 rounded-lg bg-blue-50 "
			style={{
				opacity: opacity,
				transition: "opacity 300ms ease-in-out",
				maxWidth: "300px",
			}}
		>
			{message}

			<button
				className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex items-center justify-center h-8 w-8"
				onClick={onDismiss}
			>
				<span className="sr-only">Close</span>
				<svg
					className="w-3 h-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 14 14"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
					/>
				</svg>
			</button>
		</div>
	);
}

export default Notification;
