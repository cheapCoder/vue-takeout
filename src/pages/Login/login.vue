<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on: useSms}" @click="useSms = true">短信登录</a>
          <a href="javascript:;" :class="{on: !useSms}" @click="useSms = false">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on: useSms}">
            <section class="login_message">
              <!-- <input type="tel" maxlength="11" placeholder="手机号" v-model="tel_number" />
              <button
                :disabled="!isRightPhone || intervalLastTime > 0"
                class="get_verification"
                :class="{on: isRightPhone}"
                @click.prevent="getSmsCaptcha"
              >{{intervalLastTime ? `剩余${intervalLastTime}` : '获取验证码'}}</button>-->
              <ValidationProvider rules="tel" v-slot="{ errors }" name="tel">
                <input type="tel" maxlength="11" placeholder="手机号" v-model="tel_number" />
                <span style="color: red">{{ errors[0] }}</span>
                <!-- 发送短信验证码按钮 -->
                <button
                  :disabled="!isRightPhone || intervalLastTime > 0"
                  class="get_verification"
                  :class="{on: isRightPhone}"
                  @click.prevent="getSmsCaptcha"
                >{{intervalLastTime ? `剩余${intervalLastTime}s` : '获取验证码'}}</button>
              </ValidationProvider>
            </section>
            <section class="login_verification">
              <ValidationProvider rules="numCode" v-slot="{ errors }" name="numCode">
                <input type="tel" maxlength="8" placeholder="验证码" v-model="smsCaptcha" />
                <span style="color: red">{{ errors[0] }}</span>
              </ValidationProvider>
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on: !useSms}">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" v-model="name" />
              </section>
              <section class="login_verification">
                <input
                  :type="passwordShow ? 'text' : 'password'"
                  maxlength="8"
                  placeholder="密码"
                  v-model="password"
                />
                <div
                  class="switch_button"
                  :class="{off: passwordShow}"
                  @click="passwordShow = !passwordShow"
                >
                  <div class="switch_circle" :class="{off: passwordShow}"></div>
                  <span class="switch_text" style="float: left">{{passwordShow ? ': >' : ''}}</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" v-model="picCaptcha" />
                <img
                  class="get_verification"
                  ref="captcha"
                  src="http://localhost:4000/captcha"
                  alt="captcha"
                  @click.prevent="getPWCaptcha"
                />
              </section>
            </section>
          </div>
          <button class="login_submit" @click.prevent="login">{{$t("login")}}</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back">
        <i class="iconfont icon-jiantou2"></i>
      </a>
    </div>
    <mt-button class="lanBtn" type="primary" @click="changeLang">{{$t("language")}}</mt-button>
  </section>
</template>


<script type="text/ecmascript-6">
import { Toast  } from "mint-ui";
import { ValidationProvider, extend } from "vee-validate";

extend("tel", {
  validate: (value) => /^1\d{10}$/.test(value),
  message: "电话号码格式错误",
});
extend("numCode", {
  validate: (value) => /^\d{4,6}$/.test(value),
  message: "验证码格式错误",
});

export default {
  data() {
    return {
      useSms: true,
      passwordShow: false,
      intervalLastTime: 0,

      tel_number: "",
      smsCaptcha: "",

      name: "",
      password: "",
      picCaptcha: "",
    };
  },
  computed: {
    isRightPhone() {
      return /^1\d{10}$/.test(this.tel_number);
    },
  },
  methods: {
    async getSmsCaptcha() {
      this.intervalLastTime = 5;

      // 防抖
      lastTimeId && clearInterval(lastTimeId);
      let lastTimeId = setInterval(() => {
        this.intervalLastTime--;
        this.intervalLastTime === 0 && clearInterval(lastTimeId);
      }, 1000);
      // 发送短信验证码
      const result = await this.$api.reqSmsCaptcha(this.tel_number);
      if (!result.code) {
        Toast({
          message: "短信发送成功",
          position: "bottom",
          duration: 1000,
        });
      } else {
        alert(result.msg);
      }
    },
    getPWCaptcha() {
      this.$refs.captcha.src =
        "http://localhost:4000/captcha?time=" + Date.now();
    },
    async login() {
      // 前端验证未加
      // if(this.useSms) {
      //   const success = await this.$validator.validateAll(["numCode", "tel"]);
      // } else {
      //   const success = await this.$validator.validateAll(["numCode", "tel"]);
      // }
      let result;
      // 判断登陆方式并按方式发送对应请求
      if (this.useSms) {
        let smsLogin = {
          phone: this.tel_number,
          smsCaptcha: this.smsCaptcha,
        };
        result = await this.$api.reqSmsLogin(smsLogin);
      } else {
        let pwLogin = {
          name: this.name,
          pwd: this.password,
          captcha: this.picCaptcha,
        };
        result = await this.$api.reqPwLogin(pwLogin);
      }
      if (result.code) {
        Toast({
          message: result.msg,
          duration: 1000
        });
        
        this.picCaptcha = "";
        this.getPWCaptcha();
      } else {
        this.$store.dispatch("setUser", result.data);
        // 登录后跳转路由
        this.$router.push("/profile");
        // console.log(result);
      }
    },
    changeLang() {
      // console.log(this.$i18n);
      let lan = this.$i18n.locale
      this.$i18n.locale = lan === 'en' ? 'zh-CN' : 'en';
    },
  },
  components: {
    ValidationProvider,
    
  },
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.lanBtn {
  background-color #02a774
  width 45px
  height 20px
  font-size 1px
  position fixed
  right 20px 
  top 20px
}
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;

  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;

    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }

      .login_header_title {
        padding-top: 40px;
        text-align: center;

        >a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;

          &:first-child {
            margin-right: 40px;
          }

          &.on {
            color: #02a774;
            font-weight: 700;
            border-bottom: 2px solid #02a774;
          }
        }
      }
    }

    .login_content {
      >form {
        >div {
          display: none;

          &.on {
            display: block;
          }

          input {
            width: 100%;
            height: 100%;
            padding-left: 10px;
            box-sizing: border-box;
            border: 1px solid #ddd;
            border-radius: 4px;
            outline: 0;
            font: 400 14px Arial;

            &:focus {
              border: 1px solid #02a774;
            }
          }

          .login_message {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .get_verification {
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);
              border: 0;
              color: #ccc;
              font-size: 14px;
              background: transparent;

              &.on {
                color: black;
              }
            }
          }

          .login_verification {
            position: relative;
            margin-top: 16px;
            height: 48px;
            font-size: 14px;
            background: #fff;

            .switch_button {
              font-size: 12px;
              border: 1px solid #ddd;
              border-radius: 8px;
              transition: background-color 0.3s, border-color 0.3s;
              padding: 0 6px;
              width: 30px;
              height: 16px;
              line-height: 16px;
              color: #fff;
              position: absolute;
              top: 50%;
              right: 10px;
              transform: translateY(-50%);

              &.off {
                background: $green;

                .switch_text {
                  float: right;
                  color: #ddd;
                }
              }

              &.on {
                background: #02a774;
              }

              >.switch_circle {
                // transform translateX(27px)
                position: absolute;
                top: -1px;
                left: -1px;
                width: 16px;
                height: 16px;
                border: 1px solid #ddd;
                border-radius: 50%;
                background: #fff;
                box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
                transition: transform 0.3s;

                &.off {
                  transform: translateX(27px);
                }
              }
            }
          }

          .login_hint {
            margin-top: 12px;
            color: #999;
            font-size: 14px;
            line-height: 20px;

            >a {
              color: #02a774;
            }
          }
        }

        .login_submit {
          display: block;
          width: 100%;
          height: 42px;
          margin-top: 30px;
          border-radius: 4px;
          background: #4cd96f;
          color: #fff;
          text-align: center;
          font-size: 16px;
          line-height: 42px;
          border: 0;
        }
      }

      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }

    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;

      >.iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>