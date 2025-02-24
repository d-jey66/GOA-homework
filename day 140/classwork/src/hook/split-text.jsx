export const SplitText = ({ children }) => {
    const words = children.split("")
    return (
        words.map((word, index) => (
            <span className='text-[100px] translate-y-[-200px] opacity-[0] text-white' key={index}>{word}</span>
        )
        )
    )
}