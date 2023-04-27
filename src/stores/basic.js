import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useBasicStore = defineStore('basic', () => {  
  let isNavFixed = ref(false)
  let isDarkMode = ref(false)
  let isSidebarMini = ref(false)
  let hideConfigButton = ref(false)
  let isTransparent = ref(true)
  let isPinned = ref(true)
  let isRTL = ref(false)
  let showConfig = ref(false)
  let sidebarColor = ref("success")
  let isAbsolute = ref(false)
  let showNavs = ref(true)
  let showSidenav = ref(true)
  let showNavbar = ref(true)
  let showFooter = ref(true)
  let showMain= ref(true)
  let isLargeScreen = ref(true)

  function  toggleConfig() { showConfig = !showConfig }
  function  toggleRTL() { isRTL = !isRTL }
  function  toggleDarkMode() { isDarkMode = !isDarkMode }
  function  toggleNavBarFix() { isNavFixed = !isNavFixed }
  function  toggleShowSideNav() { showSidenav = !showSidenav }
  function  toggleSidebarPinned() { isPinned = !isPinned }
  function  setSideBarColor(string) { sidebarColor = string }  
  function  toggleLargeScreen() { isLargeScreen = !isLargeScreen }
  function  toggleTransparent() { isTransparent = !isTransparent }

  return { 
    isNavFixed, isDarkMode, isSidebarMini, hideConfigButton, isTransparent,
    isPinned, isRTL, showConfig, sidebarColor, isAbsolute, showNavbar, showNavs,
    showSidenav,showFooter, showMain, isLargeScreen,
    toggleConfig, toggleRTL, toggleDarkMode, toggleNavBarFix,
    toggleShowSideNav, toggleSidebarPinned, setSideBarColor,
    toggleLargeScreen, toggleTransparent,
  }
})

