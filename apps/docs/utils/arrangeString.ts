/**
 * 文字列の1文字目を大文字に変換する
 * @param {string} str - 変換する文字列
 * @returns {string} - 変換後の文字列
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
