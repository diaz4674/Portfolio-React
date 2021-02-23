import React from "react"
import ResumePDF from "../resume.pdf"
import axios from "axios"

class Resume extends React.Component {

    async componentDidMount() {
        try {
            await axios
                .get(ResumePDF, {
                    responseType: "blob",
                })
                .then((response) => {
                    //Create a Blob from the PDF Stream
                    const file = new Blob([response.data], { type: "application/pdf" });
                    //Build a URL from the file
                    const fileURL = URL.createObjectURL(file);
                    //Open the URL on new Window
                    window.open(fileURL);
                    console.log(fileURL)

                    this.props.history.push("/")
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (error) {
            return { error };
        }
    }

    render() {
        return (
            <>
            </>
        )
    }
}

export default Resume