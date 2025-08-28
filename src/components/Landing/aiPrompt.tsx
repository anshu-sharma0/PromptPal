import promptLogo from '../../assets/promptLogo.svg';

type AiPromptProps = {
    setShowTimelineModal: (value: boolean) => void;
};

const AiPrompt = ({setShowTimelineModal}: AiPromptProps) => {
    return (
        <div
            className="rounded-3xl p-8 text-center w-full h-[367px] cursor-pointer"
            style={{
                background: 'radial-gradient(ellipse at center 80%, #A892F0 0%, #4B2FB8 100%)'
            }}
            onClick={() => setShowTimelineModal(true)}
        >
            <div className="flex items-center justify-center gap-2">
                <img src={promptLogo} alt="PromptPal Logo" className="w-6 h-6" />
                <span className="text-white font-semibold text-lg">PromptPal</span>
            </div>

            <h2 className="text-[#FAF9FF] text-[62px] font-semibold leading-[62px] tracking-[-0.02em] mt-2">
                Your AI Prompt Companion
            </h2>

        </div>)
}

export default AiPrompt