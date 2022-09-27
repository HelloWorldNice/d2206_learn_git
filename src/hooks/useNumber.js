import { ref } from 'vue';

function useNumber() {
    let number = ref(20);

    function add() {
        number.value++;
    }

    function sub() {
        number.value--;
    }

    return {
        number,
        add,
        sub
    }
}

export default useNumber;