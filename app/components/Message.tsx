interface MessageProps {
    message: string;
    sender: number;
    receiver: number;
    created: string;
}

export const Message = ({message, sender, receiver, created}: MessageProps) => {
    
    return (
        <div className="border-2 shadow-xl p-4 w-1/3 max-w-1/3 rounded-b-lg rounded-tr-lg m-8 ">
            <p className = "relative">
                {message}
            </p>
            <span className = "absolute left-64">{created}</span>
        </div>
    )
}