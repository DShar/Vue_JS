<template>
    <transition name="modal-history">
        <div class="history" :style="cssStyles">
            <div class="history__background">
                <div class="history__wrapper">
                    <div class="history__container">
                        <div class="history__main">
                            <div class="history__header">
                                    <span>История действий</span>
                            </div>
                            <div class="history__list">
                                <ul>
                                    <li class="list__item" v-for="action in actionsList" v-bind:key="action.id">
                                        <span class="bold"> {{action.date}} : </span>  {{action.act}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <button class="history__close-button" @click="$emit('close')">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  name: 'ActionHistory',
  computed: {
    actionsList: function () {
      console.log(this.$store.state.actionsHistory)
      return this.$store.state.actionsHistory
    },
    cssStyles: function () {
      return {
        '--text-color': this.$store.state.styles.primaryColor
      }
    }
  }
}
</script>

<style lang="scss">
    .bold {
        font-weight: 600;
    }

    .history {
        color: var(--text-color);

        &__background {
            display: table;
            position: fixed;
            z-index: 1000;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            transition: opacity 0.3s ease;
        }

        &__wrapper {
            display: table-cell;
            vertical-align: middle;
        }

        &__main {
            max-height: 400px;
            overflow-y: scroll;
        }

        &__container {
            background-color: #fff;
            margin: 0 auto;
            transition: all 0.3s ease;
        }

        &__header>span {
            font-size: 18px;
            font-weight: 600;
        }

        &__list {
            width: 80%;

            .list__item {
                text-align: left;
            }
        }

        &__close-button {
            width: 40px !important;
        }
    }

    @media screen and (max-width: 479px) {
        .history__container {
            width: 90%;
        }
    }

    @media screen and (min-width: 480px) {
        .history__container {
            width: 70%;
        }
    }

    @media screen and (min-width: 769px) {
        .history__container {
            width: 50%;
        }
    }
</style>
