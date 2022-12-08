<template>
    <div class="v-transplants">
        <h1 class="v-transplants-header">{{header}}</h1>
        <div 
            class="v-transplants-filter"
            v-for="filter in filters"
            :key="filter.id"
            @click="chooseFilter(filter.id, filter.amount, filter.isEmpty)"
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
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            header: 'Количество пересадок',
            filters: [
                {
                    id: 7453,
                    desc: 'Без пересадок',
                    amount: 0,
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 9559,
                    desc: '1 пересадка',
                    amount: 1,
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 7569,
                    desc: '2 пересадки',
                    amount: 2,
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                },
                {
                    id: 9778,
                    desc: '3 пересадки',
                    amount: 3,
                    empty: require('../assets/icons/checkbox-empty.png'),
                    checkbox: require('../assets/icons/checkbox.png'),
                    isEmpty: false
                }
            ],
        }
    },
    methods: {
        ...mapActions([
            'GET_TICKETS_WITH_FILTER',
            'GET_REMOVE_TICKETS_WITH_FILTER'
        ]),
        chooseFilter(id, amount, empty) {
            this.filters.forEach(item => {
                if (item.id === id) {
                    item.isEmpty = !item.isEmpty;
                }
            });
            this.GET_TICKETS_WITH_FILTER(amount)

            if(empty === true) {
                let str = '';
                empty = false;
                this.GET_TICKETS_WITH_FILTER();

                this.filters.forEach(item => {
                    if (item.isEmpty === true) {
                        str += item.amount;
                        this.GET_REMOVE_TICKETS_WITH_FILTER(str);
                    }
                });
            }
        }
    },
}
</script>
