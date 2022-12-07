<template>
    <div class="v-transplants">
        <h1 class="v-transplants-header">{{header}}</h1>
        <div 
            class="v-transplants-filter"
            v-for="filter in filters"
            :key="filter.id"
            @click="chooseFilter(filter.id)"
        >
            <div class="v-transplants-filter__checkbox">
                <img :src="filter.empty" alt="" v-if="!filter.isEmpty">
                <img :src="filter.checkbox" alt="" v-if="filter.isEmpty">
            </div>
            <div class="v-transplants-filter__desc">
                {{filter.desc}}
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            header: 'Количество пересадок',
            filters: [
                {
                    id: 1,
                    desc: 'Все',
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 2,
                    desc: 'Без пересадок',
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 3,
                    desc: '1 пересадка',
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 4,
                    desc: '2 пересадки',
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 5,
                    desc: '3 пересадки',
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                }
            ],
        }
    },
    methods: {
        chooseFilter(id) {
            this.filters.forEach(item => {
                if (item.id === id) {
                    item.isEmpty = !item.isEmpty;
                }
            });
        }
    }
}
</script>
