import React from "react";

class Loading extends React.Component {
	render() {
		const Container = {
			position: "absolute",
			zIndex: this.props.loading ? "5000" : "-2",
			opacity: this.props.loading ? "1" : "-2",
			transition: "ease .1s",
			width: "100%",
			backgroundColor: "black",
			height: "100%",
			display: this.props.loading ? "flex" : "none",
			alignItems: "center",
			justifyContent: "center",
		};

		const LoadingIcon = {
			zIndex: this.props.loading ? "6000" : "-2",
			opacity: this.props.loading ? "1" : "-2",
			transition: "ease .1s",
			width: "5em",
			display: this.props.loading ? "flex" : "",
			flexDirection: "column",
			justifyContent: "center",
		};

		const Flexboxing = {
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
		};

		const LoadingWordContainer = {
			display: "flex",
			flexDirection: "row",
			alignItems: "center",
			justifyContent: "center",
		};

		const loadingWord = {
			fontSize: "40px",
			color: "white",
			fontFamily: "Bangers",
		};

		return (
			<div style={Container}>
				<div style={Flexboxing}>
					<img
						style={LoadingIcon}
						// Flying Taco
						src="https://media.giphy.com/media/kELXPGMOmmCLxhMr6R/giphy.gif"
						alt="loading"
					/>
					<div style={LoadingWordContainer}>
						{/* Bouncing loading dots */}
						<p style={loadingWord}> Loading </p>
						<div className="spinner">
							<div className="bounce1" />
							<div className="bounce2" />
							<div className="bounce3" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Loading;
