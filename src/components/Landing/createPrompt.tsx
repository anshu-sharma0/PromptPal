import prompt from '../../assets/Prompt.png';

type showModal = {
    setShowModal: (value: boolean) => void;
}

const CreatePrompt = ({ setShowModal }: showModal) => {
    return (
        <div className="bg-[#191934] rounded-3xl p-6 h-[192px] hover:scale-105 transition-transform duration-300 ease-in-out text-white flex flex-col items-center justify-center cursor-pointer hover:bg-[#2a2a4d]"
            onClick={() => setShowModal(true)}
        >
            <h3
                className="text-[62px] font-semibold bg-gradient-to-r  from-[#F5F1FF] to-[#6633EE] bg-clip-text text-transparent"
            >
                25M
            </h3>
            <div className="relative inline-block w-fit">
                <img src={prompt} alt="prompt" className="block" />

                <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[18px] px-3 whitespace-nowrap rounded-md bg-gradient-to-r from-[#B294FF] to-[#4F2BAC] bg-clip-text text-transparent">
                    created prompts
                </p>
            </div>
        </div>
    )
}

export default CreatePrompt