export function useDark() {
  const isDark = ref(false);

  watch(isDark, () => {
    changeTheme();
  });

  function changeTheme() {
    if (isDark.value) {
      document.body.setAttribute("arco-theme", "dark");
    } else {
      document.body.removeAttribute("arco-theme");
    }
  }

  return { isDark, changeTheme };
}
