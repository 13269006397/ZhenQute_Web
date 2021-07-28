/*=========================================================================================
  File Name: moduleEmailState.js
  Description: Email Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import emails from '@/views/apps/email/mails'

export default {
    mails: emails,
    mail_filter: 'inbox',
    mailTags: [
        { text: '个人', value : 'personal', color:"success"},
        { text: '公司', value: 'company', color:"primary"},
        { text: '重要', value: 'important', color:"warning"},
        { text: '私人', value: 'private', color:"danger"},
    ],
    mailSearchQuery: '',
}
