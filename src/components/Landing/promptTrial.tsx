import logo from '../../assets/logo.svg';

const PromptTrial = () => {
    return (
        <div className="bg-[#191934]  rounded-3xl p-6 text-white">
            <img src={logo} alt="Logo" className='h-[44px] w-[52px]' />
            <h3 className="text-[36px] font-semibold mt-5 bg-gradient-to-r from-white to-[#AA9CFC] bg-clip-text text-transparent leading-[40px] tracking-[-0.01em]">
                Effortless Prompt Perfection
            </h3>
            <div className="text-sm mt-[96px] text-gray-300">
                <p className='text-[#E6E3FF] font-bold '>14 days trial</p>
                <p className='text-[#ACA0E4] '>after - $5/month</p>
            </div>
        </div>)
}

export default PromptTrial