import globe from '../../assets/globe.png';
import sliderLine from '../../assets/sliderLine.png';
import promptTimeline from '../../assets/promptTimeline.svg';
import blurredPic from '../../assets/blurredPic.svg';
import Cross from '../../assets/Cross.png';

type Props = {
  onClose: () => void
}

export default function TimelineCard({ onClose }: Props) {
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
        className="absolute top-[10%] left-[75%] -translate-x-1/2 z-30 text-white/70 hover:text-white text-2xl cursor-pointer transition duration-200 ease-in-out hover:scale-110 hover:drop-shadow-[0_0_10px_#a26bff]"
      >
        <img src={Cross} alt="Close" className="h-[18px] w-[18px]" />
      </button>

      {/* Content section */}
      <section className="relative z-20 mx-auto max-w-5xl px-6 h-screen flex items-center justify-center gap-40">
        <div className="flex flex-col gap-60">
          <img src={blurredPic} alt="blurredPic" />
          <img src={blurredPic} alt="blurredPic" />
        </div>

        <div className="absolute top-34 bottom-34 left-1/2 w-[2px] -translate-x-1/2 bg-gradient-to-b from-black via-[#9972FD] to-black z-20" />

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="h-4 w-4 rounded-full bg-[#a26bff] ring-4 ring-white/10" />
        </div>

        {/* Timeline card */}
        <article className="ml-auto w-[344px] max-w-md rounded-[22px] bg-gradient-to-br from-[#6b35ff] to-[#7a4dff] px-8 py-7 text-white shadow-2xl relative z-20">
          <h3 className="text-[22px] font-semibold leading-snug text-[#FAF9FF]">
            Your AI Prompt Companion
          </h3>
          <p className="mt-2 text-[14px] text-white leading-[1.6]">
            Explore multiple prompt directions with branching.
          </p>

          <div className="text-left h-10 pt-5 flex items-center justify-start gap-x-2 relative mb-3">
            <p className="text-sm text-white">Start from 2023</p>
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
      </section>
    </div>

  );
}
