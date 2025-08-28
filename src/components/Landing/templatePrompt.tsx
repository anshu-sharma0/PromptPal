import gift from '../../assets/gift.png';
import camera from '../../assets/camera.png';
import zap from '../../assets/zap.png';
import DraggablePill from '../DraggablePill'
import settings from '../../assets/settings.png';

const TemplatePrompt = () => {
    return (
        <div className="bg-[#191934] rounded-3xl p-6 text-white">
            <h4 className="font-semibold">Prompt templates</h4>
            <p className="text-sm text-[#ACA0E4] mt-2">
                Use pre-made templates to jumpstart creativity.
            </p>
            <div className="relative w-48 rounded-xl flex items-center justify-center h-[305px]">

                <DraggablePill className="absolute right-4 bottom-24 rotate-45">
                    <img src={gift} alt="gift" />
                </DraggablePill>

                <DraggablePill className="absolute top-36 left-2 rotate-[300deg] bg-[#1d1d3c] px-8 py-4 rounded-full text-xs text-white flex items-center gap-1 shadow">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    Rewrite
                </DraggablePill>

                <DraggablePill className="absolute top-8 left-14 rotate-[340deg] bg-[#1d1d3c] border border-orange-400 text-xs px-8 py-4 rounded-full">
                    14 days trial
                </DraggablePill>

                <DraggablePill className="absolute left-24 top-[50%] rotate-[270deg]">
                    <div className="flex items-center gap-3 px-8 py-4 rounded-full text-xs text-white bg-[#1d1d3c]">
                        {["JPG", "PNG", "PDF"].map((item, index) => (
                            <div key={index} className="flex items-center gap-1">
                                <span
                                    className={`w-2 h-2 rounded-full ${item === "JPG"
                                        ? "bg-purple-500"
                                        : item === "PNG"
                                            ? "bg-yellow-400"
                                            : "bg-blue-400"
                                        }`}
                                ></span>
                                {item}
                            </div>
                        ))}
                    </div>
                </DraggablePill>

                <DraggablePill className="absolute bottom-4 left-4">
                    <img src={camera} alt="camera" />
                </DraggablePill>

                <DraggablePill className="absolute bottom-8 rotate-45 left-[45%] bg-[#1d1d3c] px-6 py-2 rounded-full shadow flex items-center gap-1">
                    <img src={settings} alt="settings" className='-rotate-45' />
                    <img src={zap} alt="zap" className='-rotate-45' />
                </DraggablePill>
            </div>

        </div>)
}

export default TemplatePrompt