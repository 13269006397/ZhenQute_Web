/*=========================================================================================
  File Name: moduleCalendarState.js
  Description: Calendar Module State
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

export default {

  // Common Labels for both calendars
  calendarLabels: [
      { text: '业务' ,value : 'business', color: 'success' },
      { text: '工作', value: 'work', color: 'warning'},
      { text: '个人', value: 'personal', color: 'danger'},
  ],

  calendarEvents: [
    {
        id: 1,
        title: '我的事件',
        start: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        end: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        desc: 'demo event',
        cssClass: 'event-success',
        label: 'business'
    },
  ],

  // Simple Calendar State
  simpleCalendarEvents: [
    {
        id: 1,
        title: '我的事件',
        startDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 3),
        endDate: new Date(new Date() - 1000 * 60 * 60 * 24 * 2),
        url: '',
        classes: 'event-success',
        label: 'business'
    },
  ]
}
