<!-- components/Calendar.vue -->
<template>
  <div class="calendar-container">
    <!-- 日历头部：年月切换 + 标题 -->
    <div class="calendar-header">
      <button
          class="calendar-btn"
          @click="prevMonth"
          aria-label="上一月"
      >
        ◀
      </button>
      <h3 class="calendar-title">
        {{ currentYear }}年{{ currentMonth + 1 }}月
      </h3>
      <button
          class="calendar-btn"
          @click="nextMonth"
          aria-label="下一月"
      >
        ▶
      </button>
    </div>

    <!-- 星期表头 -->
    <div class="calendar-week-header">
      <div class="week-day" v-for="(day, index) in weekDays" :key="index">
        {{ day }}
      </div>
    </div>

    <!-- 日期网格 -->
    <div class="calendar-grid">
      <!-- 上月占位 -->
      <div
          class="calendar-cell prev-month"
          v-for="(day, index) in prevMonthDays"
          :key="'prev-' + index"
      >
        {{ day }}
      </div>

      <!-- 当月日期 -->
      <div
          class="calendar-cell current-month"
          v-for="(day, index) in currentMonthDays"
          :key="'current-' + index"
          :class="{
          'today': isToday(day),
          'selected': selectedDate?.getDate() === day &&
                      selectedDate?.getMonth() === currentMonth &&
                      selectedDate?.getFullYear() === currentYear
        }"
          @click="selectDate(day)"
      >
        {{ day }}
      </div>

      <!-- 下月占位 -->
      <div
          class="calendar-cell next-month"
          v-for="(day, index) in nextMonthDays"
          :key="'next-' + index"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// 星期表头
const weekDays = ['日', '一', '二', '三', '四', '五', '六']

// 核心状态
const now = new Date()
const currentYear = ref(now.getFullYear())
const currentMonth = ref(now.getMonth()) // 0-11
const selectedDate = ref<Date | null>(now) // 默认选中今天

// 计算当月总天数
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// 计算当月第一天是星期几（0-6）
const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

// 上月天数
const prevMonthDays = computed(() => {
  const prevMonth = currentMonth.value === 0 ? 11 : currentMonth.value - 1
  const prevYear = currentMonth.value === 0 ? currentYear.value - 1 : currentYear.value
  const prevMonthTotalDays = getDaysInMonth(prevYear, prevMonth)
  const firstDay = getFirstDayOfMonth(currentYear.value, currentMonth.value)

  const days: number[] = []
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push(prevMonthTotalDays - i)
  }
  return days
})

// 当月天数
const currentMonthDays = computed(() => {
  const totalDays = getDaysInMonth(currentYear.value, currentMonth.value)
  const days: number[] = []
  for (let i = 1; i <= totalDays; i++) {
    days.push(i)
  }
  return days
})

// 下月占位天数
const nextMonthDays = computed(() => {
  const totalCells = 42 // 6行 * 7列
  const usedCells = prevMonthDays.value.length + currentMonthDays.value.length
  const days: number[] = []
  for (let i = 1; i <= totalCells - usedCells; i++) {
    days.push(i)
  }
  return days
})

// 切换上一月
const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11
    currentYear.value -= 1
  } else {
    currentMonth.value -= 1
  }
}

// 切换下一月
const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0
    currentYear.value += 1
  } else {
    currentMonth.value += 1
  }
}

// 判断是否是今天
const isToday = (day: number) => {
  return (
      day === now.getDate() &&
      currentMonth.value === now.getMonth() &&
      currentYear.value === now.getFullYear()
  )
}

// 选中日期
const selectDate = (day: number) => {
  selectedDate.value = new Date(currentYear.value, currentMonth.value, day)
}

// 监听年月变化，清空选中（可选）
watch([currentYear, currentMonth], () => {
  // 切换月份后，若选中的不是当月日期则清空
  if (selectedDate.value?.getMonth() !== currentMonth.value ||
      selectedDate.value?.getFullYear() !== currentYear.value) {
    selectedDate.value = null
  }
})
</script>

<style scoped>
/* 日历容器（使用主题变量，与音乐播放器风格统一） */
.calendar-container {
  width: 100%;
  margin: 8px 0 12px 0;
  padding: 12px 10px;
  border-radius: 8px;
  background: var(--vp-c-bg-alt) !important;
  box-sizing: border-box !important;
  display: block !important;
  position: relative !important;
  z-index: 10 !important;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  /* 无边框 */
  border: none !important;
}

/* 日历头部 */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-btn {
  background: transparent;
  border: none;
  color: var(--vp-c-text-2);
  font-size: 12px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.calendar-btn:hover {
  background: var(--vp-c-bg-soft);
}

.calendar-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

/* 星期表头 */
.calendar-week-header {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 6px;
}

.week-day {
  text-align: center;
  font-size: 12px;
  color: var(--vp-c-text-2);
  font-weight: 500;
  padding: 4px 0;
}

/* 日期网格 */
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

/* 日期单元格 */
.calendar-cell {
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

/* 上月/下月日期 */
.prev-month, .next-month {
  color: var(--vp-c-text-3);
}

.prev-month:hover, .next-month:hover {
  background: var(--vp-c-bg-soft);
}

/* 当月日期 */
.current-month {
  color: var(--vp-c-text-1);
}

.current-month:hover {
  background: var(--vp-c-bg-soft);
}

/* 今天 */
.today {
  background: var(--vp-c-brand-1) !important;
  color: white !important;
  font-weight: 600;
}

/* 选中日期 */
.selected {
  background: var(--vp-c-brand-soft) !important;
  color: var(--vp-c-brand-1) !important;
  font-weight: 600;
}

/* 暗黑模式适配（直接使用data-theme变量，无需重复定义） */
[data-theme="dark"] .calendar-btn:hover,
[data-theme="dark"] .prev-month:hover,
[data-theme="dark"] .next-month:hover,
[data-theme="dark"] .current-month:hover {
  background: var(--vp-c-bg-soft);
}
</style>