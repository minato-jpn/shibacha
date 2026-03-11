interface FriendItemProps {
    name: string;
    statusMessage:string
}

export const FriendItem = ({name, statusMessage}: FriendItemProps) => {
    return (
        <div className = "flex items-center gap-4 p-8 w-80 border-2 rounded-xl">
            <div className = "bg-sky-300 rounded-full w-8 h-8"></div>
            <div>
                <div>
                    <span className="font-bold">{name}</span>
                </div>
                <div>
                    <span className="line-clamp-1">
                        {statusMessage}
                    </span>
                </div>
            </div>
            
        </div>
    )
}