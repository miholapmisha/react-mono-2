import { forwardRef, useImperativeHandle, useRef } from "react";

const InputCard = forwardRef(function (props, ref) {
    const inputMoneyRef = useRef(null);

    const addToMoneyInput = (number) => {

        if (inputMoneyRef.current) {
            const content = inputMoneyRef.current.innerText;
            let updatedValue = parseInt(content) + number;

            if (updatedValue > 29999) {
                updatedValue = 29999;
            }

            inputMoneyRef.current.innerText = updatedValue;
        }

    }

    const handleChange = (value) => {

        const containsNonDigitChars = /\D/.test(value);
        let inputNumber = value.replace(/\D/g, '');

        if (inputNumber === "") {
            inputMoneyRef.current.innerText = "0";
        } else {
            let moneyValue = parseInt(inputNumber);

            const isNotAllowedValue = moneyValue > 29999;
            if (isNotAllowedValue) {
                moneyValue = 29999;
            }

            if (containsNonDigitChars || isNotAllowedValue) {
                inputMoneyRef.current.innerText = moneyValue;
            }
        }
    }

    useImperativeHandle(
        ref,
        () => {
            return {
                getData: () => {
                    const inputData = inputMoneyRef.current.textContent;
                    inputMoneyRef.current.textContent = '0';
                    return inputData;
                }
            }
        }
    );

    return (
        <div className="w-full h-207 rounded-[25px] bg-gradient-to-r from-blue-400 to-pink-600 p-[3px]">
            <div className="flex flex-col rounded-[22px] h-full w-full bg-white pt-5">
                <div className="flex flex-row justify-center w-full">
                    <p className="font-bold">Сума поповнень</p>
                    <img className="size-4 ml-1 mt-1" src="https://send.monobank.ua/img/money.png" alt="money emoji" />
                </div>
                <div className="flex flex-row justify-center p-6">
                    <div
                        ref={inputMoneyRef}
                        className="money-input-zero text-middle-grey focus:outline-none text-5xl font-bold"
                        contentEditable="true"
                        inputmode="decimal"
                        onInput={(e) => handleChange(e.currentTarget.textContent)}
                    >
                        0
                    </div>
                    <div className="money-input-sign text-middle-grey ml-2 text-5xl font-bold">₴</div>
                </div>
                <div className="flex justify-center space-x-4">
                    <div className="choice-button">
                        <button onClick={() => addToMoneyInput(100)} className="border border-button-grey font-bold rounded-[15px] w-24 py-2 ">+100&nbsp;₴</button>
                    </div>
                    <div className="choice-button">
                        <button onClick={() => addToMoneyInput(500)} className="border border-button-grey font-bold rounded-[15px] w-24 py-2 ">+500&nbsp;₴</button>
                    </div>
                    <div className="choice-button">
                        <button onClick={() => addToMoneyInput(1000)} className="border border-button-grey font-bold rounded-[15px] w-24 py-2">+1&nbsp;000&nbsp;₴</button>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default InputCard;
