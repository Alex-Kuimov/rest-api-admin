import { computed, inject, provide, reactive } from "vue";

const useStore = () => (
    {
        state: inject("state"),
        updateStore: inject("updateStore"),
    }
);

export const initStore = () => {
    const state = reactive({
        store: {},
    });

    const getData = computed(() => state.store);

    const updateStore = (val) => {
        state.store = val;
    };

    provide("state", state);
    provide("updateStore", updateStore);
}

export const loadStore = () => {
    const { state, updateStore } = useStore();

    const store = computed({
        get: () => state.store,
        set: updateStore,
    });

    return { store };
}

