import Cross from '../assets/Cross.png';

const CrossButton = ({onClose}: any) => {
    return (
        <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-xl bg-black/50 p-2 rounded-full z-50 cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_#a26bff]"
        >
            <img src={Cross} alt="Cross" className="h-[18px] w-[18px]" />
        </button>)
}

export default CrossButton