import '../input-transition.css'

function AlternativeCardPayment() {
    return (
        <div class="flex items-center justify-center flex-col space-y-4 w-[100%]">
            <input type="text" className="input-field placeholder-dark-grey pl-5 w-[85%] border rounded-[15px] h-[58px]" placeholder="Номер картки" />
            <div class="flex justify-center items-center w-[85%] border rounded-[15px] h-[58px]" placeholder="Ваш коментар (необов'язково)">
                <input type="text" className="input-field placeholder-dark-grey pl-4 h-3/4 focus:outline-none rounded-l-[15px] w-1/3" placeholder="Місяць"/>
                <input type="text" className="input-field placeholder-dark-grey pl-4 h-3/4 focus:outline-none w-1/3 border-l-[1px] border-dark-grey" placeholder="Рік"/>
                <input type="text" className="input-field placeholder-dark-grey pl-4 h-3/4 focus:outline-none rounded-r-[15px] w-1/3 border-l-[1px] border-dark-grey" placeholder="CVC2"/>
            </div>
            <button class="bg-opacity-50 flex justify-center items-center bg-light-red rounded-[15px] h-[58px] w-[85%] text-white font-bold">
                Поповнити банку
            </button>
        </div>
    );
}

export default AlternativeCardPayment;