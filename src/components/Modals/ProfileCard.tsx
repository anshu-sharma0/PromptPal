import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Monye from '../../assets/Monye.svg';
import RightArrow from '../../assets/RightArrow.png';
import LeftArrow from '../../assets/LeftArrow.png';
import CrossButton from "../Cross";

type ProfileModalCarouselProps = {
    onClose: () => void;
    isOpen: boolean;
};

const profiles = [
    {
        id: 1,
        uses: "20k Use",
        name: "Monye Matt",
        img: Monye
    },
    {
        id: 2,
        uses: "15k Use",
        name: "Sarah Johnson",
        img: Monye
    },
    {
        id: 3,
        uses: "30k Use",
        name: "David Kim",
        img: Monye
    },
];

export default function ProfileModalCarousel({ onClose, isOpen }: ProfileModalCarouselProps) {
    const [index, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % profiles.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + profiles.length) % profiles.length);

    if (!isOpen) return null;

    return (
        <AnimatePresence>

            <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">

                <motion.div
                    className="relative max-w-lg w-full px-10 py-12"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <CrossButton onClose={onClose} />
                    <div className="relative w-full h-[480px] rounded-3xl purple-radial-bg p-10 shadow-2xl">
                        <button
                            onClick={prev}
                            className="absolute -left-14 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl cursor-pointer"
                        >
                            <img src={LeftArrow} alt="LeftArrow" />
                        </button>

                        <button
                            onClick={next}
                            className="absolute -right-14 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-5xl cursor-pointer"
                        >
                            <img src={RightArrow} alt="RightArrow" />
                        </button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={profiles[index].id}
                                initial={{ opacity: 0, x: 80, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -80, scale: 0.95 }}
                                transition={{ duration: 0.45, ease: "easeInOut" }}
                                className="relative w-full h-full flex flex-col items-center justify-between "
                            >
                                <h3
                                    className="text-[50px] font-semibold leading-[56px] text-transparent bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text"
                                >
                                    {profiles[index].uses}
                                </h3>

                                <img
                                    src={profiles[index].img}
                                    alt={profiles[index].name}
                                    className="w-44 h-44 object-contain drop-shadow-lg"
                                />

                                <p className="text-[26px] font-semibold text-white">
                                    {profiles[index].name}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

