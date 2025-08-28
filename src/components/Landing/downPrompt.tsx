import pathButton from '../../assets/pathButton.png';
import pathLine from '../../assets/pathLine.png';
import pathTop from '../../assets/pathTop.png';
import pathRight from '../../assets/pathRight.png';
import enhancer from '../../assets/enhancer.png';

const DownPrompt = () => {
    return (
        <>
            <div className="bg-[#191934] relative rounded-3xl text-white h-[425px]">
                <img src={pathTop} alt="pathTop" className='-ml-2 -mt-2 rounded-full' />

                <div className="w-10 h-10 flex mt-20 items-center justify-center  rounded-full mb-3">
                    <img src={pathLine} alt="pathButton" className='absolute ml-10 w-20 rounded-full' />
                    <img src={pathButton} alt="pathButton" className='border-2 left-[27px] absolute border-[#0f0e17] w-12 rounded-full' />
                </div>
                <div className='p-6'>

                    <h4 className="font-bold text-[#E6E3FF]">Branching paths</h4>
                    <p className=" text-[#ACA0E4] mt-2">
                        Explore multiple prompt directions with branching.
                    </p>
                </div>
            </div>

            <div className="bg-[#191934] relative rounded-3xl text-white h-[425px]">
                <img
                    src={pathRight}
                    alt="pathRight"
                    className="absolute -top-2 -right-2 rounded-full"
                />

                <div className="flex flex-col absolute bottom-4 items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full mb-8">
                        <img src={pathLine} alt="pathButton" className='absolute ml-10 w-20 rounded-full' />
                        <img src={enhancer} alt="enhancer" className='border-2 left-[27px] absolute border-[#0f0e17] w-12 rounded-full' />
                    </div>

                    <div className='text-left px-6 pb-4'>
                        <h4 className="font-bold text-[#E6E3FF]">Keyword enhancer</h4>
                        <p className="text-[#ACA0E4] mt-2">
                            Boost your prompt precision with keywords.
                        </p>
                    </div>
                </div>
            </div>

        </>)
}

export default DownPrompt