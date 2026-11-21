/* eslint-disable no-underscore-dangle */
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
import './public-path';

let root: ReturnType<typeof createRoot> | null = null;
const rootId = 'root';

// 渲染函数，接收qiankun传递的props
function render(props: any) {
	const { container } = props;
	const dom = container ? container.querySelector(`#${rootId}`) : document.getElementById(rootId);

	if (!dom) return;

	root = createRoot(dom);
	root.render(
		<Provider store={store}>
			<App />
		</Provider>
	);
}

export async function bootstrap() {
	// Required by the qiankun lifecycle.
}

export async function mount(props: any) {
	render(props);
}

export async function unmount(props: any) {
	const { container } = props;
	if (root) {
		root.unmount();
		root = null;
	}
	// 清空dom
	if (container) {
		container.innerHTML = '';
	}
}

// 判断：不是qiankun环境，独立启动项目
if (!window.__POWERED_BY_QIANKUN__) {
	render({});
}
