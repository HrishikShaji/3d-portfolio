interface Props {
	text: string;
	className?: string;
	id?: string;
}

export default function Button({ text, className, id }: Props) {
	return <a className={`${className ?? ""} cta-wrapper`}>
		<div className="cta-button group">
			<div className="bg-circle" />
			<p className="text">{text}</p>
			<div className="arrow-wrapper">
				<img src="/images/arrow-down.svg" alt="arrow" />
			</div>
		</div>
	</a>
}
