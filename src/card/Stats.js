import { useEffect, useState } from "react";

function Stats() {
    const [storedValue, setStoredValue] = useState(localStorage.getItem("storedMoney"));

    useEffect(() => {
        const handleStorageChange = () => {
            setStoredValue(localStorage.getItem("storedMoney"));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    });

    return (
        <div className="flex items-center flex-row bg-white rounded-[15px] h-[71px] border-dark-grey divide-x divide-slate-300">
            <div className="items-center justify-center flex space-x-3 items-center pl-4 h-3/4 pr-4">
                <img src="https://send.monobank.ua/img/collected.svg" alt="status data" className="" />
                <div className="flex flex-col justify-center text-left">
                    <div className="text-sm text-dark-grey">Накопичено</div>
                    <div className="">{storedValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₴</div>
                </div>
            </div>
            <div className="flex items-center justify-center space-x-3 px-4 whitespace-nowrap h-3/4">
                <img src="https://send.monobank.ua/img/target.svg" className="" alt="status data icon" />
                <div className="flex flex-col justify-center text-left">
                    <div className="text-sm text-dark-grey">Ціль</div>
                    <div className="">25 000 ₴</div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
