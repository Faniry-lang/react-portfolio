export function FourLeafButton() {
    return (
        <>
        <div
            className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center hover:scale-125 hover:rotate-12`}
            >
            <svg className="w-8 h-8" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="7" cy="7" r="3" />
                <circle cx="13" cy="7" r="3" />
                <circle cx="7" cy="13" r="3" />
                <circle cx="13" cy="13" r="3" />
            </svg>
            </div>
        </>
    )
}