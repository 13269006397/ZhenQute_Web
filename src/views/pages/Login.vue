<!-- =========================================================================================
    File Name: Login.vue
    Description: Login Page
========================================================================================== -->


<template>
    <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center" id="page-login">
        <div class="vx-col sm:w-1/2 md:w-1/2 lg:w-3/4 xl:w-3/5 sm:m-0 m-4">
            <vx-card>
                <div slot="no-body" class="full-page-bg-color">
                    <div class="vx-row no-gutter justify-center items-center">
                        <div class="vx-col hidden lg:block lg:w-1/2">
                            <img src="@/assets/images/pages/login.png" alt="login" class="mx-auto">
                        </div>
                        <div class="vx-col sm:w-full md:w-full lg:w-1/2 d-theme-dark-bg">
                            <div class="p-8">
                                <div class="vx-card__title mb-8">
                                    <h4 class="mb-4">登录</h4>
                                    <p>欢迎回来，请输入您的帐户。</p>
                                </div>
                                <vs-input
                                    v-validate="'required|email|min:3'"
                                    data-vv-validate-on="blur"
                                    name="email"
                                    icon="icon icon-user"
                                    icon-pack="feather"
                                    label-placeholder="邮箱"
                                    v-model="loginInfo.email"
                                    class="w-full no-icon-border"/>
                                <span class="text-danger text-sm">{{ errors.first('email') }}</span>

                                <vs-input
                                    data-vv-validate-on="blur"
                                    v-validate="'required|min:6|max:10'"
                                    type="password"
                                    name="password"
                                    icon="icon icon-lock"
                                    icon-pack="feather"
                                    label-placeholder="密码"
                                    v-model="loginInfo.password"
                                    class="w-full mt-6 no-icon-border" />
                                <span class="text-danger text-sm">{{ errors.first('password') }}</span>

                                <div class="flex flex-wrap justify-between my-5">
                                    <vs-checkbox v-model="checkbox_remember_me" class="mb-3">记住密码</vs-checkbox>
                                    <router-link to="/pages/forgot-password">忘记密码?</router-link>
                                </div>
                                <vs-button  type="border" @click="registerUser">注册</vs-button>
                                <vs-button class="float-right" :disabled="!validateForm" @click="login">登录</vs-button>

                                <vs-divider>OR</vs-divider>

                                <div class="social-login flex flex-wrap justify-between">
                                    <div class="social-login-buttons flex flex-wrap items-center mt-4">

                                        <!-- facebook -->
                                        <div class="bg-facebook pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4" @click="loginWithFacebook">
                                          <svg t="1626677507949" class="icon" viewBox="0 0 1327 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5741" width="16" height="16"><path d="M983.35236 498.452082c-51.651863-9.663636-26.534508-36.508568-26.534508-36.508568s50.531637-80.386332-10.01455-138.84053c-75.014647-72.396287-257.328041 9.191251-257.328042 9.191251-69.629464 20.852398-51.179478-9.515172-41.340385-61.207525 0-60.910597-21.594717-163.984879-207.079835-103.101275C255.745378 229.206457 96.646304 443.682482 96.646304 443.682482-14.026619 586.194115 0.644292 696.340666 0.644292 696.340666c27.641237 243.156509 295.321246 309.911176 503.50781 325.702313 219.024413 16.573945 514.642586-72.882168 604.30115-256.666703 89.618074-184.094959-73.273573-256.950134-125.100892-266.924194z m-462.936737 455.014175c-217.431802 9.812099-393.212795-95.435151-393.212795-235.503881s175.713509-252.644687 393.145312-262.321819 393.72567 76.931178 393.725669 216.797457-176.104914 271.513071-393.725669 281.028243zM476.983249 547.99846c-218.646505 24.698957-193.434674 222.439077-193.434673 222.439077s-2.226955 62.611181 58.643152 94.476885c127.962192 66.903131 259.70346 26.399541 326.309664-56.56466s27.492774-284.901795-191.518143-260.364799z m-55.161004 277.519101c-40.841008 4.615871-73.73246-18.099072-73.73246-51.085001s29.233848-67.213555 70.074855-71.316552c46.914522-4.305447 77.430556 21.78367 77.430556 54.756104s-33.093903 63.191539-73.772951 67.645449z m128.906961-106.003065c-13.834115 9.987556-30.853451 8.597397-38.141668-3.374174-7.625634-11.674644-4.777831-30.381067 9.218245-40.206663 16.196037-11.634154 33.06691-8.300469 40.368623 3.387671 7.31521 11.958074 2.078491 29.908682-11.4452 40.193166z m539.125596-306.671968c17.545707 0 32.594525-12.578922 35.091415-28.990907a14.104049 14.104049 0 0 0 0.472384-3.671102c26.736958-231.819282-196.741365-191.909547-196.741364-191.909547-19.840146 0-35.752753 15.494209-35.752753 34.807984 0 19.030344 15.912607 34.524553 35.752753 34.524553 160.516228-34.200632 125.114389 120.727962 125.114389 120.727962 0 19.165311 16.196037 34.511056 36.076673 34.511057zM1063.806175 8.252016C986.53758-9.212711 907.055527 5.836107 884.799472 9.9526c-1.727577 0.148464-3.333684 1.727577-4.912798 2.038001a2.145975 2.145975 0 0 0-1.255193 0.917776c-21.945631 5.992534-37.993204 25.643726-37.993205 48.777066 0 27.627741 23.187327 50.329186 52.124248 50.329186 0 0 28.127118-3.630612 47.238442-10.797358s178.952717-5.479659 258.434771 123.373315c43.351394 94.004501 19.043841 156.926106 15.966593 167.089119 0 0-10.311477 24.44252-10.311477 48.493636 0 27.762707 23.21432 45.227435 51.94879 45.227434 24.024122 0 44.201685-3.171724 50.099742-42.393128h0.310425c85.339621-274.563324-104.423951-403.551266-242.684125-434.715141z" p-id="5742" fill="#d81e06"></path></svg>
                                        </div>

                                        <!-- TWITTER -->
                                        <div class="bg-twitter pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4" @click="loginWithTwitter">
                                          <svg t="1626677289958" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4017" width="16" height="16"><path d="M943.0016 579.072a1373.696 1373.696 0 0 0-30.8224-82.9952l-30.5152-72.4992 0.0512-8.6528C881.7664 166.7072 733.184 0 512 0S142.2336 166.7072 142.2336 414.8736l0.0512 8.6016-29.9008 71.0656a1355.776 1355.776 0 0 0-31.488 84.6336c-36.5568 111.9232-39.3216 193.3824-8.0896 242.0224 16.896 26.3168 43.3664 43.8272 73.216 48.7424a118.6816 118.6816 0 0 0 13.1072 92.0576c35.4304 56.9856 102.5536 61.2352 200.9088 61.2352 56.7808 0 117.1968-2.9184 151.9104-5.9392 34.7136 3.072 95.0784 5.9392 151.9104 5.9392 98.3552 0 165.4784-4.2496 200.8576-61.1328 15.9232-25.6 21.8112-59.4944 13.1584-92.16a107.776 107.776 0 0 0 73.216-48.7424c31.1808-48.64 28.4672-130.0992-8.0896-242.1248z m-81.7152 189.7984l-0.768 0.0512c-19.8656 0-73.9328-83.6608-73.9328-83.6608 0 49.664-26.88 121.344-84.992 168.1408 21.76 6.4 48.4352 16.1792 65.536 28.2624 15.4112 10.8032 13.4656 21.8112 10.7008 26.3168-5.9904 9.6256-56.9856 12.8-113.92 12.8-58.4192 0-123.136-3.328-151.9104-6.4-28.7744 3.1232-93.4912 6.4-151.9104 6.4-56.9344 0-107.8784-3.1744-113.92-12.8-2.7648-4.4544-4.7104-15.5136 10.7008-26.3168 17.1008-12.032 43.776-21.8624 65.536-28.2624-58.112-46.848-84.992-118.4768-84.992-168.192 0 0-54.1184 83.6608-73.9328 83.6608l-0.768-0.0512c-8.96-1.024-20.6848-47.0016 15.5648-158.0544 7.5776-23.296 17.9712-50.432 28.4672-76.544l38.3488-91.136c0-1.0752-0.512-19.0464-0.512-28.2624C244.6336 259.0208 321.9456 102.4 512 102.4c190.0544 0 267.3664 156.6208 267.3664 312.4736 0 9.2672-0.4608 27.1872-0.512 28.2624l38.4 91.136c10.496 26.112 20.8896 53.248 28.4672 76.544 36.2496 111.0528 24.5248 157.0304 15.5648 158.0544z" fill="#e6e6e6" p-id="4018"></path></svg>
                                        </div>

                                        <!-- GOOGLE -->
                                        <div class="bg-google pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4" @click="loginWithGoogle">
                                          <svg t="1626676974646" class="icon" viewBox="0 0 1200 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3112" width="16" height="16"><path d="M119.734969 914.905702l27.726077-73.223172c7.102922-18.895418 12.670077-42.891775 12.971745-54.574573-102.07365-85.810975-160.432791-206.423525-160.432791-332.274137 0-122.395136 53.258202-237.193712 149.984092-323.251507C245.475883 46.731193 371.847559 0 506.007767 0c109.834757 0 214.321755 31.071855 302.134711 89.842363 85.810975 57.426712 150.313185 139.453119 181.659284 230.913522l-77.830472 26.656526c-25.532125-74.539543-78.653204-141.729345-149.572725-189.228421C688.270388 108.518386 599.634698 82.273226 506.007767 82.273226 272.296955 82.273226 82.163529 249.397574 82.163529 454.83382c0 103.801387 49.912424 203.735933 136.957497 274.244088 23.530143 19.059964 25.011061 50.131819 22.597713 72.674683 72.126195-13.9316 88.14205-7.815957 95.985431-4.881545a470.657704 470.657704 0 0 0 168.303597 30.495943v82.273226a552.958355 552.958355 0 0 1-194.219663-34.664452c-16.728889-0.301668-72.290742 10.421275-116.142372 21.199068z" fill="#e6e6e6" p-id="3113"></path><path d="M1117.133292 1024l-75.746217-18.593749c-38.394172-9.461421-80.792308-17.277378-94.504513-17.551622a469.670425 469.670425 0 0 1-163.888266 29.015025c-237.330834 0-430.563218-173.815903-430.563219-387.506897S545.773159 241.883286 782.994296 241.883286s430.563218 173.815903 430.563218 387.506896c0 106.297008-48.733174 208.151263-134.105359 281.127614a186.869922 186.869922 0 0 0 10.256728 40.451003zM782.994296 324.156512c-191.970862 0-348.289992 136.930073-348.289992 305.23367s156.31913 305.23367 348.289992 305.23367a387.369774 387.369774 0 0 0 138.630386-25.175608c7.185195-2.742441 20.321487-7.761108 75.307427 2.166529-0.740459-19.197086 2.934412-42.398136 21.939527-57.865503 71.303463-57.591258 112.193256-139.453119 112.193256-224.331664 0.219395-168.358446-156.099735-305.261094-348.070596-305.261094zM385.340368 324.979244a54.848818 54.848818 0 1 1 54.848818-54.848817 54.848818 54.848818 0 0 1-54.848818 54.848817z m0-82.273226a27.424409 27.424409 0 1 0 27.424409 27.424409 27.424409 27.424409 0 0 0-27.424409-27.424409z" fill="#e6e6e6" p-id="3114"></path><path d="M637.644929 319.494362a54.848818 54.848818 0 1 1 54.848817-54.848817 54.848818 54.848818 0 0 1-54.848817 54.848817z m0-82.273226a27.424409 27.424409 0 1 0 27.424409 27.424409 27.424409 27.424409 0 0 0-27.424409-27.424409zM665.069338 566.314042a54.848818 54.848818 0 1 1 54.848817-54.848818 54.848818 54.848818 0 0 1-54.848817 54.848818z m0-82.273227a27.424409 27.424409 0 1 0 27.424408 27.424409 27.424409 27.424409 0 0 0-27.424408-27.424409zM917.373899 560.82916a54.848818 54.848818 0 1 1 54.848817-54.848818 54.848818 54.848818 0 0 1-54.848817 54.848818z m0-82.273227a27.424409 27.424409 0 1 0 27.424408 27.424409 27.424409 27.424409 0 0 0-27.424408-27.424409z" fill="#e6e6e6" p-id="3115"></path></svg>
                                        </div>

                                        <!-- GITHUB -->
                                        <div class="bg-github pt-3 pb-2 px-4 rounded-lg cursor-pointer mr-4" @click="loginWithGithub">
                                          <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" class="text-white h-4 w-4 svg-inline--fa fa-github-alt fa-w-15" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512"><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg>
                                        </div>
                                    </div>
                                    <vs-button class="mt-4" @click="loginAuth0" color="#eb5424">管理员</vs-button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </vx-card>
        </div>
    </div>
</template>

<script>

// 引入api.js  好调用里面的接口
import { requestLogin } from '../acl/api'

export default {
    data() {
        return {
            loginInfo: {
                email: '',
                password: '',
            },
            checkbox_remember_me: true
        }
    },
    computed: {
        validateForm() {
            return !this.errors.any() && this.loginInfo.email != '' && this.loginInfo.password != '';
        },
    },
    mounted () {
        this.getLocalStorage()
    },
    methods: {
        login() {
            // 调用函数  传递参数 获取结果
            requestLogin(this.loginInfo).then(data => {
                if (data.code === 200) {
                    // 判断是否勾记住密码
                    if (this.checkbox_remember_me === true) {
                        localStorage.setItem('password', data.data.user.password);
                    }else{
                        localStorage.removeItem('password');
                    }
                    localStorage.setItem('email', data.data.user.email);
                    localStorage.setItem('avatar', data.data.user.avatar);
                    localStorage.setItem('nickName', data.data.user.nickName);
                    localStorage.setItem('personality', data.data.user.personality);

                    // 保存用户信息登录信息cookie 30分钟
                    // 到期自动退出
                    this.rememberUser();
                    this.$router.push(
                        {
                            name: 'dashboardAnalytics'
                        }
                    );
                    // 发送通知
                    this.$vs.notify({
                        title: '登录提示',
                        text: data.msg,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'success'
                    });
                } else  {
                    // 发送通知
                    this.$vs.notify({
                        title: '登录提示',
                        text: data.msg,
                        iconPack: 'feather',
                        icon: 'icon-alert-circle',
                        color: 'danger'
                    });
                }
            })
        },
        // 读取localStorage 填充数据
        getLocalStorage: function () {
            this.loginInfo.email = localStorage.getItem('email');
            this.loginInfo.password = localStorage.getItem('password')
        },
        // 记住用户
        rememberUser () {
              // 传入账号名，密码，保存天数三个参数
              this.setCookie(this.loginInfo.email, this.loginInfo.password, 1)
        },
        // 设置cookie
        setCookie (email, password, rememberTime) {
            const exDate = new Date(); // 获取时间
            exDate.setTime(exDate.getTime() + 9 * 60 * 60 * 1000 * rememberTime); // 保存的天数
            // 字符串拼接cookie
            window.document.cookie =
                'email' + '=' + email + ';path=/;expires=' + exDate.toGMTString();
            window.document.cookie =
                'password' + '=' + password + ';path=/;expires=' + exDate.toGMTString()
        },
        // 清除cookie
        clearCookie: function () {
            this.setCookie('', '', -1) // 修改两个值都为空，天数为-1天就好了
        },

        loginAuth0() {
            if (this.$store.state.auth.isUserLoggedIn()) {
                this.notifyAlreadyLogedIn();
                return false
            }
            this.$auth.login({ target: this.$route.query.to });
        },

        // Google login
        loginWithGoogle() {
            this.$store.dispatch('auth/loginWithGoogle', {notify: this.$vs.notify})
        },

        // Facebook login
        loginWithFacebook() {
            this.$store.dispatch('auth/loginWithFacebook', {notify: this.$vs.notify})
        },

        // Twitter login
        loginWithTwitter() {
            this.$store.dispatch('auth/loginWithTwitter', {notify: this.$vs.notify})
        },

        // Github login
        loginWithGithub() {
            this.$store.dispatch('auth/loginWithGithub', {notify: this.$vs.notify})
        },

        notifyAlreadyLogedIn() {
            this.$vs.notify({
                title: 'Login Attempt',
                text: 'You are already logged in!',
                iconPack: 'feather',
                icon: 'icon-alert-circle',
                color: 'warning'
            });
        },
        registerUser() {
            if(this.$store.state.auth.isUserLoggedIn()) {
                this.notifyAlreadyLogedIn();
                return false;
            }
            this.$router.push('/pages/register');
        }
    }
}
</script>

<style lang="scss">
#page-login {
    .social-login {
        .bg-facebook {
          background-color: #F4C43D;
        }
        .bg-twitter {
          background-color: #00aaff;
        }
        .bg-google {
          background-color: #08BA06;
        }
        .bg-github {
          background-color: #333;
        }
    }
}
</style>
