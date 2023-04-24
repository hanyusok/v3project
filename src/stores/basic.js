import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useBasicStore = defineStore('basic', () => {  
  const isNavFixed = ref(false)
  const isDarkMode = ref(false)
  const isSidebarMini = ref(false)
  const hideConfigButton = ref(false)
  const isTransparent = ref(true)
  const isPinned = ref(true)
  const isRTL = ref(false)
  const showConfig = ref(false)
  const sidebarColor = ref("success")
  const isAbsolute = ref(false)
  const showNavs = ref(true)
  const showSidenav = ref(true)
  const showNavbar = ref(true)
  const showFooter = ref(true)
  const showMain= ref(true)
  const isLargeScreen = ref(true)

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

