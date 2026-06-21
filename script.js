// 文字库：可随意增删句子，数组中的每条字符串都会随机出现
// 建议保持简洁，也可以添加 emoji
const textList = [
	"这是JS!",
	"按下 Alt 和 F4 以提升性能()",
	"当年我双手抱头,被打的不知所措",
	"JS太好玩了(大哭)",
	"蟒蛇?蟒蛇!哦,是蟒蛇啊...",
	"给我一杯咖啡可以在这上面留言哦!",
	"这里没有人会使用HTML写网页(笑)"
];

const textElement = document.getElementById('randomText');
const refreshButton = document.getElementById('refreshBtn');

if (textElement && refreshButton) {
function showRandomText() {
	const randomIndex = Math.floor(Math.random() * textList.length);
	textElement.textContent = textList[randomIndex];
}
	// 页面加载时显示一条
	showRandomText();

	// 点击按钮刷新
	refreshButton.addEventListener('click', showRandomText);
}