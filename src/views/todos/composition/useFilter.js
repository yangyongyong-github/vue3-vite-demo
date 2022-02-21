import { ref, onMounted, onUnmounted, computed } from "vue";
import { filter } from "../../../utils/todoStorage";

const validHash = ['all', 'active', 'completed'];// 有效的hash值匹配

/**
 * useFilter
 */
export default function useFilter(todoRef) {

    const visibilityRef = ref('all'); // 接受一个内部值并返回一个响应式且可变的 ref 对象

    const onHashChange = () => {
        const hash = location.hash.replace(/#\?/, "");// 去除#和?
        if (validHash.includes(hash)) {
            // 有效的
            visibilityRef.value = hash;
        } else {
            location.hash = "";
            visibilityRef.value = 'all'
        }
    }



    onMounted(() => {
        window.addEventListener('hashChange', onHashChange);
    })

    onUnmounted(() => {
        window.removeEventListener('hashChange', onHashChange);
    })

    /**
     * 过滤后的属性值
     */
    const filteredTodosRef = computed(() => {
        return filter(todoRef.value, visibilityRef.value)
    })

    /**
     * 过滤
     *      得到正在执行的任务，以便于页面的显示
     */
    const remainingRef = computed(() => {
        return filter(todoRef.value, "active").length
    })

    /**
     *  表示已经完成的数量有多少
        (用于决定清空按钮是否显示)
     */
    const completedRef = computed(() => {
        return filter(todoRef.value, 'completed').length;
    })


    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }

}