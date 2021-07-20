<!-- =========================================================================================
    File Name: UserProfile.vue
    Description: user profile sidebar
========================================================================================== -->

<template>
    <div id="parentx-demo-2">

        <vs-sidebar parent="#chat-app" :position-right="!isActiveUser" :hidden-background="false" v-model="activeLocal" id="chat-profile-sidebar" class="items-no-padding">

            <div class="header-sidebar relative flex flex-col p-0" slot="header">
                <feather-icon icon="XIcon" svgClasses="m-2 cursor-pointer absolute top-0 right-0" @click="$emit('closeProfileSidebar', false)"></feather-icon>


                <div class="relative inline-flex mx-auto mb-5 mt-6">
                    <vs-avatar class="m-0 border-white border-2 border-solid shadow-md" :src=loginInfo.avatar size="70px" />
                    <div class="h-5 w-5 border-white border-2 border-solid rounded-full absolute right-0 bottom-0" :class="'bg-' + getStatusColor(isActiveUser)"></div>
                </div>
                <h4 class="mr-2 self-center">{{ loginInfo.nickName }}</h4>
            </div>

            <VuePerfectScrollbar class="scroll-area" :settings="settings">
            <div class="p-8">

                <h6 class="mb-2" :class="{'ml-4': isActiveUser}">简介</h6>
                <vs-textarea class="mb-10" counter="120" maxlength="120" :counter-danger.sync="counterDanger" v-model=loginInfo.personality rows="5" v-if="isActiveUser" />
                <p v-else>{{ loginInfo.personality }}</p>

                <div class="userProfile__status" v-if="isActiveUser">
                    <h6 class="mb-4">在线状态</h6>
                    <ul>
                        <li class="mb-2">
                            <vs-radio v-model="status" vs-value="online" color="success">在线</vs-radio>
                        </li>
                        <li class="mb-2">
                            <vs-radio v-model="status" vs-value="do not disturb" color="danger">勿扰</vs-radio>
                        </li>
                        <li class="mb-2">
                            <vs-radio v-model="status" vs-value="away" color="warning">离开</vs-radio>
                        </li>
                        <li class="mb-2">
                            <vs-radio v-model="status" vs-value="offline" color="grey">离线</vs-radio>
                        </li>
                    </ul>
                </div>
            </div>
            </VuePerfectScrollbar>
        </vs-sidebar>
    </div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import contacts from './contacts.js'

export default{
    props: {
        userId: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            loginInfo: {
                email: '',
                password: '',
                avatar: '',
                nickName: '',
                personality: ''
            },
            contacts: contacts,
            counterDanger: false,
            settings: { // perfectscrollbar settings
                maxScrollbarLength: 60,
                wheelSpeed: .60,
            },
        }
    },
    computed: {
        isActiveUser() {
            return this.contactIndex === -1;
        },
        activeLocal: {
            get() {
                return this.active
            },
            set(value) {
                this.$emit('closeProfileSidebar', value);
            }
        },
        about: {
            get() {
                if(this.contactIndex === -1) {
                    return this.$store.state.AppActiveUser.about;
                }else{
                    return this.contacts[this.contactIndex].about;
                }
            },
            set(value) {
                if(value.length > 120) {
                    value = value.substring(0, 120)
                }
                this.$store.dispatch('chat/updateAboutChat', value);
            }
        },
        contactIndex() {
            return contacts.findIndex(contact => contact.id == this.userId);
        },
        status: {
            get() {
                if(this.contactIndex === -1) {
                    return this.$store.state.AppActiveUser.status;
                }
            },
            set(value) {
                if(this.contactIndex === -1) {
                    this.$store.dispatch('chat/updateStatusChat', value);
                }
            }
        },
        userImg() {
            if(this.contactIndex === -1) {
                return this.$store.state.AppActiveUser.img;
            }else{
                return this.contacts[this.contactIndex].img;
            }
        },
        userName() {
            if(this.contactIndex === -1){
                return this.$store.state.AppActiveUser.name;
            }else{
                return this.contacts[this.contactIndex].name;
            }
        },
        getStatusColor() {
            return (isActiveUser) => {
                const userStatus = this.getUserStatus(isActiveUser)

                if(userStatus == "online"){
                    return "success"
                }else if(userStatus == "do not disturb"){
                    return "danger"
                }else if(userStatus == "away"){
                    return "warning"
                }else{
                    return "grey"
                }
            }
        },
    },
    mounted () {
        this.getValue()
    },
    methods: {
        getValue(){
            this.loginInfo.avatar = localStorage.getItem('avatar');
            this.loginInfo.nickName = localStorage.getItem('nickName');
            this.loginInfo.personality = localStorage.getItem('personality');
        },
        getUserStatus(isActiveUser) {
            return (isActiveUser) ? this.$store.state.AppActiveUser.status : this.contacts[this.contactIndex].status;
        },
    },
    components:{
        VuePerfectScrollbar,
    }
}
</script>
