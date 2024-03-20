import AlternativeCardPayment from "./AlternativeCardPayment";
import InputCard from "./InputCart";
import '../input-transition.css'
import { useRef, useState } from "react";

function BodyCard() {
    const inputCardRef = useRef();
    const surnameInputRef = useRef();
    const commentInputRef = useRef();
    const [showCardPayment, setShowCardPayment] = useState(true);

    const handleSendButtonClick = () => {
        const moneyValue = inputCardRef.current.getData();
        console.log("Сума: " + moneyValue);
        console.log("Ім'я: " + surnameInputRef.current.value);
        console.log("Коментар: " + commentInputRef.current.value);
        surnameInputRef.current.value = "";
        commentInputRef.current.value = "";

        let storedValue = localStorage.getItem("storedMoney");
        if (storedValue == null) {
            localStorage.setItem("storedMoney", 0);
        }
        localStorage.setItem("storedMoney", parseInt(storedValue) + parseInt(moneyValue));
        window.dispatchEvent(new Event('storage'));

    }

    return (
        <div className="p-12 h-full w-1/2 space-y-8">
            <InputCard ref={inputCardRef}></InputCard>
            <div class="flex items-center justify-center flex-col space-y-6">
                <div class="flex items-center justify-center flex-col space-y-4 w-full">
                    <input type="text" ref={surnameInputRef} name="surname" className="input-field placeholder-dark-grey pl-5 w-[85%] border rounded-[15px] h-[58px]" placeholder="Ваше ім'я (необов'язково)" />
                    <input type="text" ref={commentInputRef} name="comment" className="input-field placeholder-dark-grey pl-5 w-[85%] border rounded-[15px] h-[58px]" placeholder="Ваш коментар (необов'язково)" />
                    <button
                        onClick={handleSendButtonClick}
                        class="flex justify-center items-center bg-black rounded-[10px] h-[48px] w-[85%]">
                        <img src="https://send.monobank.ua/img/mono_pay.svg" alt="mono Pay" class=""></img>
                    </button>
                    <button
                        onClick={handleSendButtonClick}
                        class="flex justify-center items-center bg-black rounded-[10px] h-[48px] w-[85%]">
                        <img class="w-[66px] h-[28px]" src="https://www.gstatic.com/instantbuy/svg/dark_gpay.svg" alt="g-pay"></img>
                    </button>
                </div>


                {showCardPayment ?
                    (<div class="m-10 bg-black h-[1px] w-[85%]"></div>) : (
                        <div class="w-[85%] flex items-center justify-center">
                            <hr class="border-black w-[25%]"></hr>
                            <span class="px-2 bg-white text-gray-500 text-sm text-black">або уведіть дані картки</span>
                            <hr class="border-black w-[25%]"></hr>
                        </div>
                    )}
            </div>

            {showCardPayment ?
                (<div class="flex justify-center space-x-2">
                    <img class="" src="https://send.monobank.ua/img/card.svg" alt="Credit Card"></img>
                    <a href="#" onClick={() => setShowCardPayment(false)} class="text-light-red text-sm cursor-pointer">Оплатити карткою</a>
                </div>) : <AlternativeCardPayment></AlternativeCardPayment>}

        </div>
    );
}

export default BodyCard;