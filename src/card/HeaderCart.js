import { useEffect, useState } from "react";
import Stats from "./Stats";

function HeaderCard() {

    const goal = 25000;
    const jar0 = "https://send.monobank.ua/img/jar/0.png";
    const jar33 = "https://send.monobank.ua/img/jar/uah_33.png";
    const jar50 = "https://send.monobank.ua/img/jar/uah_50.png";
    const jar100 = "https://send.monobank.ua/img/jar/uah_100.png";

    useEffect(() => {
        const handleStorageChange = () => {
            setJarImage(chooseImageJar(localStorage.getItem("storedMoney")));
        };
        window.addEventListener('storage', handleStorageChange);
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    });

    const chooseImageJar = (inputMoney) => {
        let percentage = (parseInt(inputMoney) / goal) * 100;
        let jarImage;

        if (percentage < 33) {
            jarImage = jar0;
        } else if (percentage >= 33 && percentage < 50) {
            jarImage = jar33;
        } else if (percentage >= 50 && percentage < 100) {
            jarImage = jar50;
        } else if (percentage >= 100) {
            jarImage = jar100;
        }

        return jarImage;
    }
    const [jarImage, setJarImage] = useState(chooseImageJar(localStorage.getItem("storedMoney")));

    return (
        <div class="text-center space-y-4 rounded-l-[25px] p-16 bg-light-grey minh-full w-1/2 flex flex-col items-center">
            <div class="">
                <img src="https://send.monobank.ua/img/logo_short.png" alt="monobank logo"></img>
            </div>
            <div class="relative">
                <img class="w-155 h-203 absolute inset-0 mx-auto my-auto" src={jarImage} alt="jar-glass"></img>
                <img class="w-215 h-215" src="https://send.monobank.ua/img/jar_bg.png" alt="jar"></img>
            </div>
            <div class="text-center text-sm">
                <p>Артем К. збирає</p>
                <p class="text-2xl font-bold">На ремонт медеваку</p>
                <div class="text-center space-y-5 my-5">
                    <p>Збираємо на ремонт медеваку для
                        <br></br>
                        4ОТБР танкова бригада</p>
                    <p>У бригаді є наші земляки з Черкащини!</p>
                    <p>Ремонт авто треба на вчора! Прохання підтримати!</p>
                </div>
            </div>
            <Stats></Stats>
        </div>
    );
}

export default HeaderCard;