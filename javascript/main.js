// 获取前n天或者n天后的date对象
const getBeforeDate = (date, n) => {
  const copy = new Date(date.valueOf()); // 为了不影响原引用而复制date对象
  copy.setDate(copy.getDate() - n);
  const year = copy.getFullYear();
  const month = copy.getMonth();
  const day = copy.getDate();
  return new Date(year, month, day);
};
// date -> YYYYMMDD
const date2YYYYMMDD = (date, joiner = ".") => {
  const year = date.getFullYear();
  let month = date.getMonth() + 1; // 获取月，月份比较特殊，0是1月，11是12月
  month = month < 10 ? "0" + month : month.toString();
  let day = date.getDate();
  day = day < 10 ? "0" + day : day.toString();
  return year + joiner + month + joiner + day;
};
/*警情IMG image/xhdpi/hardwork_bg_security_alarm.png*/
/*电量低  image/xhdpi/hardwork_bg_security_LowPower.png*/
/*设备开启 image/xhdpi/hardwork_bg_security_open.png*/
/*设备关闭 image/xhdpi/hardwork_bg_security_close.png*/
/*设备拆开 image/xhdpi/hardwork_bg_security_disconnect.png*/
/* 按纽*/
/*警情按纽 image/xhdpi/hardwork_icon_security_alarm.png */
/*电量低按纽 image/xhdpi/hardwork_icon_security_LowPower.png*/
/*设备开启按纽 image/xhdpi/hardwork_icon_security_open.png  */
/*设备关闭按纽 image/xhdpi/hardwork_icon_security_close.png*/
/*设备拆开按纽 image/xhdpi/hardwork_icon_security_disconnect.png*/
/* 设备撤防按纽 image/xhdpi/hardwork_icon_security_disaming.png */
const data = {
  date: "20190330",
  doid: "107VYYT3QE73X2FE",
  data: [
    { at: "0000", v0: 25.3, v1: 70.0 },
    { at: "0020", v0: 25.5, v1: 69.5 },
    { at: "0040", v0: 25.5, v1: 70.1 },
    { at: "0100", v0: 25.5, v1: 70.5 },
    { at: "0120", v0: 25.5, v1: 70.4 },
    { at: "0140", v0: 25.5, v1: 71.0 },
    { at: "0200", v0: 25.6, v1: 71.1 },
    { at: "0220", v0: 25.6, v1: 70.8 },
    { at: "0240", v0: 25.6, v1: 71.0 },
    { at: "0300", v0: 25.6, v1: 71.4 },
    { at: "0320", v0: 25.6, v1: 71.6 },
    { at: "0340", v0: 25.6, v1: 71.1 },
    { at: "0400", v0: 25.6, v1: 72.0 },
    { at: "0420", v0: 25.6, v1: 72.4 },
    { at: "0440", v0: 25.6, v1: 72.8 },
    { at: "0500", v0: 25.7, v1: 73.9 },
    { at: "0520", v0: 25.7, v1: 73.5 },
    { at: "0540", v0: 25.7, v1: 73.3 },
    { at: "0600", v0: 25.7, v1: 74.3 },
    { at: "0620", v0: 25.7, v1: 74.0 },
    { at: "0640", v0: 25.7, v1: 72.9 },
    { at: "0700", v0: 25.7, v1: 72.8 },
    { at: "0720", v0: 25.7, v1: 72.7 },
    { at: "0740", v0: 25.7, v1: 72.4 },
    { at: "0800", v0: 25.7, v1: 72.3 },
    { at: "0820", v0: 25.7, v1: 71.8 },
    { at: "0840", v0: 25.7, v1: 71.0 },
    { at: "0900", v0: 25.6, v1: 70.2 },
    { at: "0920", v0: 25.7, v1: 70.1 },
    { at: "0940", v0: 25.7, v1: 69.9 },
    { at: "1000", v0: 25.7, v1: 70.0 },
    { at: "1020", v0: 25.7, v1: 69.9 },
    { at: "1040", v0: 25.7, v1: 69.9 },
    { at: "1100", v0: 25.8, v1: 70.4 },
    { at: "1120", v0: 25.8, v1: 70.4 },
    { at: "1140", v0: 25.8, v1: 70.6 },
    { at: "1200", v0: 25.8, v1: 70.6 },
    { at: "1220", v0: 25.8, v1: 71.4 },
    { at: "1240", v0: 25.8, v1: 71.7 },
    { at: "1300", v0: 25.8, v1: 72.2 },
    { at: "1320", v0: 25.8, v1: 72.2 },
    { at: "1340", v0: 25.8, v1: 72.3 },
    { at: "1400", v0: 25.8, v1: 72.4 },
    { at: "1420", v0: 25.8, v1: 72.6 },
    { at: "1440", v0: 25.8, v1: 72.5 },
    { at: "1500", v0: 25.8, v1: 72.4 },
    { at: "1520", v0: 25.8, v1: 72.2 },
    { at: "1540", v0: 25.8, v1: 72.1 },
    { at: "1600", v0: 25.9, v1: 71.8 },
    { at: "1620", v0: 25.8, v1: 71.6 },
    { at: "1640", v0: 25.8, v1: 70.8 },
    { at: "1700", v0: 25.8, v1: 70.2 },
    { at: "1720", v0: 25.8, v1: 70.0 },
    { at: "1740", v0: 25.8, v1: 69.3 },
    { at: "1800", v0: 25.8, v1: 69.1 },
    { at: "1820", v0: 25.7, v1: 68.6 },
    { at: "1840", v0: 25.7, v1: 68.4 },
    { at: "1900", v0: 25.7, v1: 68.3 },
    { at: "1920", v0: 25.6, v1: 68.0 },
    { at: "1940", v0: 25.6, v1: 67.9 },
    { at: "2000", v0: 25.6, v1: 67.6 },
    { at: "2020", v0: 25.6, v1: 67.3 },
    { at: "2040", v0: 25.5, v1: 67.0 },
    { at: "2100", v0: 25.5, v1: 66.9 },
    { at: "2120", v0: 25.5, v1: 66.8 },
    { at: "2140", v0: 25.5, v1: 66.7 },
    { at: "2200", v0: 25.5, v1: 66.8 },
    { at: "2220", v0: 25.5, v1: 67.1 },
    { at: "2240", v0: 25.5, v1: 67.0 },
    { at: "2300", v0: 25.5, v1: 67.2 },
    { at: "2320", v0: 25.5, v1: 67.1 },
    { at: "2340", v0: 25.4, v1: 67.1 },
  ],
};
const deviceInfo = {
  id: 109,
  doid: "107VYYT3QE73X2FE",
  dtype: "th",
  power: "100",
  online: 0,
  cid: "220226626",
  signal1: -79.0,
  time: 1553961627000,
  lastV0: 25.4,
  lastV1: 67.1,
  fwverVersion: "1.1.1",
  highestFwverVersion: "1.1.1",
  updateFwverState: 0,
  updateFwverVersion: 0,
  fotaRst: 0,
  cityCode: "CN101280601",
  cityName: "深圳",
  smsOn: 1,
  state: 0,
};
// 电池分格
let tmp = [];
const power = parseInt(deviceInfo.power);
if (power >= 0 && power <= 25) {
  tmp = [1];
} else if (power > 25 && power <= 50) {
  tmp = [1, 1];
} else if (power > 50 && power <= 75) {
  tmp = [1, 1, 1];
} else if (power > 75 && power <= 100) {
  tmp = [1, 1, 1, 1];
}
deviceInfo.power = tmp;
// 折线图
let pmChart = {};
const option = {
  title: {
    text: "PM2.5历史数据",
    textStyle: {
      color: "#242424",
      fontWeight: "normal",
      fontSize: 12,
    },
    // padding: 0,
    top: "top",
    left: "5%",
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "rgba(74,220,220,.8)",
    formatter: function (params) {
      // console.log('params', params);
      var showHtm = "";
      for (var i = 0; i < params.length; i++) {
        showHtm = params[i].value.time + " " + params[i].value.data + "μg/m³";
      }
      return showHtm;
    },
  },
  grid: {
    top: "40",
    right: "5%",
  },
  xAxis: [
    {
      axisLine: { show: true },
      // splitLine: { show: true },
      type: "category",
      boundaryGap: false,
    },
  ],
  yAxis: [
    {
      axisLine: { show: true },
      splitLine: { show: true },
      type: "value",
      position: "left",
    },
  ],
};
// vue实例
var mainAct = new Vue({
  el: "#proActivite",
  data: {
    pmDateEnd: new Date(),
    calendarDate: new Date(),
    alarmList: [
      {
        date: `2月6日`,
        time: `22:20-23:30`,
        alarmTitle: "PM2.5超标",
        value: 40,
      },
      {
        date: `2月6日`,
        time: `22:20-23:30`,
        alarmTitle: "电量不足",
      },
      {
        date: `2月6日`,
        time: `22:20-23:30`,
        alarmTitle: "PM2.5超标",
        value: 40,
      },
    ],
    pmNextDisabled: true, // 防止多次点击按钮
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    lastDay: new Date().getDate(),
    isDialog: false,
    dialogTitle: "确认布防？",
  },
  mounted() {
    pmChart = echarts.init(document.getElementById("pm"));
    this.pmDateEnd = new Date();
    this.updatepmDayChart();
  },
  methods: {
    // 显示日历选择器
    showActionSheet() {
      this.calendarDate = this.pmDateEnd;
      this.year = this.calendarDate.getFullYear();
      this.month = this.calendarDate.getMonth() + 1;
      this.lastDay = this.calendarDate.getDate();
      renderSingleMonth(this.year, this.month, this.lastDay);

      var $iosActionsheet = $("#iosActionsheet");
      var $iosMask = $("#iosMask");

      $iosActionsheet.addClass("weui-actionsheet_toggle");
      $iosMask.fadeIn(200);
    },
    // 确认选择日历日期
    confirmDate() {
      this.pmDateEnd = this.calendarDate;
      console.log(this.calendarDate);
      this.hideActionSheet();
    },
    // 隐藏日历选择器
    hideActionSheet() {
      var $iosActionsheet = $("#iosActionsheet");
      var $iosMask = $("#iosMask");

      $iosActionsheet.removeClass("weui-actionsheet_toggle");
      $iosMask.fadeOut(200);
    },
    // 显示PM2.5介绍
    showDialog() {
      $("#introduction").fadeIn(200);
    },
    hideDialog() {
      $("#introduction").fadeOut(200);
    },
    // actionSheet中的上个月
    prevMonth() {
      this.month = this.month - 1;
      this.calendarDate = new Date(this.year, this.month, 0);
      let lastDay = this.calendarDate.getDate();
      renderSingleMonth(this.year, this.month, lastDay);
    },
    // actionSheet中的下个月
    nextMonth() {
      this.month = this.month + 1;
      this.calendarDate = new Date(this.year, this.month, 0);
      let lastDay = this.calendarDate.getDate();
      renderSingleMonth(this.year, this.month, lastDay);
    },
    // 上一个PM2.5时间周期
    pmPrevPeriod() {
      this.pmNextDisabled = false;
      this.pmDateEnd = getBeforeDate(this.pmDateEnd, 1);
      this.updatepmDayChart();
    },
    // 下一个PM2.5时间周期
    pmNextPeriod() {
      this.pmDateEnd = getBeforeDate(this.pmDateEnd, -1);
      this.updatepmDayChart();
    },
    // 获取PM2.5按日数据并刷新图表
    updatepmDayChart() {
      if (date2YYYYMMDD(this.pmDateEnd) === date2YYYYMMDD(new Date())) {
        this.pmNextDisabled = true;
      }
      // const loading = this.$loading({
      //   lock: true,
      //   text: '请稍后',
      //   spinner: 'el-icon-loading',
      //   background: 'rgba(0, 0, 0, 0.7)'
      // })
      pmChart.clear();
      // 假的数据
      let res = {
        msg: "请求成功",
        code: 0,
        data: {
          date: "20190321",
          doid: "509157846",
          data: [
            { at: "0000", v0: 24.0 },
            { at: "0010", v0: 27.0 },
            { at: "0020", v0: 23.0 },
            { at: "0030", v0: 24.0 },
            { at: "0040", v0: 23.0 },
            { at: "0050", v0: 24.0 },
            { at: "0100", v0: 25.0 },
            { at: "0110", v0: 25.0 },
            { at: "0120", v0: 22.0 },
            { at: "0130", v0: 23.0 },
            { at: "0140", v0: 21.0 },
            { at: "0150", v0: 23.0 },
            { at: "0200", v0: 22.0 },
            { at: "0210", v0: 21.0 },
            { at: "0220", v0: 22.0 },
            { at: "0230", v0: 20.0 },
            { at: "0240", v0: 21.0 },
            { at: "0250", v0: 24.0 },
            { at: "0300", v0: 24.0 },
            { at: "0310", v0: 23.0 },
            { at: "0320", v0: 22.0 },
            { at: "0330", v0: 21.0 },
            { at: "0340", v0: 21.0 },
            { at: "0350", v0: 21.0 },
            { at: "0400", v0: 23.0 },
            { at: "0410", v0: 20.0 },
            { at: "0420", v0: 21.0 },
            { at: "0430", v0: 22.0 },
            { at: "0440", v0: 21.0 },
            { at: "0450", v0: 20.0 },
            { at: "0500", v0: 22.0 },
            { at: "0510", v0: 22.0 },
            { at: "0520", v0: 22.0 },
            { at: "0530", v0: 19.0 },
            { at: "0540", v0: 20.0 },
            { at: "0550", v0: 21.0 },
            { at: "0600", v0: 20.0 },
            { at: "0610", v0: 21.0 },
            { at: "0620", v0: 20.0 },
            { at: "0630", v0: 20.0 },
            { at: "0640", v0: 21.0 },
            { at: "0650", v0: 20.0 },
            { at: "0700", v0: 19.0 },
            { at: "0710", v0: 19.0 },
            { at: "0720", v0: 18.0 },
            { at: "0730", v0: 19.0 },
            { at: "0740", v0: 21.0 },
            { at: "0750", v0: 20.0 },
            { at: "0800", v0: 23.0 },
            { at: "0810", v0: 28.0 },
            { at: "0820", v0: 20.0 },
            { at: "0830", v0: 25.0 },
            { at: "0840", v0: 21.0 },
            { at: "0850", v0: 24.0 },
            { at: "0900", v0: 33.0 },
            { at: "0910", v0: 37.0 },
            { at: "0920", v0: 31.0 },
            { at: "0930", v0: 30.0 },
            { at: "0940", v0: 25.0 },
            { at: "0950", v0: 25.0 },
            { at: "1000", v0: 24.0 },
            { at: "1010", v0: 21.0 },
            { at: "1020", v0: 20.0 },
            { at: "1030", v0: 21.0 },
            { at: "1040", v0: 21.0 },
            { at: "1050", v0: 22.0 },
            { at: "1100", v0: 21.0 },
            { at: "1110", v0: 22.0 },
            { at: "1120", v0: 20.0 },
            { at: "1130", v0: 20.0 },
            { at: "1140", v0: 23.0 },
            { at: "1150", v0: 20.0 },
            { at: "1200", v0: 21.0 },
            { at: "1210", v0: 21.0 },
            { at: "1220", v0: 21.0 },
            { at: "1230", v0: 21.0 },
            { at: "1240", v0: 20.0 },
            { at: "1250", v0: 20.0 },
            { at: "1300", v0: 19.0 },
            { at: "1310", v0: 20.0 },
            { at: "1320", v0: 18.0 },
            { at: "1330", v0: 19.0 },
            { at: "1340", v0: 19.0 },
            { at: "1350", v0: 20.0 },
            { at: "1400", v0: 19.0 },
            { at: "1410", v0: 22.0 },
            { at: "1420", v0: 20.0 },
            { at: "1430", v0: 20.0 },
            { at: "1440", v0: 18.0 },
            { at: "1450", v0: 18.0 },
            { at: "1500", v0: 20.0 },
            { at: "1510", v0: 21.0 },
            { at: "1520", v0: 19.0 },
            { at: "1530", v0: 20.0 },
            { at: "1540", v0: 18.0 },
            { at: "1550", v0: 18.0 },
            { at: "1600", v0: 20.0 },
            { at: "1610", v0: 21.0 },
            { at: "1620", v0: 19.0 },
            { at: "1630", v0: 22.0 },
            { at: "1640", v0: 22.0 },
            { at: "1650", v0: 20.0 },
            { at: "1700", v0: 21.0 },
            { at: "1710", v0: 21.0 },
            { at: "1720", v0: 20.0 },
            { at: "1730", v0: 23.0 },
            { at: "1740", v0: 23.0 },
            { at: "1800", v0: 23.0 },
            { at: "1820", v0: 24.0 },
            { at: "1830", v0: 24.0 },
            { at: "1840", v0: 23.0 },
            { at: "1850", v0: 25.0 },
            { at: "1900", v0: 21.0 },
            { at: "1910", v0: 21.0 },
            { at: "1920", v0: 24.0 },
            { at: "1930", v0: 23.0 },
            { at: "1940", v0: 21.0 },
            { at: "1950", v0: 23.0 },
            { at: "2000", v0: 23.0 },
            { at: "2010", v0: 27.0 },
            { at: "2020", v0: 23.0 },
            { at: "2030", v0: 22.0 },
            { at: "2040", v0: 23.0 },
            { at: "2050", v0: 24.0 },
            { at: "2100", v0: 19.0 },
            { at: "2110", v0: 22.0 },
            { at: "2120", v0: 22.0 },
            { at: "2130", v0: 23.0 },
            { at: "2140", v0: 22.0 },
            { at: "2150", v0: 24.0 },
            { at: "2200", v0: 21.0 },
            { at: "2210", v0: 20.0 },
            { at: "2220", v0: 20.0 },
            { at: "2230", v0: 19.0 },
            { at: "2240", v0: 19.0 },
            { at: "2250", v0: 20.0 },
            { at: "2300", v0: 21.0 },
            { at: "2310", v0: 21.0 },
            { at: "2320", v0: 23.0 },
            { at: "2330", v0: 21.0 },
            { at: "2340", v0: 22.0 },
            { at: "2350", v0: 21.0 },
          ],
        },
        operateSuccess: true,
      };
      // DeviceAPI.getDayRecord({ ...this.params, date: this.pmDateEnd }).then(res => {
      const dayData = [
        { time: "0000" },
        { time: "0010" },
        { time: "0020" },
        { time: "0030" },
        { time: "0040" },
        { time: "0050" },
        { time: "0100" },
        { time: "0110" },
        { time: "0120" },
        { time: "0130" },
        { time: "0140" },
        { time: "0150" },
        { time: "0200" },
        { time: "0210" },
        { time: "0220" },
        { time: "0230" },
        { time: "0240" },
        { time: "0250" },
        { time: "0300" },
        { time: "0310" },
        { time: "0320" },
        { time: "0330" },
        { time: "0340" },
        { time: "0350" },
        { time: "0400" },
        { time: "0410" },
        { time: "0420" },
        { time: "0430" },
        { time: "0440" },
        { time: "0450" },
        { time: "0500" },
        { time: "0510" },
        { time: "0520" },
        { time: "0530" },
        { time: "0540" },
        { time: "0550" },
        { time: "0600" },
        { time: "0610" },
        { time: "0620" },
        { time: "0630" },
        { time: "0640" },
        { time: "0650" },
        { time: "0700" },
        { time: "0710" },
        { time: "0720" },
        { time: "0730" },
        { time: "0740" },
        { time: "0750" },
        { time: "0800" },
        { time: "0810" },
        { time: "0820" },
        { time: "0830" },
        { time: "0840" },
        { time: "0850" },
        { time: "0900" },
        { time: "0910" },
        { time: "0920" },
        { time: "0930" },
        { time: "0940" },
        { time: "0950" },
        { time: "1000" },
        { time: "1010" },
        { time: "1020" },
        { time: "1030" },
        { time: "1040" },
        { time: "1050" },
        { time: "1100" },
        { time: "1110" },
        { time: "1120" },
        { time: "1130" },
        { time: "1140" },
        { time: "1150" },
        { time: "1200" },
        { time: "1210" },
        { time: "1220" },
        { time: "1230" },
        { time: "1240" },
        { time: "1250" },
        { time: "1300" },
        { time: "1310" },
        { time: "1320" },
        { time: "1330" },
        { time: "1340" },
        { time: "1350" },
        { time: "1400" },
        { time: "1410" },
        { time: "1420" },
        { time: "1430" },
        { time: "1440" },
        { time: "1450" },
        { time: "1500" },
        { time: "1510" },
        { time: "1520" },
        { time: "1530" },
        { time: "1540" },
        { time: "1550" },
        { time: "1600" },
        { time: "1610" },
        { time: "1620" },
        { time: "1630" },
        { time: "1640" },
        { time: "1650" },
        { time: "1700" },
        { time: "1710" },
        { time: "1720" },
        { time: "1730" },
        { time: "1740" },
        { time: "1750" },
        { time: "1800" },
        { time: "1810" },
        { time: "1820" },
        { time: "1830" },
        { time: "1840" },
        { time: "1850" },
        { time: "1900" },
        { time: "1910" },
        { time: "1920" },
        { time: "1930" },
        { time: "1940" },
        { time: "1950" },
        { time: "2000" },
        { time: "2010" },
        { time: "2020" },
        { time: "2030" },
        { time: "2040" },
        { time: "2050" },
        { time: "2100" },
        { time: "2110" },
        { time: "2120" },
        { time: "2130" },
        { time: "2140" },
        { time: "2150" },
        { time: "2200" },
        { time: "2210" },
        { time: "2220" },
        { time: "2230" },
        { time: "2240" },
        { time: "2250" },
        { time: "2300" },
        { time: "2310" },
        { time: "2320" },
        { time: "2330" },
        { time: "2340" },
        { time: "2350" },
      ];
      if (res.data && res.data.data) {
        // 返回结果有数据
        // 每个点与返回的数据一一对应
        const data = res.data.data;
        let searchIdx = 0;
        for (let i = 0; i < data.length; i++) {
          for (let j = searchIdx; j < dayData.length; j++) {
            if (data[i].at === dayData[j].time) {
              dayData[j].data = data[i].v0;
              searchIdx = j + 1;
              break;
            }
          }
        }
      }
      dayData.map((item) => {
        item.time = `${item.time.substring(0, 2)}:${item.time.substring(2, 4)}`;
      });
      option.dataset = { dimensions: ["time", "data"], source: dayData };
      option.series = [
        {
          name: "",
          type: "line",
          connectNulls: true,
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: "rgba(250, 175, 106,1)", // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "rgba(250, 175, 106, 0.1)", // 100% 处的颜色
                },
              ],
            },
          },
          itemStyle: {
            color: "#F9A960", // 打点颜色
          },
          zlevel: 1,
          z: 1,
        },
      ];
      pmChart.setOption(option);
      // loading.close()
      // })
    },
  },
  filters: {
    dateFilter(date) {
      const year = date.getFullYear();
      let month = date.getMonth() + 1; // 获取月，月份比较特殊，0是1月，11是12月
      month = month < 10 ? "0" + month : month.toString();
      return year + "年" + month + "月";
    },
    // date2年月日
    date2YYYYMMDD(date) {
      const year = date.getFullYear();
      let month = date.getMonth() + 1; // 获取月，月份比较特殊，0是1月，11是12月
      let day = date.getDate();
      return year + "年" + month + "月" + day + "日";
    },
    timestamp2hhmm(timestamp) {
      if (timestamp === undefined) {
        return "--:--";
      }
      const date = new Date(timestamp);
      const addEightHours = new Date(
        date.setHours(date.getHours() + 8)
      ).toISOString();
      const output = `${addEightHours.slice(11, 13)}${addEightHours.slice(
        13,
        16
      )}`;
      return output;
    },
    pollutionLevel(val) {
      if (val === undefined) return "--";
      else if (val < 35) return "优";
      else if (val < 75) return "良";
      else if (val < 115) return "轻度污染";
      else if (val < 150) return "中度污染";
      else if (val < 250) return "重度污染";
      else return "严重污染";
    },
  },
});

// 渲染单个月
function renderSingleMonth(year, month, day) {
  var columnIndex = 1,
    cellIndex = 1;
  var prevMonth = new Date(year, month - 1, 0);
  var prevDays = [];
  // 填充前一月的空位
  while (prevMonth.getDay() !== 6) {
    prevDays.unshift(prevMonth.getDate());
    prevMonth.setDate(prevMonth.getDate() - 1);
  }
  prevDays.forEach((day) => {
    var cell = getCell(columnIndex, cellIndex);
    cell.innerHTML =
      '<div class="td-container" style="color:#B2B2B2">' + day + "</div>";
    cellIndex++;
  });
  // 当前月从1号开始
  var nowDay = 1;
  var nowMonth = new Date(year, month - 1, 1);
  var lastDay = new Date(year, month - 1, day).getDate();
  while (nowDay <= lastDay) {
    if (cellIndex > 7) {
      cellIndex = 1;
      columnIndex++;
    }
    var cell = getCell(columnIndex, cellIndex);
    const today = new Date(year, month - 1, nowDay);
    cell.innerHTML = `<div class="td-container" style="${
      date2YYYYMMDD(today) === date2YYYYMMDD(mainAct.pmDateEnd)
        ? "color:#30C0B1"
        : ""
    }" id="${date2YYYYMMDD(
      today,
      "/"
    )}" onclick="selectDate(id)">${nowDay}</div>`;

    cellIndex++;
    nowDay++;
    nowMonth.setDate(nowDay);
  }
}
// 获取到td的dom
function getCell(column, cell) {
  return document
    .querySelectorAll("#table tbody tr")
    [column - 1].querySelectorAll("td")[cell - 1];
}
const selectDate = (id) => {
  $(".td-container").removeClass("calendar-selected");
  document.getElementById(id).classList.add("calendar-selected");
  console.log(id);
  mainAct.calendarDate = new Date(id);
};

// 获取历史事件列表
// obtainDeviceHistoryParamList = function (startDateStamp, endDateStamp) {
//   Hejia.getHistoryParam({ startDate: startDateStamp, endDate: endDateStamp }, function (arr) {
//     // mainAct.inputConnent=JSON.stringify(arr);
//     updataActivity(arr);
//   }, function (msg, obj) {
//     // msg - String => error message
//     // obj – Object => { resultCode:!0, resultCodeMessage: string }
//     if (obj.resultCode == 4) {
// mainAct.itemSet = new Array();
//     }
//   });
// }

// 获取设备状态
const getDeviceState = function () {
  Hejia.getCurrentParam(
    { paramName: ["batteryLevel"] },
    function (res) {
      alert("getCurrentParam__" + JSON.stringify(res)); // {"id":"869976032983372"}
      // Hejia.getDeviceInfo(function (device) {
      //   /**
      //   device:{
      //     id:'869976032983372',
      //     type:500376,
      //     desc:'NBPM2.5检测仪',
      //     connected:false,
      //     newDevice:false,
      //     isShare:true,
      //     lastDataReceivedDate:'2019-07-11T09:15:17.000+0800',
      //     lastDataRecievedDateMs:"1562807717000",
      //     startDate:'2019-07-11T10:09:51.000+0800,
      //     startDateMs:'1562810991000'
      //   }
      //   **/

      //   // obj - Object => {device：{...}, location: {...}}.
      //   // alert(device.id);
      //   alert('getDeviceInfo__' + JSON.stringify(device))
      // }, function (msg, obj) {
      //   // msg - String => error message
      //   // obj – Object => { resultCode:!0, resultCodeMessage: string }
      //   alert(msg);
      //   alert(obj.resultCode + obj.resultCodeMessage);
      // });

      Hejia.getHistoryParam(
        { startDate: "1519974034043" },
        function (arr) {
          // arr - Array=> history records.
          alert("getHistoryParam" + JSON.stringify(arr)); // []
        },
        function (msg, obj) {
          // msg - String => error message
          // obj – Object => { resultCode:!0, resultCodeMessage: string }
          alert(msg);
          alert(obj.resultCode + obj.resultCodeMessage);
        }
      );

      // Hejia.getRuleElements(function (obj) { // 卡死
      //   // obj - Object => {device：{...}, triggers: [...], states: [...], actions: [...]}.
      //   // alert(obj.device.id);
      //   alert('getRuleElements' + JSON.stringify(obj));
      // }, function (msg, obj) {
      //   // msg - String => error message
      //   // obj – Object => { resultCode:!0, resultCodeMessage: string }
      //   alert(msg);
      //   alert(obj.resultCode + obj.resultCodeMessage);
      // });

      // Hejia.getUserRuleList(function (obj) { // 卡死
      //   // obj - Object => {rules：[...]}.
      //   // alert(obj.device.id);
      //   alert('getUserRuleList' + JSON.stringify(obj));
      // }, function (msg, obj) {
      //   // msg - String => error message
      //   // obj – Object => { resultCode:!0, resultCodeMessage: string }
      //   alert(msg);
      //   alert(obj.resultCode + obj.resultCodeMessage);
      // });

      // Hejia.getAlarmParam({ startDate: "1562470945000" }, function (arr) { // 500错误
      //   // arr - Array=> warning records.
      //   alert('getAlarmParam__' + JSON.stringify(arr));
      // }, function (msg, obj) {
      //   // msg - String => error message
      //   // obj – Object => { resultCode:!0, resultCodeMessage: string }
      //   alert(msg);
      //   alert(obj.resultCode + obj.resultCodeMessage);
      // });

      // updateStatueActivity(device);
      // stamp = getTimeStampFromStr(getCurrentDate());
      // endTimeStamp = getEndTimeStampFromStr(getCurrentDate())
      // obtainDeviceHistoryParamList(stamp, endTimeStamp);
    },
    function (msg, obj) {
      // msg - String => error message
      // obj – Object => { resultCode:!0, resultCodeMessage: string }
      alert(msg);
      // alert(obj.resultCode + obj.resultCodeMessage);
    }
  );
};

Hejia.ready(function () {
  getDeviceState();
  // getDeviceState();
  // setInterval(getDeviceState, 15 * 1000);
  // mainAct.dateTime = getCurrentDate();
});

// 更新设备状态
// updateStatueActivity = function (deviceInfo) {
//   params = deviceInfo.parameters;
//   for (var n = 0; n < params.length; n++) {
//     if (params[n].name === "connectionStatus") {
// if (params[n].value == 1) {
//   mainAct.isOnline = true;
// } else {
//   mainAct.isOnline = false;
// }
//     } else
// if (params[n].name === "protectionStatus") {
//   //  是否布防：1  撤防：0
//   if (params[n].value === "1") {
// mainAct.isProtection = true
// mainAct.dialogTitle = "确认撤防？";
//   } else {
// mainAct.isProtection = false;
// mainAct.dialogTitle = "确认布防？";
//   }
//   mainAct.eventState = params[n].value === "1" ? "状态：布防" : "状态：撤防";
// } else
//   if (params[n].name === mainAct.alarmType) {
// // 0：正常   1：有报警
// if (params[n].value === "1") {
//   mainAct.isAlarm = true;
// } else {
//   mainAct.isAlarm = false;
// }
//   } else
// if (params[n].name === "batteryLevel") {
//   // 3: 正常  1:低
//   if (params[n].value === "1") {
//     mainAct.batteryLow = true;
//   } else {
//     mainAct.batteryLow = false;
//   }
// } else
//   if (params[n].name === "physicalState") {
//     // 1：拆开  0:正常
//     // if (params[n].value === "1"){
//     //  mainAct.isDismantle=true;
//     // }else{
//     //     mainAct.isDismantle=false;
//     // }
//   }
//   }
//   if (mainAct.isOnline) {
//     mainAct.divBackground = 'background:url(image/xhdpi/hardwork_bg_security_open.png)';
//     mainAct.deviceState = "设备在线";
//     mainAct.imgButtonImg = "image/xhdpi/hardwork_icon_security_open.png";
//     if (mainAct.isDismantle) {
// mainAct.deviceState = "设备已拆开";
// mainAct.imgButtonImg = 'image/xhdpi/hardwork_icon_security_disconnect.png'
// mainAct.divBackground = 'background:url(image/xhdpi/hardwork_bg_security_disconnect.png)';
//     } else if (mainAct.isAlarm) {
// mainAct.deviceState = mainAct.isAlarm ? mainAct.alarmOn : mainAct.alarmOff;
// mainAct.imgButtonImg = 'image/xhdpi/hardwork_icon_security_alarm.png'
// mainAct.divBackground = 'background:url(image/xhdpi/hardwork_bg_security_alarm.png)';
//     } else if (mainAct.batteryLow) {
// mainAct.deviceState = "电量低"
// mainAct.imgButtonImg = 'image/xhdpi/hardwork_icon_security_LowPower.png'
// mainAct.divBackground = 'background:url( image/xhdpi/hardwork_bg_security_LowPower.png)';
//     }
//   } else {
//     mainAct.isOnline = false;
//     mainAct.isProtection = false;
//     mainAct.isAlarm = false;
//     mainAct.batteryLow = false;
//     mainAct.isDismantle = false;
//     mainAct.deviceState = '设备离线';
//     mainAct.divBackground = 'background:url(image/xhdpi/hardwork_bg_security_close.png)';
//     mainAct.imgButtonImg = 'image/xhdpi/hardwork_icon_security_close.png';
//   }
// }

// // 更新列表界面
// updataActivity = function (paramArr) {
//   mainAct.itemSet = new Array();
//   lastContentVal = '';
//   for (var n = 0; n < paramArr.length; n++) {
//     state = '';
//     params = paramArr[n].params;
//     deviceState = '0';
//     alarmState = '0';
//     for (var m = 0; m < params.length; m++) {
// param = params[m];
// if (param.name === 'connectionStatus') {
//   deviceState = param.value;
// } else if (param.name === mainAct.alarmType) {
//   alarmState = param.value;
// } else if (param.name === 'protectionStatus') {
//   timeStamp = paramArr[n].timeStamp;
//   contentVal = param.value === '1' ?
// "布防" : "撤防";
//   if (contentVal != lastContentVal) {
// lastContentVal = contentVal;
// json = {
//   "dataVal": getDateFromStamp(timeStamp),
//   "timeVal": getTimeFromStamp(timeStamp),
//   "contentVal": contentVal,
//   "isEmphasis": param.value === '0',
//   "timeStamp": timeStamp
// };
// mainAct.itemSet.push(json);
//   }
// }
//     }
//     timeStamp = paramArr[n].timeStamp;
//     contentVal = deviceState === '0' ?
// "设备离线" : alarmState === '1' ?
//   mainAct.alarmOn : mainAct.alarmOff;
//     if (contentVal != lastContentVal) {
// lastContentVal = contentVal;
// json = {
//   "dataVal": getDateFromStamp(timeStamp),
//   "timeVal": getTimeFromStamp(timeStamp),
//   "contentVal": contentVal,
//   "isEmphasis": deviceState === '0' ? false : alarmState === '0' ? false : true,
//   "timeStamp": timeStamp
// };
// mainAct.itemSet.push(json);
//     }
//   }
//   mainAct.itemSet.sort(objectArraySort('timeStamp'))
// }

// getTimeStampFromStr = function (date) {
//   return new Date(date).getTime() - 8 * 60 * 60 * 1000;
// }

// getEndTimeStampFromStr = function (date) {
//   return new Date(date).getTime() - 8 * 60 * 60 * 1000 + 24 * 60 * 60 * 1000;
// }

// getCurrentDate = function () {
//   newDate = new Date();
//   y = newDate.getFullYear(),
//     m = ("0" + (newDate.getMonth() + 1)).slice(-2),
//     d = ("0" + newDate.getDate()).slice(-2);
//   return y + "-" + m + "-" + d;
// }

// getDateFromStamp = function (timeStamp) {
//   newDate = new Date(timeStamp);
//   y = newDate.getFullYear(),
//     m = ("0" + (newDate.getMonth() + 1)).slice(-2),
//     d = ("0" + newDate.getDate()).slice(-2);
//   return y + "-" + m + "-" + d;
// }

// getTimeFromStamp = function (timeStamp) {
//   newDate = new Date(timeStamp);
//   return newDate.toTimeString().substr(0, 8);;
// }

// var objectArraySort = function (keyName) {
//   return function (objectN, objectM) {
//     var valueN = objectN[keyName]
//     var valueM = objectM[keyName]
//     if (valueN < valueM) return 1
//     else if (valueN > valueM) return -1
//     else return 0
//   }
// }
