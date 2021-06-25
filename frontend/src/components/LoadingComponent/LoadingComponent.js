import loadingGif from "./assets/1488.gif"

function Loading() {
    // Component that adds a loading gif, mainly to use when waiting for API Calls
    return (
        <div>
            <img height="28px" src={loadingGif} alt="loading-gif" />
        </div>
    )
}

export default Loading