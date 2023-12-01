import React from 'react';
import { Button } from 'antd';
import { decrement, increment } from './counterSlice';
import { useAppSelector, useAppDispatch } from '@/app/hooks';

const Counter: React.FC = () => {
	const count = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	return (
		<div>
			<div>
				<Button onClick={() => dispatch(increment())}>Increment</Button>
			</div>
			<span>{count}</span>
			<Button onClick={() => dispatch(decrement())}>Decrement</Button>
		</div>
	);
};

export default Counter;
