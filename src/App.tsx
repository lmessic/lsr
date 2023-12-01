import { Suspense, lazy, useState } from 'react';
import lessStyles from './app.less';
import Class from './components/Class';
import Demo1 from '@/components/demo1';
import Counter from './features/counter/counter';

const PreloadDemo = lazy(
	() =>
		import(
			/* webpackChunkName: "PreloadDemo" */
			/* webpackPreload: true */
			'@/components/PreloadDemo'
		)
);

function App() {
	// eslint-disable-next-line no-console
	const [show, setShow] = useState<boolean>(false);

	const handleClick = () => {
		setShow(true);
	};

	return (
		<div className={lessStyles.lessBox}>
			<h2>Hello World，hello lmessic</h2>
			<div className={lessStyles.lessBox_lol}>云顶之弈</div>
			<Class />
			<Demo1 />
			<h2 onClick={handleClick}>展示</h2>
			{show && (
				<>
					<Suspense fallback={null}>
						<PreloadDemo />
					</Suspense>
				</>
			)}
			<Counter />
		</div>
	);
}

export default App;
