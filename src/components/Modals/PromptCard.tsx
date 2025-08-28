import { useState } from "react";
import gift from '../../assets/gift.png';
import sliderLine from '../../assets/sliderLine.png';
import RightArrow from '../../assets/RightArrow.png';
import LeftArrow from '../../assets/LeftArrow.png';
import CrossButton from "../Cross";

type Props = {
    onClose: () => void;
};

const cards = [
    {
        title: "Your AI Prompt Prompts templates",
        description: "Use pre-made templates to jumpstart creativity.",
    },
    {
        title: "Creative Ideas",
        description: "Generate endless inspiration instantly.",
    },
    {
        title: "Team Collaboration",
        description: "Work with teammates in real-time.",
    },
    {
        title: "Productivity Boost",
        description: "Automate repetitive tasks quickly.",
    },
];

export default function InfiniteCarouselModal({ onClose }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () =>
        setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);

    const handleNext = () =>
        setActiveIndex((prev) => (prev + 1) % cards.length);

    const handleClick = (index: number) => setActiveIndex(index);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50">
            <div className="relative w-[800px] h-[500px] overflow-hidden flex items-center justify-center">
                <CrossButton onClose={onClose} />
                {cards.map((card, idx) => {
                    const offset = (idx - activeIndex + cards.length) % cards.length;

                    let translateX = "0%";
                    let scale = 1;
                    let opacity = 1;
                    let blur = "blur-0";
                    let zIndex = 20;

                    if (offset === 0) {
                        translateX = "0%";
                        scale = 1;
                        opacity = 1;
                        blur = "blur-0";
                        zIndex = 20;
                    } else if (offset === 1 || offset === -3) {
                        translateX = "110%";
                        scale = 0.9;
                        opacity = 0.6;
                        blur = "blur-sm";
                        zIndex = 10;
                    } else if (offset === 3 || offset === -1) {
                        translateX = "-110%";
                        scale = 0.9;
                        opacity = 0.6;
                        blur = "blur-sm";
                        zIndex = 10;
                    }
                    else {
                        translateX = offset > 2 ? "200%" : "-200%";
                        opacity = 0;
                        scale = 0.8;
                        blur = "blur-md";
                        zIndex = 5;
                    }

                    return (
                        <div
                            key={idx}
                            className={`absolute cursor-pointer transition-all duration-500`}
                            style={{
                                transform: `translateX(${translateX}) scale(${scale})`,
                                opacity,
                                zIndex,
                            }}
                            onClick={() => handleClick(idx)}
                        >
                            <div
                                className={`relative rounded-2xl bg-gradient-to-br from-[#6b4fff] to-[#9b5cff] p-6 shadow-2xl w-72  ${blur}`}
                            >
                                <div className="w-10 h-10 flex items-center justify-center  rounded-full mb-3">
                                    <img src={sliderLine} alt="sliderLine" className='absolute -ml-2 w-20 rounded-full' />
                                    <img src={gift} alt="gift" className=' left-[43px] absolute  w-8 rounded-full' />
                                </div>

                                <div className="mt-2">
                                    <h2 className="text-2xl font-semibold leading-snug text-[#FAF9FF]">
                                        {card.title}
                                    </h2>
                                    <p className="mt-3 mb-6 text-[10px] text-[#ACA0E4]">{card.description}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Navigation Arrows */}
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full transition cursor-pointer"
                >
                    <img src={LeftArrow} alt="LeftArrow" />
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full transition cursor-pointer"
                >
                    <img src={RightArrow} alt="RightArrow" />
                </button>
            </div>
        </div>
    );
}
