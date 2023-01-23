import klinkSVG from "../../assets/Klink.svg";

const Header = () => {
    return (
        <div className="flex flex-row justify-between items-center px-5 mt-5">
            <div className="text-gray-800">
                <img src={klinkSVG} alt="KLINK" />
            </div>
            <div className="flex items-center">
                <div className="text-sm text-center mr-4">
                    <div className="font-light text-gray-500">Search</div>
                </div>
            </div>
        </div>
    )
    
}

export default Header