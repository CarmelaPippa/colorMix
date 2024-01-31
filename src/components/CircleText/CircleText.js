import "./CircleText.css";

function CircleText() {
	return (
		<div className="wrapper">
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
				<path
					id="circlePath"
					d="
      M 10, 50
      a 40,40 0 1,1 80,0
      40,40 0 1,1 -80,0
    "
				/>
				<text>
					<textPath href="#circlePath">Your text here!</textPath>
				</text>
			</svg>
		</div>
	);
}

export default CircleText;