<script setup>
import { ref } from 'vue';
import { attributes, attackEffectArr } from '../data/attributes';

const titleName = ref('屬性相剋表');
const subtitleName = ref(['打點', '弱點']);
const attackNumber = ref(0);
const showSubtitle = ref(false);
const showAttackEffectArr = ref([]);

const changeAttributes = (number) => {
    attackNumber.value = number;
    showSubtitle.value = true;
    showAttackEffectArr.value = attackEffectArr.filter((v, i) => {
        return i === number;
    });
};

const handleAttributesShow = (number) => {
    const newAttributes = attributes.filter((v) => {
        return number === v.id;
    });
    return newAttributes[0].attributes;
};

const handleClassNameShow = (number) => {
    const newAttributes = attributes.filter((v) => {
        return number === v.id;
    });
    return newAttributes[0].className;
};

</script>
<template>
    <div class="attributes">
        <h1 class="title">{{ titleName }}</h1>
        <div class="attributes-wrap">
            <div v-for="item in attributes" class="attributes-item" :class="item.className" :key="item.id"
                @click="changeAttributes(item.id)">
                <div class="attributes-attribute"></div>
                <p>{{ item.attributes }}</p>
            </div>
        </div>

        <div class="xiangke">
            <h3 class="subtitle" v-show="showSubtitle">{{ subtitleName[0] }}</h3>
            <div v-for="item in showAttackEffectArr" :key="item.id" class="Xiangke-wrap">
                <div class="Xiangke-item-wrap excellent-effect">效果絕佳
                    <div v-for="doubleShow in item.attributeRestraint.double" class="attributes-item Xiangke-item"
                        :class="handleClassNameShow(doubleShow)">
                        <div class="attributes-attribute"></div>
                        <p>{{ (handleAttributesShow(doubleShow)) }}</p>
                    </div>
                </div>
                <div class="Xiangke-item-wrap no-effect">沒有效果
                    <div v-for="zeroShow in item.attributeRestraint.zero" class="attributes-item Xiangke-item"
                        :class="handleClassNameShow(zeroShow)">
                        <div class="attributes-attribute"></div>
                        <p>{{ (handleAttributesShow(zeroShow)) }}</p>
                    </div>
                </div>
                <div class="Xiangke-item-wrap ineffective">效果不好
                    <div v-for="halfShow in item.attributeRestraint.half" class="attributes-item Xiangke-item"
                        :class="handleClassNameShow(halfShow)">
                        <div class="attributes-attribute"></div>
                        <p>{{ (handleAttributesShow(halfShow)) }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="weakness" v-show="showSubtitle">
            <h3>{{ subtitleName[1] }}</h3>
            <div v-for="item in showAttackEffectArr" :key="item.id" class="weakness-wrap">
                <div v-for="weakness in item.weakness" class="attributes-item weakness-item"
                    :class="handleClassNameShow(weakness)">
                    <div class="attributes-attribute"></div>
                    <p> {{ handleAttributesShow(weakness) }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.attributes {
    max-width: 375px;
    margin: 0 auto;

    .title {
        color: #333;
        margin: 1.25rem 0;
        text-align: center;
        font-size: 1.5rem;
    }

    .attributes-wrap {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .xiangke {
        margin-top: 1.25rem;
        text-align: center;

        .subtitle {
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            color: #333;
        }

        .Xiangke-wrap {
            display: flex;
            text-align: center;
            justify-content: center;

            .Xiangke-item-wrap {
                .Xiangke-item {
                    margin-top: 0.475rem;
                    margin-left: 0.475rem;
                }
            }
        }

    }

    .weakness {
        margin-top: 1.25rem;
        max-width: 375px;
        padding: 0 3.282rem;

        @media (max-width: 375px) {
            padding: 0;
            max-width: 340px;
            margin: 1.25rem auto 0;
        }

        .weakness-wrap {
            display: flex;
            text-align: center;
            flex-wrap: wrap;

            @media (max-width: 375px) {
                justify-content: center;
            }

            .weakness-item {
                margin-top: 0.475rem;
                margin-left: 0.475rem;
                min-width: 70px;
            }



        }

        h3 {
            text-align: center;
            margin-bottom: 1.25rem;
            font-size: 1.25rem;
            color: #333;
        }
    }

}

.attributes-item {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    font-size: 14px;
    border-radius: 10px;
    padding-right: 0.25rem;
    margin-right: 0.475rem;
    margin-bottom: 0.475rem;
    cursor: pointer;

    .attributes-attribute {
        background: url(../images/MST_SV.webp) no-repeat;
        background-size: 20px 420px;
        min-height: 20px;
        min-width: 20px;
        margin-right: 0.25rem;
    }
}

.generally {
    background-color: #9fa19f;
}

.fighting {
    background-color: #ff8000;

    .attributes-attribute {
        background-position: 0% 5%;
    }
}

.flight {
    background-color: #81b9ef;

    .attributes-attribute {
        background-position: 0% 10%;
    }
}

.poison {
    background-color: #9141cb;

    .attributes-attribute {
        background-position: 0% 15%;
    }
}

.ground {
    background-color: #915121;

    .attributes-attribute {
        background-position: 0% 20%;
    }
}

.rock {
    background-color: #afa981;

    .attributes-attribute {
        background-position: 0% 25%;
    }
}

.insect {
    background-color: #91a119;

    .attributes-attribute {
        background-position: 0% 30%;
    }
}

.ghost {
    background-color: #704170;

    .attributes-attribute {
        background-position: 0% 35%;
    }
}

.steel {
    background-color: #60a1b8;

    .attributes-attribute {
        background-position: 0% 40%;
    }
}

.fire {
    background-color: #e62829;

    .attributes-attribute {
        background-position: 0% 45%;
    }
}

.water {
    background-color: #2980ef;

    .attributes-attribute {
        background-position: 0% 50%;
    }
}

.grass {
    background-color: #3fa129;

    .attributes-attribute {
        background-position: 0% 55%;
    }
}

.electricity {
    background-color: #fac000;

    .attributes-attribute {
        background-position: 0% 60%;
    }
}

.superpower {
    background-color: #ef4179;

    .attributes-attribute {
        background-position: 0% 65%;
    }
}

.ice {
    background-color: #3fd8ff;

    .attributes-attribute {
        background-position: 0% 70%;
    }
}

.dragon {
    background-color: #5060e1;

    .attributes-attribute {
        background-position: 0% 75%;
    }
}

.evil {
    background-color: #50413f;

    .attributes-attribute {
        background-position: 0% 80%;
    }
}

.goblin {
    background-color: #ef70ef;

    .attributes-attribute {
        background-position: 0% 85%;
    }
}

.excellent-effect {
    color: #3dc53d;
    min-width: 90px;
}

.no-effect {
    color: #5b5b5b;
    min-width: 90px;
}

.ineffective {
    color: #e43f3f;
    min-width: 90px;
}
</style>