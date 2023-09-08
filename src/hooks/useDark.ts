export function useDark() {
  const isDark = ref(true);

  watch(
    isDark,
    () => {
      changeTheme();
    },
    { immediate: true }
  );

  function changeTheme() {
    if (isDark.value) {
      document.body.setAttribute("arco-theme", "dark");
    } else {
      document.body.removeAttribute("arco-theme");
    }
  }

  return { isDark, changeTheme };
}