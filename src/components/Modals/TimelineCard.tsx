import globe from '../../assets/globe.png';
import sliderLine from '../../assets/sliderLine.png';
import promptTimeline from '../../assets/promptTimeline.svg';
import blurredPic from '../../assets/blurredPic.svg';
import Cross from '../../assets/Cross.png';
import { useEffect, useRef, useState } from 'react';

type Props = {
  onClose: () => void
}

export default function TimelineCard({ onClose }: Props) {
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollY(containerRef.current.scrollTop);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const timelineYear = [
    {
      year: '2021',
    },
    {
      year: '2022',
    },
    {
      year: '2023',
    },
    {
      year: '2024',
    },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0f0e17] z-50">
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <img
          src={globe}
          alt="Background globe"
          className="w-[700px] h-[700px] object-cover blur-sm opacity-40 select-none pointer-events-none"
        />
      </div>

      <div className="absolute inset-0 bg-[#0b0f1a]/60 z-10" />

      <button
        onClick={onClose}
        className="absolute top-[10%] right-[15%] -translate-x-1/2 z-30 text-white/70 hover:text-white text-2xl cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_#a26bff]"
      >
        <img src={Cross} alt="Close" className="h-[18px] w-[18px]" />
      </button>

      {/* Content section */}
      <section
        ref={containerRef}
        className="relative z-20 mx-auto max-w-7xl px-6 h-screen overflow-y-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex items-start justify-center gap-20 py-20 min-h-full relative">

          <div className="flex-shrink-0 relative">
            <div className="flex flex-col gap-60">
              <img src={blurredPic} alt="blurredPic" className="w-auto h-auto" />
              <img src={blurredPic} alt="blurredPic" className="w-auto h-auto" />
              <img src={blurredPic} alt="blurredPic" className="w-auto h-auto" />
              <img src={blurredPic} alt="blurredPic" className="w-auto h-auto" />
              <img src={blurredPic} alt="blurredPic" className="w-auto h-auto" />
            </div>
          </div>

          <div className="relative flex-shrink-0">
            <div
              className="w-[2px] bg-gradient-to-b from-black via-[#9972FD] to-black absolute left-1/2 -translate-x-1/2"
              style={{
                height: `${timelineYear.length * 450 + 200}px`
              }}
            />

            <div
              className="absolute left-1/2 -translate-x-1/2 z-10"
              style={{
                top: `${Math.min(
                  scrollY * 1.3 + 100,
                  timelineYear.length * 450 + 200 - 20
                )}px`,
              }}
            >
              <div
                className="h-4 w-4 rounded-full bg-[#a26bff] ring-4 ring-white/10"
                style={{
                  boxShadow: `0 0 ${10 + scrollY * 0.05}px #a26bff`,
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-62 mt-[234px] flex-shrink-0">
            {timelineYear.map((event, index) => (
              <article
                key={index}
                className={`relative w-[344px] max-w-md rounded-[22px] bg-gradient-to-br from-[#6b35ff] to-[#7a4dff] px-8 py-7 text-white shadow-2xl 
                ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
              >
                <h3 className="text-[22px] font-semibold leading-snug text-[#FAF9FF]">
                  Your AI Prompt Companion
                </h3>
                <p className="mt-2 text-[14px] text-white leading-[1.6]">
                  Explore multiple prompt directions with branching.
                </p>

                <div className="text-left h-10 pt-5 flex items-center justify-start gap-x-2 relative mb-3">
                  <p className="text-sm text-white">Start from {event.year}</p>
                  <img
                    src={sliderLine}
                    alt="sliderLine"
                    className="absolute -right-[33px] w-24 rounded-full rotate-180"
                  />
                  <img
                    src={promptTimeline}
                    alt="prompt"
                    className="absolute right-[19px] w-10 rounded-full"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>

  );
}
