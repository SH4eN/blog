const textGroups = ["Be better than yesterday.", "Thank Watch."]; // 要切换的文字组
const typingSpeed = 120; // 打字速度（以毫秒为单位）
const blinkDelay = 600; // 闪烁间隔（以毫秒为单位）
const textContainer = document.getElementById("typewriter-text");
let groupIndex = 0; // 当前文字组的索引
let index = 0; // 当前文字的索引
let waitForNextText = false; // 控制是否等待显示下一段文字的标志

function typeText() {
  const currentText = textGroups[groupIndex];
  if (index < currentText.length) {
    textContainer.textContent += currentText.charAt(index);
    index++;
    setTimeout(typeText, typingSpeed);
  } else {
    if (!waitForNextText) {
      waitForNextText = true; // 打印完第一段文字后等待五秒
      setTimeout(() => {
        eraseText(); // 等待五秒后执行删除文字操作
      }, 6000); // 五秒的等待时间
    }
  }
}

function eraseText() {
  if (textContainer.textContent.length > 0) {
    textContainer.textContent = textContainer.textContent.slice(0, -1);
    setTimeout(eraseText, typingSpeed / 2);
  } else {
    waitForNextText = false; // 删除完文字后，允许显示下一段文字
    groupIndex = (groupIndex + 1) % textGroups.length; // 切换到下一组文字
    index = 0; // 重置索引
    setTimeout(typeText, typingSpeed);
  }
}

// 开始效果
setTimeout(typeText, typingSpeed); // 延迟开始打字效果