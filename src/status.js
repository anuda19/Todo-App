function Status(props) {
    let message;
    if(props.status === "loading") {
        message = "Loading...";
    } else if(props.status === "success") {
        message = "Data fetched successfully";
    } else if(props.status === "error") {
        message = "Error loading data"
    }

    return (
        <div>
            <h1>Status - {message}</h1>
        </div>                                                                                        
    )
}

export default Status