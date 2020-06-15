import React from "react";
import Carousel from "./Carousel";
import ScrollableAnchor from "react-scrollable-anchor";
import Arrow from "../../icons/arrow.png";
import {
	Container,
	AligningTitle,
	Title,
	HoverHelper,
	DownArrow,
	Text,
} from "./_Style.js";

class Projects extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			proMode: true,
		};
	}
	componentDidMount() {
		this.props.mode === "proMode"
			? this.setState({
					proMode: false,
					font: "raleway-bold",
			  })
			: this.setState({ proMode: false, font: "Bangers" });
	}

	render() {
		let { font, proMode } = this.state;
		return (
			<Container>
				<AligningTitle>
					<ScrollableAnchor id={"Projects"}>
						<Title mode={font}> Projects </Title>
					</ScrollableAnchor>
					<HoverHelper>
						<DownArrow src={Arrow} alt="arrow pointing down" />
						<Text mode={font}> hover video to play</Text>
					</HoverHelper>
				</AligningTitle>
				<Carousel mode={proMode} />
			</Container>
		);
	}
}

export default Projects;
