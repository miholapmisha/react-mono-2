import Cart from './Cart'

function MainContainer() {
    return (
        <div className="flex justify-center items-center h-screen w-full h-full flex-col">
            <Cart></Cart>
            <div class="flex w-[990px] text-white pt-7">
                <div class="w-[60%] text-sm">
                    АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від
                    <br></br>
                    20.01.1994, у держреєстрі банків №226
                </div>

                <div class="w-[20%] flex justify-end">
                    <div class="flex bg-white bg-opacity-10 px-4 space-x-2 h-full rounded-[15px] items-center justify-center border border-white font-bold text-sm">
                        <img class="size-4" src="https://send.monobank.ua/img/cup.svg" alt="cup"></img>
                        <div class="cursor-pointer">Провести розіграш</div>
                    </div>
                </div>

                <div class="w-[20%] flex justify-end">
                    <div class="flex bg-white bg-opacity-10 px-4 space-x-2 h-full rounded-[15px] items-center justify-center border border-white font-bold text-sm ">
                        <img class="size-4" src="https://send.monobank.ua/img/gamepad.svg" alt="joistic"></img>
                        <div class="cursor-pointer">Віджет для стрімів</div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default MainContainer;