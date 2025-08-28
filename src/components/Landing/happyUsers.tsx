import person1 from '../../assets/person1.png';
import circle1 from '../../assets/circl1.png';
import person2 from '../../assets/person2.png';

type showModal = {
    setShowProfileModal: (value: boolean) => void;
}

const HappyUsers = ({setShowProfileModal}: showModal) => {
    return (
        <div
            className="bg-[#191934] cursor-pointer hover:bg-[#2a2a4d] h-[250px] hover:scale-105 transition-transform duration-300 ease-in-out rounded-3xl p-6 text-white flex justify-center flex-col items-center"

            onClick={() => setShowProfileModal(true)}

        >
            <div>
                <h3 className="text-[62px] font-semibold bg-gradient-to-r from-[#FFB266] via-[#E9766F] to-[#C04350] bg-clip-text text-transparent tracking-[-0.02em] text-stroke">
                    12K
                </h3>

            </div>
            <p className="text-sm text-[#B2A1FD]">happy users</p>
            <div className="flex mt-3">
                <img src={person1} alt="user 1" className="w-14 h-14 rounded-full border-2 border-[#0f0e17] -ml-0" />
                <img src={circle1} alt="user2" className="w-14 h-14 rounded-full border-2 border-[#0f0e17] -ml-2" />
                <img src={person2} alt="user3" className="w-14 h-14 rounded-full border-2 border-[#0f0e17] -ml-2" />
            </div>
        </div>)
}

export default HappyUsers