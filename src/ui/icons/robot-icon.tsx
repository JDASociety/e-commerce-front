import type { SVGProps } from 'react'

export const RobotIcon = (props: SVGProps<SVGSVGElement>) => {
	return (
		<svg
			viewBox="0 0 24 24"
			strokeWidth="1.5"
			stroke="currentColor"
			fill="none"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" />
			<path d="M12 2v2" />
			<path d="M9 12v9" />
			<path d="M15 12v9" />
			<path d="M5 16l4 -2" />
			<path d="M15 14l4 2" />
			<path d="M9 18h6" />
			<path d="M10 8v.01" />
			<path d="M14 8v.01" />
		</svg>
	)
}
