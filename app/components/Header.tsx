export const Header = () => {
    return (
        <header className="bg-[#1e2a3b] shadow-xl">
            <div className="text-white flex items-center justify-between p-8">
                <div className="flex gap-4 items-center">
                    <button className="text-xl font-bold bg-slate-700 rounded-full w-8 h-8 p-2 flex items-center justify-center"><div>&gt;</div></button>
                    <div><span className="text-white text-xl font-bold">トーク</span></div>
                </div>
                <div className="flex gap-4">
                    <div  className="rounded-full bg-green-300 w-8 h-8"></div>
                    <div className="rounded-full bg-pink-300 w-8 h-8"></div>
                </div>
            </div>
        </header>
    )
}