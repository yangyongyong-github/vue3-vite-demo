import { ref, watchEffect } from 'vue';
import * as todoStorage from '../../../utils/todoStorage';

export default function useTodoList() {
    const todoRef = ref(todoStorage.fetch());
    window.todoRef = todoRef;// test
    watchEffect(() => {
        todoStorage.save(todoRef.value)
    });

    return {
        todoRef,
    }
}