import { motion } from "framer-motion";
import buttonIcon from '../assets/buttonIcon.png';

const GenerateButton = () => {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 12px #b79dfc",
            }}
            whileTap={{
                scale: 0.95,
                boxShadow: "0px 0px 4px #5F33D6",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex items-center justify-center gap-2 bg-[linear-gradient(to_bottom,_#BBA5F4,_#5F33D6)] text-white rounded-3xl p-3 font-medium w-full border-4 border-[#0f0e17] shadow-lg cursor-pointer"
        >
            <img src={buttonIcon} alt="buttonIcon" className="w-5 h-5" />
            <span>Generate</span>
        </motion.button>
    );
};

export default GenerateButton;
