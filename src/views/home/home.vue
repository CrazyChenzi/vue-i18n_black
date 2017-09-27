<template>
  <div>
    <Menu mode="horizontal" theme="light" active-name="1">
        <MenuItem name="1">
            <Icon type="ios-paper"></Icon>
            {{ $t('message.content') }}
        </MenuItem>
        <MenuItem name="2">
            <Icon type="ios-people"></Icon>
            {{ $t('message.user') }}
        </MenuItem>
        <Submenu name="3">
            <template slot="title">
                <Icon type="stats-bars"></Icon>
                {{ $t('message.statistics') }}
            </template>
            <MenuGroup :title="$t('message.use')">
                <MenuItem name="3-1">{{ $t('message.new_start') }}</MenuItem>
                <MenuItem name="3-2">{{ $t('message.active') }}</MenuItem>
                <MenuItem name="3-3">{{ $t('message.time_interval') }}</MenuItem>
            </MenuGroup>
            <MenuGroup :title="$t('message.keep')">
                <MenuItem name="3-4">{{ $t('message.userKeep') }}</MenuItem>
                <MenuItem name="3-5">{{ $t('message.chumUser') }}</MenuItem>
            </MenuGroup>
        </Submenu>
        <MenuItem name="4">
            <Icon type="settings"></Icon>
            {{ $t('message.comprehensive') }}
        </MenuItem>
        <Button type="ghost" size="small" @click="changeLanguage">{{languageTitle}}</Button>
    </Menu>
    <router-view></router-view>
  </div>
</template>
<script>
  import i18n from '../../assets/js/i18n.js'
  export default {
    i18n,
    data() {
      return {
        languageTitle: '中文',
      }
    },
    methods: {
      changeLanguage : function () {
        if(this.languageTitle === "中文") {
          this.languageTitle = "EN"
          this.$i18n.locale = "zh-CN";
        }else if(this.languageTitle === "EN") {
          this.languageTitle = "中文"
          this.$i18n.locale = "en-US";
        }
        // this.$router.push({path: '/i18N'})
      }
    }
  } 
</script>