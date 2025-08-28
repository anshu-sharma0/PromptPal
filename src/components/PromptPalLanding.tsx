import { useState } from 'react';
import globe from '../assets/globe.png';
import toggle from '../assets/toggle.png';
import InfiniteCarouselModal from './Modals/PromptCard';
import ProfileModalCarousel from './Modals/ProfileCard';
import TimelineCard from './Modals/TimelineCard';
import GenerateButton from './GenerateButton';
import PromptTrial from './Landing/promptTrial';
import HappyUsers from './Landing/happyUsers';
import AiPrompt from './Landing/aiPrompt';
import DownPrompt from './Landing/downPrompt';
import CreatePrompt from './Landing/createPrompt';
import TemplatePrompt from './Landing/templatePrompt';

export default function PromptPalLanding() {
    const [showModal, setShowModal] = useState(false);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [showTimelineModal, setShowTimelineModal] = useState(false);

    return (
        <>
            {showModal && <InfiniteCarouselModal onClose={() => setShowModal(false)} />}
            {showProfileModal && (
                <ProfileModalCarousel
                    isOpen={showProfileModal}
                    onClose={() => setShowProfileModal(false)}
                />
            )}
            {showTimelineModal && <TimelineCard onClose={() => setShowTimelineModal(false)} />}

            <div className="min-h-screen w-full bg-[#0f0e17] flex items-center justify-center p-6">
                <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-4 gap-0">

                    <div className="space-y-6 flex flex-col">
                        <PromptTrial />

                        <HappyUsers setShowProfileModal={setShowProfileModal} />

                        <div className="bg-[#191934] rounded-3xl py-10 px-8 text-white flex justify-center flex-col items-center h-[150px]">
                            <GenerateButton />
                        </div>
                    </div>

                    <div className="md:col-span-2 flex flex-col items-center space-y-6 gap-2 max-w-[92%] mx-auto">
                        <AiPrompt setShowTimelineModal={setShowTimelineModal} />
                        <div className="relative w-full -mt-10 flex justify-center">
                            <img
                                src={globe}
                                alt="globe"
                                className="absolute z-10 w-[300px] h-[300px] object-contain -top-30 border-[20px] border-[#0f0e17] rounded-full"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6 w-full">
                            <DownPrompt />
                        </div>
                    </div>

                    <div className="space-y-6 flex flex-col">
                        <div className="bg-[#191934] rounded-3xl p-6 text-white flex flex-col items-center justify-center h-[150px]">
                            <img src={toggle} alt="toggle" className='w-33 h-18' />
                        </div>
                        <CreatePrompt setShowModal={setShowModal} />
                        <TemplatePrompt />
                    </div>
                </div>
            </div>
        </>
    );
}
