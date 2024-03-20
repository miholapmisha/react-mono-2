import BodyCard from "./BodyCart";
import HeaderCard from "./HeaderCart";

function Cart() {
    return (
        <div class="flex bg-white w-990 minh-680 rounded-[25px]">
            <HeaderCard></HeaderCard>
            <BodyCard></BodyCard>
        </div>
    );
}

export default Cart;